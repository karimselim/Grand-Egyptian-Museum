"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Curtains from "./components/Curtains/Curtains";
import { useState } from "react";
("developer branch");

export default function Home() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <>
      <Navbar
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
      />
      <Curtains isMenuToggled={isMenuToggled} />
    </>
  );
}
