"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

export const NavigationWrapper = ({
  navigation,
}: {
  navigation: {
    screen: ReactNode;
    mobile: ReactNode;
  };
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-10 bg-white flex items-center justify-between font-primary p-4">
      <div
        className={`hamburger ${isOpen ? "active" : ""} sm:hidden`}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen ? (
        <div className="fixed sm:hidden top-24 start-0 w-full h-full bg-white p-4">
          {navigation.mobile}
        </div>
      ) : null}
      <div>
        <Image
          src="/hundebetreuung_nord_logo_hund.svg"
          alt="Hundebetreuung Nord"
          width={30}
          height={30}
        />
      </div>
      <div className="hidden sm:block">{navigation.screen}</div>
    </nav>
  );
};
