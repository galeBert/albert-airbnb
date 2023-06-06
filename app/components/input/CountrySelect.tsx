"use client";
import useCountries from "@/app/hooks/useCountries";
import React from "react";
import Select from "react-select";
export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}
export default function CountrySelect({ onChange, value }: CountySelectProps) {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
        placeholder="Anywhere"
        value={value}
        onChange={(values) => onChange(values as CountrySelectValue)}
        formatOptionLabel={(option) => {
          return (
            <div className="flex  items-center gap-3">
              <div>{option.flag}</div>
              <div>
                {option.label},
                <span className="text-neutral-500 ml-1">{option.region}</span>
              </div>
            </div>
          );
        }}
        isClearable
        options={getAll()}
      />
    </div>
  );
}
