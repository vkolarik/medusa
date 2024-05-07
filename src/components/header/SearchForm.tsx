"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image"
import searchIcon from "../../../public/images/icons/search.svg"
import { useForm } from "react-hook-form"
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { IProductPreview } from "modules/Product"
import { searchClient } from "@lib/search-client"
import { productsPreviewData } from "@data/products"

export const SearchForm: FC = () => {
  const [items, setItems] = useState<IProductPreview[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<IProductPreview[]>([]);

  const { register, handleSubmit } = useForm()

  const panelFooterTemplate = () => {
    const isItemSelected = (filteredItems || []).some( item => item.title === selectedItem );
       return (
        <div className="py-2 px-3">
            {isItemSelected ? (
                <span>
                    <b>{selectedItem}</b>
                </span>
            ) : (
                'Žádný produkt nevybrán.'
            )}
        </div>
    );
};


const search = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
        let _filteredItems

        if (!event.query.trim().length) {
          _filteredItems = [...items];
        }
        else {
            _filteredItems = items.filter((item) => {
                return item.title.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }

        setFilteredItems(_filteredItems);
    }, 250);
}

const itemTemplate = (item: IProductPreview) => {
    return (
        <div className="flex align-items-center">
            <Image
                alt={item.title}
                src={item.image}
                className={`object-cover`}
                style={{width: '18px'}}
            />
            <div>{item.title}</div>
        </div>
    );
};

  const onSubmit: any = async (data: { text: string | null }, e: Event) => {
    alert(data.text)
  }

  return (
    <form
      className="rounded-xl border border-grey xl:w-[20rem] lg:w-[15rem] md:w-[13rem] w-full relative flex py-1 lg:px-4 px-2 lg:mb-0 mb-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/*<input*/}
      {/*  type="text"*/}
      {/*  className="w-full relative outline-none pr-4 xl:text-[16px] lg:text-[14px] text-[13px]"*/}
      {/*  placeholder="Vyhledejte produkt..."*/}
      {/*  {...register("text")}*/}
      {/*/>*/}

      <AutoComplete
        field="text"
        className="w-full relative outline-none pr-4 xl:text-[16px] lg:text-[14px] text-[13px]"
        placeholder="Vyhledejte produkt..."
        {...register("text")}
        value={selectedItem}
        suggestions={filteredItems}
        completeMethod={search}
        onChange={(e) => setSelectedItem(e.value)}
        itemTemplate={itemTemplate}
        panelFooterTemplate={panelFooterTemplate} />

      <button type="submit" onClick={handleSubmit(onSubmit)}>
        <Image
          src={searchIcon.src}
          alt="Trend Trove - hledat"
          className="w-max object-contain cursor-pointer"
          width={15}
          height={15}
          loading="lazy"
        />
      </button>
    </form>
  )
}
