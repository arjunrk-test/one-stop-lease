"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import OtpLogin from "./OtpLogin";

export default function OtpLoginDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="px-6 py-3 h-8 text-md bg-highlight hover:bg-highlight/80">
          Login
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md bg-gray-200">
        <DialogHeader>
          <DialogTitle>Login with OTP</DialogTitle>
        </DialogHeader>
        <OtpLogin closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
