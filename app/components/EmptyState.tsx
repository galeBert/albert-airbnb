"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
export default function EmptyState({
  title = "No Exact Matches",
  subtitle = "Try changing or remove some of your filters",
  showReset,
}: EmptyStateProps) {
  const router = useRouter();

  return (
    <div className="h-[60vh]  flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset ? (
          <Button
            outline
            label="Remove all fillters"
            onClick={() => router.push("/")}
          />
        ) : null}
      </div>
    </div>
  );
}
