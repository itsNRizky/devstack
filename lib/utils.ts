import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizeTechName = techName.replace(/[ .]/g, "").toLowerCase();
  return techMap[normalizeTechName]
    ? `${techMap[normalizeTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { label: "years", seconds: 31536000 },
    { label: "months", seconds: 2592000 },
    { label: "days", seconds: 86400 },
    { label: "hours", seconds: 3600 },
    { label: "minutes", seconds: 60 },
    { label: "seconds", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.label} ago`;
    }
  }

  return "just now";
};
