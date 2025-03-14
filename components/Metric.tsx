import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: boolean;
}
const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles,
  isAuthor,
}: Props) => {
  if (href) {
    return (
      <Link className="flex-center gap-1" href={href}>
        <Image
          src={imgUrl}
          alt={alt}
          width={16}
          height={16}
          className={`rounded-full object-contain ${imgStyles}`}
        />
        <p className={`${textStyles} flex items-center gap-1`}>
          {value}
          <span
            className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
          >
            {title}
          </span>
        </p>
      </Link>
    );
  } else {
    return (
      <div className="flex-center gap-1">
        <Image
          src={imgUrl}
          alt={alt}
          width={16}
          height={16}
          className={`rounded-full object-contain ${imgStyles}`}
        />
        <p className={`${textStyles} flex items-center gap-1`}>
          {value}
          <span
            className={`small-regular line-clamp-1 ${isAuthor ? "max-sm: hidden" : ""}`}
          >
            {title}
          </span>
        </p>
      </div>
    );
  }
};

export default Metric;
