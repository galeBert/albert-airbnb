import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
export default function Heading({ title, center, subtitle }: HeadingProps) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 text-neutral-500 font-light">{subtitle}</div>
    </div>
  );
}
