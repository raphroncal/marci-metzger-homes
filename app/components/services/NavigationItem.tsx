import { cn } from "@/lib/utils";

type TNavigationItem = {
  currentItem: string;
  children: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const NavigationItem = ({
  currentItem,
  children,
  onClick,
}: TNavigationItem) => {
  return (
    <div
      className={cn(
        "py-3 uppercase font-outfit font-extralight h-fit w-60 cursor-pointer text-center",
        "transition-all",
        currentItem === children && "border-b-4 border-black"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
