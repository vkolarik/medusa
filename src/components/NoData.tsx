import { FC } from "react";

export const NoData: FC = () => {
  return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-blue">
    <p>K dispozici nejsou žádná data</p>
  </div>
}