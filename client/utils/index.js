import Scroll, { Link } from "react-scroll"

export const nav = (url) => {
	window.open(`${url}`);
}

export const scroll = (it = 0) => {
	Scroll.animateScroll.scrollTo(it)
}
