import styled, { css } from "styled-components";

const media = {};

media.tablet = (...args) => css`
  @media(min-width: 550px) {
    ${ css(...args) }
  }
`;

media.handheld = (...args) => css`
  @media(max-width: 450px) {
    ${ css(...args) }
  }
`;

media.iphone5 = (...args) => css`
  @media(max-width: 325px) {
    ${ css(...args) }
  }
`;

media.iphone6 = (...args) => css`
  @media(max-width: 380px) {
    ${ css(...args) }
  }
`;

media.safari = (...args) => css`
  @media(min-width: 375px) {
    ${ css(...args) }
  }
`;

media.desktop = (...args) => css`
  @media(min-width: 768px) {
    ${ css(...args) }
  }
`;

export { media };
