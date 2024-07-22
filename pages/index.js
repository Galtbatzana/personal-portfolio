import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Skills } from "./components/Skills";
import { Aboutme } from "./components/AboutMe";
import { Example } from "./Example";
import { Visible } from "./components/Visible";
import { Davtalt } from "./components/Davtalt";
import { Props } from "./components/Props";
import { Tags } from "./components/Tags"
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main  className="max-w-[1440px] mx-auto bg-red-200">

      <Header />
      <Hero />
      <Aboutme />     
      <Skills /> 
      <Experience/>
      <Work />
      <Work />
      <Work />
      <Footer/> 

    </main> 
  );
}



