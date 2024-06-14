"use client"

import { FC, useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";


export const NoData: FC<{ subtitle?: string }> = ({ subtitle }) => {
  const [noDataSubtitle, setNoDataSubtitle] = useState("")

  useEffect(() => {
    setNoDataSubtitle(subtitle ?? "Zkuste změnit kategorii")
  }, [subtitle])

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:p-6 p-4 border border-lightGrey text-center w-max">
      <FaExclamationCircle className="text-blue mb-4 mx-auto md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem]" />
      <h3 className="text-gray-700 font-semibold text-[20px]">K dispozici nejsou žádná data</h3>
      <p className="text-[16px]">{noDataSubtitle}</p>
    </div>
  );
};
