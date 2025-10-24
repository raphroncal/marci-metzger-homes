import { ContentKey } from "@/app/util/services/contents";
import { NavigationItem } from "./NavigationItem";

type TNavigationBar = {
  items: ContentKey[];
  currentItem: ContentKey;
  setCurrentItem: React.Dispatch<React.SetStateAction<ContentKey>>;
};

export const NavigationBar = ({
  items,
  currentItem,
  setCurrentItem,
}: TNavigationBar) => {
  return (
    <div className="flex justify-center items-end w-full h-[100px] min-h-[100px] border-b-[0.5px]">
      {items.map((item) => (
        <NavigationItem
          key={item}
          currentItem={currentItem}
          onClick={() => setCurrentItem(item)}
        >
          {item}
        </NavigationItem>
      ))}
    </div>
  );
};
