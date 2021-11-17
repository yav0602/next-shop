import { ITagProps } from "./types";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({ children, variant, size = "s" }: ITagProps) => {
	return (
		<div className={cn(styles.tag, styles[variant], styles[`size-${size}`])}>
			{children}
		</div>
	);
};
