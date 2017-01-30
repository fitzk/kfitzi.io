import Scroll, { Link } from "react-scroll"

export const nav = (url) => {
	window.open(`${url}`);
}

export const scroll = () => {
	const scrollHeight = 0
	Scroll.animateScroll.scrollTo(scrollHeight)
}
