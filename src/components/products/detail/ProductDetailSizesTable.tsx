import { productDetailSizesTable } from "@data/productDetailSizesTable";
import { FC } from "react";

export const ProductDetailSizesTable: FC = () => {
  return <div className="pt-8 overflow-x-auto">
    <h1 className="font-semibold lg:text-[27px] md:text-[22px] text-[18px] md:mb-5 mb-3">Zjistěte Vaši velikost na základě měr</h1>
    <table className="w-full text-center table-fixed">
      <thead>
        <tr>
          {productDetailSizesTable.theads.map((item: string, key: number) => {
            return <th key={key}
              className="uppercase font-medium leading-8 md:text-[17px] text-[15px]">{item}</th>
          })}
        </tr>
      </thead>

      <tbody>
          {productDetailSizesTable.tbody.map((items: (string | number)[], rowKey: number) => {
            return <tr key={rowKey}
              className={rowKey % 2 === 0 ? "bg-lightBlue" : ""}>
              {items.map((item: string | number, tdKey: number) => {
                return <td key={tdKey}
                className="leading-8 uppercase md:text-[16px] text-[13px]">{item}</td>
              })}
            </tr>
          })}
      </tbody>
    </table>
  </div>
}