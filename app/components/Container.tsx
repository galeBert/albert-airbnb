"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 lg:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
}
