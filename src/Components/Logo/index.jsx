/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { ComponentLogo } from "./styleLogo";
import logo from "../../Assets/logo.png";

export function Logo() {
  return (
    <ComponentLogo>
      <img src={logo} />
    </ComponentLogo>
  );
}
