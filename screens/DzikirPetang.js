import { DzikirPetang as data } from "../data/petang";
import React, { useRef, useState } from "react";
import HeaderDzikir from "../components/HeaderDzikir";
import FooterDzikir from "../components/FooterDzikir";
import DzikirView from "../components/DzikirView";

export default function DzikirPetang() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const pagerRef = useRef();

  return (
    <>
      <HeaderDzikir title="Dzikir Petang" />
      <DzikirView
        data={data}
        pagerRef={pagerRef}
        setCurrentPosition={setCurrentPosition}
      />
      <FooterDzikir
        currentPosition={currentPosition}
        pagerRef={pagerRef}
        data={data}
      />
    </>
  );
}
