import React from "react";
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
  useUser,
  SignOutButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AdminButton = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (email === "hussein061200@gmail.com") {
      navigate("/dashboard/overview");
    } else {
      toast.success("This Feature is Only for Admin");
    }
  };

  return (
    <div>
      {/* if you are not Signed */}
      <SignedOut>
        <SignInButton redirectUrl="/" />
      </SignedOut>

      <div className="flex justify-center items-center gap-2.5">
        {/*to Dashboard*/}
        <SignedIn>
          <button
            onClick={handleDashboardClick}
            className="bg-black text-gray-400   p-2 rounded-3xl"
          >
            Dashboard
          </button>

          {/* زرار المستخدم وزرار تسجيل الخروج */}
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default AdminButton;
