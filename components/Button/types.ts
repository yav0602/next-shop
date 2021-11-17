import { ComponentProps, ReactNode } from "react";

export interface IButtonProps extends ComponentProps<"button"> {
	variant: "primary" | "outline";
	children: ReactNode;
	arrow?: "right" | "down" | "none";
}
