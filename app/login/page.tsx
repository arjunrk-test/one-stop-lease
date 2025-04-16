import OtpLogin from "@/components/OtpLogin";

function LoginPage(){
   return(
      <div className="text-center">
         <h1 className="font-bold text-center mb-5">Login form for One Stop Lease</h1>
         <OtpLogin />
      </div>
   );
}

export default LoginPage;