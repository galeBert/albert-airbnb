"use client";
import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import CatagoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "this property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "this property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "this property is modern!",
  },
  {
    label: "Countyside",
    icon: TbMountain,
    description: "this property is modern!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this property is modern!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this property is modern!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this property is modern!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this property is modern!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "this property is modern!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "this property is modern!",
  },
  {
    label: "Artic",
    icon: BsSnow,
    description: "this property is modern!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "this property is modern!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "this property is modern!",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "this property is modern!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "this property is modern!",
  },
];
export default function Catagories() {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <Container>
      <div className="pt-4 flex flex-row items center justify-between overflow-x-auto">
        {categories.map((item) => {
          return (
            <CatagoryBox
              key={item.label}
              label={item.label}
              description={item.description}
              icon={item.icon}
              selected={category === item.label}
            />
          );
        })}
      </div>
    </Container>
  );
}
