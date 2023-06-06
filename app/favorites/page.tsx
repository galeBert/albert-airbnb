import React from "react";
import ClientOnly from "../components/ClientOnly";
import Heading from "../components/Heading";
import { getFavoriteListings } from "../actions/getFavoritesListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

export default async function ListingPage() {
  const listing = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!listing.length) {
    <ClientOnly>
      <Heading
        title="My Favorites found"
        subtitle="Looks like you have no favorites"
      />
    </ClientOnly>;
  }
  return (
    <ClientOnly>
      <FavoritesClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
}
