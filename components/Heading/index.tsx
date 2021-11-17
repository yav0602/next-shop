import { createElement } from "react";
import { IHeadingProps } from "./types";
import styles from "./Heading.module.css";

export const Heading = ({ type, children }: IHeadingProps) => {
	return createElement(
		type,
		{
			className: styles[type],
		},
		children
	);
};
