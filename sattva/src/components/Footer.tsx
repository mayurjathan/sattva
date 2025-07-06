import React from "react";
import { Sattvalogo } from "./Sattvalogo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="text-[#000000]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <Sattvalogo />
      </div>
      <div className="text-center pb-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sattva Mart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
