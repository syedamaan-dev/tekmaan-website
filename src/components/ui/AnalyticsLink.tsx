"use client";

import React from "react";
import Link from "next/link";
import { trackEvent, type AnalyticsEvent, type AnalyticsEventParams } from "@/lib/analytics";

interface AnalyticsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  event: AnalyticsEvent;
  eventParams?: AnalyticsEventParams;
  children: React.ReactNode;
  isExternal?: boolean;
}

export function AnalyticsLink({
  href,
  event,
  eventParams,
  onClick,
  children,
  isExternal,
  ...props
}: AnalyticsLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(event, eventParams);
    if (onClick) {
      onClick(e);
    }
  };

  if (isExternal || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

