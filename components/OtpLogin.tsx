"use client"
import { auth } from "@/firebase"
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./ui/input-otp";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { loadingIndicator } from "@/app/constants";


function OtpLogin(){
   const router = useRouter();
   const [phoneNumber, setPhoneNumber] = useState("");
   const [otp, setOtp] = useState("");
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState("");
   const [resendCountdown, setResendCountdown] = useState(0);
   const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
   const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
   const [isPending, startTransition] = useTransition();

   //RESEND CODE TIMER
   useEffect(() => {
      let timer: NodeJS.Timeout;
      if(resendCountdown > 0){
         timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      }
      return () => clearTimeout(timer);
   }, [resendCountdown])

   //CAPTCHA VERIFIER
   useEffect(() => {
      const recaptchaVerifier = new RecaptchaVerifier(
         auth, "recaptcha-container", { size: "invisible", }
      );
      setRecaptchaVerifier(recaptchaVerifier);
      return () => { recaptchaVerifier.clear(); }
   }, [auth]);

   //VERIFY OTP
   useEffect(() => {
      const hasEnteredAllDigits = otp.length === 6;
      if(hasEnteredAllDigits){
         verifyOtp();
      }
   }, [otp])

   const verifyOtp = async () => {
      startTransition(async () => {
         setError("");
         if(!confirmationResult){
            setError("Please request OTP first.")
            return;
         }
         try{
            await confirmationResult?.confirm(otp);
            router.replace("/");
         } catch(error){
            console.log(error);
            setError("Failed to verify OTP. Please check the OTP.")
         }
      })
   }

   //OTP REQUEST
   const requestOtp = async (e?: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

      setResendCountdown(30);

      startTransition(async() => {
         setError("");
         if(!recaptchaVerifier){
            return setError("Recaptcha verifier is not initialized.")
         }

         try{
            const confirmationResult = await signInWithPhoneNumber(
               auth, phoneNumber, recaptchaVerifier
            )
            setConfirmationResult(confirmationResult);
            setSuccess("OTP sent successfully.");
         } catch(err: any){
            console.log(err);
            setResendCountdown(0);

            if(err.code === "auth/invalid-phone-number")
               setError("Invalid phone number. Please check the number.")
            else if(err.code === "auth/too-many-requests")
               setError("Too many requests. Please try again later.")
            else 
               setError("Failed to send OTP. Please try later.")

         }

      })
   }

   return(
      <div>
         {/* INPUT FOR PHONE NUMBER */}
         {!confirmationResult && (
            <form onSubmit={requestOtp}>
               <Input 
                  className="text-black w-1/3 mx-auto block bg-white"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
               />
               <p className="text-xs text-gray-400 mt-2">
                  Please enter your number with the country code (i.e. +91 for India)
               </p>
            </form>
         )}

         {/* INPUT FOR OTP */}
         {confirmationResult && (
            <div className="flex items-center justify-center h-screen">
               <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)} className="w-1/3">
                  <InputOTPGroup>
                     <InputOTPSlot index={0} />
                     <InputOTPSlot index={1} />
                     <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                     <InputOTPSlot index={3} />
                     <InputOTPSlot index={4} />
                     <InputOTPSlot index={5} />
                  </InputOTPGroup>
               </InputOTP>
            </div>
         )}

         {/* SEND OTP BUTTON */}
         <Button
            disabled={!phoneNumber || isPending || resendCountdown > 0}
            onClick={() => requestOtp()}
            className="mt-5 cursor-pointer"
         >
            {resendCountdown > 0
               ? `Resend OTP in ${resendCountdown}`
               : isPending 
               ? "Sending OTP" 
               : "Send OTP" }
         </Button>

         {/* ERROR AND SUCCESS MESSAGE */}
         <div className="p-10 text-center">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
         </div>

         {/* RECAPTCHA CONTAINER */}
         <div id = "recaptcha-container"/>

         {/* LOADING INDICATOR */}
         {isPending && loadingIndicator}
      </div>
   );
}

export default OtpLogin;