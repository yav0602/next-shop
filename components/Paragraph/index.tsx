import { IParagraphProps } from "./types";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
	size = "m",
	children,
	className,
	...paragraphProps
}: IParagraphProps) => {
	return (
		<p
			className={cn(styles.paragraph, className, styles[`size-${size}`])}
			{...paragraphProps}
		>
			{children}
		</p>
	);
};
