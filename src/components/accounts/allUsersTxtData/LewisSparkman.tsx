"use client";

import React from "react";
import { LewisSparkmanTxData } from "../transactionData/TrxData";
import Link from "next/link";

export default function LewisSparkman() {
  const topTxData = LewisSparkmanTxData.slice(0, 2);
  const moreThan = LewisSparkmanTxData.flatMap(data => data.children).length > 2;

  return (
    <>
      {topTxData.length === 0 && (
        <div className="text-center">No transactions yet.</div>
      )}
      {topTxData.map((txt, i) => (
        <div key={i} className="w-full text-zinc-800">
          <div className="p-5 text-[16px] font-semibold">{txt.date}</div>
          <ul className="flex flex-col">
            {txt.children.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="border text-[#424242] font-semibold bg-white p-5 flex items-center justify-between"
              >
                <p className="max-w-[250px] text-[16px] font-semibold">
                  {item.txName}
                </p>
                <p className="text-[18px]">{item.amount}</p>
              </div>
            ))}
          </ul>
        </div>
      ))}
      {moreThan && (
        <div className="text-center mt-8">
          <Link
            href="/accounts/transactions"
            className="bg-[#048204] text-white font-semibold border rounded p-3 text-lg"
          >
            Show All
          </Link>
        </div>
      )}
    </>
  );
}
