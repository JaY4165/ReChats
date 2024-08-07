import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <SignIn />
    </div>
  );
}

export default SignInPage;
