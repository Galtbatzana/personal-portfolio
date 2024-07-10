import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Skills } from "./components/Skills";
import { Aboutme } from "./components/AboutMe";
import { Tag } from "./components/Tag";
import { Example } from "./Example";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  className="max-w-[1440px] min-w-[640px] h-[auto] justify-center bg-red-300">

      <Header />
      <Hero />
     
      

    </main> 
  );
}



