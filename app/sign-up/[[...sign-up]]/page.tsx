import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <SignUp />
    </div>
  );
}

export default SignUpPage;
