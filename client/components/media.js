import styled, { css } from "styled-components"

// browser specific
const browser = {
  Mozilla: (...args) => css`
    html[data-browser*="Mozilla/"] & {
      ${ css(...args) }
  }
  `,
  Chrome: (...args) => css`
    html[data-browser*="Chrome/"] & {
      ${ css(...args) }
  }
  `,
  Safari: (...args) => css`
    html[data-browser*="Safari/"] & {
      ${ css(...args) }
  }
  `,
}

const media = {
  tablet: (...args) => css`
    @media (min-width: 550px) {
      ${ css(...args) }
    }
  `,
  handheld: (...args) => css`
		@media (max-width: 450px) {
			${ css(...args) }
		}
	`,
	iphone5:(...args) => css`
		@media (max-width: 325px) {
			${ css(...args) }
		}
	`,
	iphone6:(...args) => css`
		@media (max-width: 380px) {
			${ css(...args) }
		}
	`,
	safari: (...args) => css`
		@media (min-width: 375px) {
			${ css(...args) }
		}
	`,
	desktop: (...args) => css`
		@media (min-width: 768px) {
			${ css(...args) }
		}
	`,
}

export { media, browser }
