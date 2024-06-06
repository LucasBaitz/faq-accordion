import Accordion from "@/components/Accordion/Accordion";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#F9EEFF]">
      <Image
        width={1000}
        height={300}
        className="w-full absolute"
        alt="a"
        src="\background-pattern-desktop.svg"
      />
      <div className="flex flex-col h-screen items-center justify-center ">
        <Accordion />
      </div>
    </main>
  );
};

export default Home;
