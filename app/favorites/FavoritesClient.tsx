"use client";
import React from "react";
import { SafeListing, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listing/ListingCard";

interface FavoriteClientProps {
  listing: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function FavoritesClient({
  listing,
  currentUser,
}: FavoriteClientProps) {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of place u have been favorited!"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listing.map((list) => {
          return (
            <ListingCard currentUser={currentUser} key={list.id} data={list} />
          );
        })}
      </div>
    </Container>
  );
}
