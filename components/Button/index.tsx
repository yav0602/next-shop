import { IButtonProps } from "./types";
import cn from "classnames";
import styles from "./Button.module.css";
import ArrowIcon from "public/arrow.svg";

export const Button = ({
	variant,
	className,
	children,
	arrow = "none",
	...btnProps
}: IButtonProps) => {
	const arrowIcon =
		arrow !== "none" ? (
			<ArrowIcon
				className={cn(styles.arrow, {
					[styles.arrowDown]: arrow === "down",
				})}
			/>
		) : null;

	return (
		<button
			className={cn(styles.button, className, styles[variant])}
			{...btnProps}
		>
			{children}
			{arrowIcon}
		</button>
	);
};
