"use client";
import Image from "next/image";
import { Bubbles } from "./components/Bubbles";
import { View } from "@react-three/drei";
import Hero from "./components/Hero";
import Homepage from "./components/Homepage";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="font-sans">
      {/* <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
        <Bubbles count={300} speed={2} repeat={true} />
      </View> */}
      {/* <Hero /> */}
      <Carousel />
      {/* <Homepage /> */}
    </div>
  );
}
