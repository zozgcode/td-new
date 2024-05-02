"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LewisSparkman from "./allUsersTxtData/LewisSparkman";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const [hide, setHide] = useState(false);

  const toggle = () => {
    setHide(!hide);
  };

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <div className="relative">
      {!user && (
        <div className="h-screen flex flex-col top-0 bg-white left-0 right-0 items-center fixed z-50 justify-center w-full text-2xl">
          <div className="loader"></div>
        </div>
      )}
      {user && (
        <div className="w-full">
          <div className="p-5 pt-1 pb-10 bg-[#048204]">
            <header className="py-4 mb-6 text-white w-full">
              <h2 className="text-[18px] font-semibold">Bank Account</h2>
            </header>
            <div className="flex text-[#f0f0f0] mx-auto max-w-[400px] text-center text-[18px] flex-col gap-1">
              <p>AVAILABLE BALANCE</p>
              <p className="font-bold text-[#ffffff] text-[45px]">$36.07</p>
              <p>TD CONVENIENCE CHECKING x6862</p>
              <div className="flex justify-between mt-[10px]">
                <p className="text-left">TODAY&apos;S BEGINNING BALANCE</p>
                <p>$36.07</p>
              </div>
              <div className="flex justify-between">
                <p className="text-left">PENDING</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>

          {/* <TransactionHistory /> */}
          <div className="">
            <div className="text-[#048204] bg-white font-semibold flex items-center justify-between rounded p-3 py-4 text-[18px] w-full">
              <span>Activity</span>
              {/* <Link className="text-sky-500 underline" href="/accounts/transactions">
          See all
        </Link> */}
            </div>
            <div className="flex flex-col">
              {user.id === 1 && <LewisSparkman />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
