import React, { useState } from "react";
import Hamburger from "hamburger-react";

export default function CustomHamburger() {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />;
}
