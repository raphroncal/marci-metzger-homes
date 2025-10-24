import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export const SearchBar = () => {
  return (
    <Input
      type="text"
      placeholder="SEARCH A LOCATION"
      className={cn(
        "w-[400px] h-12 border-2 border-white rounded-full",
        "font-outfit text-center text-black text-xl placeholder:text-white",
        "hover:bg-white hover:placeholder:text-black focus:bg-white",
        "transition-all duration-500"
      )}
    />
  );
};
