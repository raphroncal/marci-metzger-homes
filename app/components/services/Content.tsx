import { ContentKey, contents } from "@/app/util/services/contents";
import { cn } from "@/lib/utils";

type TContent = {
  currentItem: ContentKey;
};

export const Content = ({ currentItem }: TContent) => {
  const content = contents[currentItem];

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <div className="flex flex-col gap-4 w-[600px]">
        <p className="uppercase text-4xl text-center font-outfit">
          {content.title}
        </p>
        <p className="font-outfit text-center text leading-8">
          {content.description}
        </p>
      </div>

      <div className="flex gap-[60px]">
        <div className="flex flex-col gap-1 w-[520px]">
          <p className="font-outfit uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            ullam enim porro fugiat officiis repudiandae corporis quos beatae,
            amet quam dolorum et autem.
          </p>
          <ul className="list-disc pl-10">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

        <div className={cn("w-[320px] h-[400px] bg-cover", content.url)} />
      </div>
    </div>
  );
};
