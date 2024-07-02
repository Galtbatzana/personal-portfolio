import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Skills } from "./components/Skills";
import { Aboutme } from "./components/AboutMe";
import { Tag } from "./components/Tag";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Aboutme />
      
    </main>
  );
}



