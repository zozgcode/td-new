"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LewisSparkman from "./allUsersTxtData/LewisSparkman";
import Image from "next/image";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { SiZelle } from "react-icons/si";
import { MdOutlineCreditScore } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

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
            <header className="py-4 mb-6 text-white w-full flex justify-between items-center">
              <h2 className="text-[18px] font-semibold">Bank Account</h2>
              <RiLogoutCircleRLine className="text-[25px]" onClick={handleLogout} />
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
            <div className="flex items-center justify-evenly gap-5 mx-auto max-w-max mt-5">
              <div className="flex items-center justify-center flex-col gap-2">
                <div className="border text-[#d6d6d6] text-[24px] sm:text-[30px] w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] flex items-center justify-center flex-col rounded-full">
                  {/* <Image src="https://i.imgur.com/FNY8KMz.png" width={100} height={100} className="w-[35px]" alt="sjssj" /> */}
                  <SiZelle />
                </div>
                <span className="text-[12px] sm:text-sm font-semibold text-white">ZELLE</span>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <Link href="/accounts/billpay" className="border text-[#d6d6d6] text-[24px] sm:text-[30px] w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] flex items-center justify-center flex-col rounded-full">
                  <FiFileText />
                </Link>
                <span className="text-[12px] sm:text-sm font-semibold text-white">PAY A BILL</span>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <Link href="/accounts/pay-transfer" className="border text-[#d6d6d6] text-[24px] sm:text-[30px] w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] flex items-center justify-center flex-col rounded-full">
                  <HiMiniArrowsUpDown />
                </Link>
                <span className="text-[12px] sm:text-sm font-semibold text-white">TRANSFER</span>
              </div>
              <div className="flex items-center relative top-[10px] justify-between flex-col gap-2">
                <div className="border text-[#d6d6d6] text-[24px] sm:text-[30px] w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] flex items-center justify-center flex-col rounded-full">
                  {/* <Image src="https://i.imgur.com/nlORTs2.png" width={100} height={100} className="w-[25px] sm:w-[35px]" alt="sjssj" /> */}
                  <MdOutlineCreditScore />
                </div>
                <span className="text-[12px] sm:text-sm font-semibold text-white text-center">CARD <br /> MANAGER</span>
              </div>
            </div>
          </div>

          {/* <TransactionHistory /> */}
          <div className="">
            <div className="text-[#048204] font-semibold flex items-center justify-between rounded text-[18px] w-full">
              <div className="bg-white p-5 py-4">Activity</div>
              <div className="p-5 py-4 text-[#424242]">Details</div>
              <div className="p-5 py-4 text-[#424242]">Documents</div>
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
