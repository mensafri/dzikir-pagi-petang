import { DzikirPagi as data } from "../data/pagi";
import React, { useRef, useState } from "react";
import HeaderDzikir from "../components/HeaderDzikir";
import FooterDzikir from "../components/FooterDzikir";
import DzikirView from "../components/DzikirView";

export default function DzikirPagi() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const pagerRef = useRef();

  return (
    <>
      <HeaderDzikir title="Dzikir Pagi" />
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
