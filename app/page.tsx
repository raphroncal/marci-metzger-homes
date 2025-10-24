import { SearchBar } from "./components/SearchBar";
import { Services } from "./sections/Services";

export default function Home() {
  return (
    <div className="flex flex-col scrollbar-hidden bg-fixed bg-cover bg-[url(/images/bg/bg-1.jpg)] bg-gray-600 bg-blend-multiply">
      <div className="flex flex-col items-center justify-between h-svh gap-10">
        <div className="flex align-middle self-center h-[100px]">
          <img width={300} src="/images/logo.png" alt="test" />
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-5xl text-white font-playfair">
            Find your dream home
          </p>

          <SearchBar />
        </div>

        <div className="h-[100px]" />
      </div>

      <Services />
    </div>
  );
}
