"use client";
import React, { useCallback, useState } from "react";

import { SafeReservation, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listing/ListingCard";

interface TripsClientProps {
  reservations?: SafeReservation[];
  currentUser?: SafeUser | null;
}
export default function TripsClient({
  currentUser,
  reservations,
}: TripsClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation canceled");
          router.refresh();
        })
        .catch((err: any) => {
          toast.error(err?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations?.map((reserve) => {
          return (
            <ListingCard
              key={reserve.id}
              data={reserve.listing}
              reservation={reserve}
              actionId={reserve.id}
              onAction={onCancel}
              disabled={deletingId === reserve.id}
              actionLabel="Cancel Reservation"
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
}
