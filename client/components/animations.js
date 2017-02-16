import React from "react";
import styled, { keyframes } from "styled-components";

export const fade = keyframes`
  0% { 	transfrom: scaleY(1.5);
				background-color: black; }
  100% { transform: scaleY(1);
				 background-color: white; }
`;

export const grow = keyframes`
  0% { transfrom: scaleY(0); }
  100% { transform: scaleY(1); }
`;
