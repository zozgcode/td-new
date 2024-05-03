"use client";

import React, { useEffect, useState } from "react";
import { LewisSparkmanHistoryTxData } from "./TrxData";

export default function TransactionHistory() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  return (
    <div className="">
      <div className="p-5 pt-1 bg-[#048204]">
        <header className="py-4 mb-6 text-white w-full">
          <h2 className="text-[18px] font-semibold">Bank Account</h2>
        </header>
        <div className="flex text-[#f0f0f0] mx-auto w-full text-center text-[16px] flex-col gap-1">
          <div className="flex justify-between">
            <p className="text-left">TD CONVENIENCE CHECKING</p>
            <p>$36.07</p>
          </div>
        </div>
      </div>
      {user && (
        <div className="">
          {user.username === "mattinamarion1234" && (
            <div>
              {LewisSparkmanHistoryTxData.map((txt, i) => (
                <div key={i} className="w-full text-zinc-800">
                  <div className="p-5 py-3 text-[16px] font-semibold">
                    {txt.date}
                  </div>
                  <ul className="flex flex-col">
                    {txt.children.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border text-[#424242] font-semibold bg-white p-5 py-3 flex items-center justify-between"
                      >
                        <p className="max-w-[250px] text-[16px] font-semibold">
                          {item.txName}
                        </p>
                        <p className={`text-[18px] ${item.whatUsed === "Credit" && "text-[#048204] font-bold"}`}>{item.amount}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
