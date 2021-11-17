import { ReactNode } from "react";

export interface IHeadingProps {
	type: "h1" | "h2" | "h3";
	children: ReactNode;
}
