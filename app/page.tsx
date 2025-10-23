import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col scrollbar-hidden bg-fixed bg-cover bg-[url(/images/bg.jpg)] ">
      <div className="w-[600px] self-center">
        <img src="/logo.png" alt="test" />
      </div>

      <Button>Hello!</Button>

      <div className="h-[1000px]">hello</div>
    </div>
  );
}
