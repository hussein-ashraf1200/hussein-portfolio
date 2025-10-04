import React from "react";
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

const AdminButton = () => {
  return (
    <div>
      <SignedOut>
        {/* ✅ الزرار نفسه هو child */}
        <SignInButton afterSignInUrl="/" mode="modal">
          <button
            className="p-2 mb-0 text-white
           font-semibold flex justify-center items-center
            gap-2 rounded-2xl bg-cyan-600 hover:bg-cyan-800"
          >
            Sign in
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AdminButton;
