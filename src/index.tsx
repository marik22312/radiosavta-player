import React from "react";
import ReactDOM from "react-dom";
import { RadiosavtaPlayer } from "./RadiosavtaPlayer/RadiosavtaPlayer";

export const init = (query: string) => {
	// const element = document.querySelector(query);

	// if (!element) {
	// 	throw new Error(`couldn't find ${query} in the DOM, make sure the element is available`)
	// }

	ReactDOM.render(<RadiosavtaPlayer />, document.querySelector("#Radio-savta"));
};

init("1");
