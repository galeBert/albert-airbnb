"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons/lib";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});
interface ListingInfoProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  category?: {
    icon: IconType;
    label: string;
    description: string;
  };
}
export default function ListingInfo({ category, listing }: ListingInfoProps) {
  const { bathroomCount, locationValue } = listing;
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex items-center gap-2">
          <div>Hosted by {listing.user.name}</div>
          <Avatar src={listing.user.image} />
        </div>
        <div className="flex items-center gap-4 font-light text-neutral-500">
          <div>{listing.guestCount} guests</div>
          <div>{listing.roomCount} rooms</div>{" "}
          <div>{listing.bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category ? (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      ) : null}
      <hr />
      <div className="text-lg font-light text-neutral-500">
        {listing.description}
      </div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
}
