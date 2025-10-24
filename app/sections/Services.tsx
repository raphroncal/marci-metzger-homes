"use client";

import { useState } from "react";
import { NavigationBar } from "../components/services/NavigationBar";
import { Content } from "../components/services/Content";
import { ContentKey, contents } from "../util/services/contents";
import { Banner } from "../components/services/Banner";

export const Services = () => {
  const items: ContentKey[] = [
    "Experience & Tenure",
    "Fair Price",
    "Expertise",
  ];
  const [currentItem, setCurrentItem] = useState<keyof typeof contents>(
    "Experience & Tenure"
  );

  return (
    <div>
      <Banner />

      <div className="flex flex-col items-center bg-white">
        <NavigationBar
          items={items}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        <Content currentItem={currentItem} />
      </div>
    </div>
  );
};
