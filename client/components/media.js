import styled, { css } from "styled-components"

const media = {
  tablet: (...args) => css`
    @media (min-width: 550px) {
      ${ css(...args) }
    }
  `,
  handheld: (...args) => css`
		@media (max-width: 400px) {
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

export { media }
