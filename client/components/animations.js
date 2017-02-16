import React from "react";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% {
    transform: scaleY(1.5);
    background-color: black;
  }

  100% {
    transform: scaleY(1);
    background-color: white;
  }
`;

const grow = keyframes`
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
`;

export { fade, grow }
