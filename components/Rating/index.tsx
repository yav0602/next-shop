import StarIcon from "public/star.svg";
import React, { useCallback, useMemo, useState } from "react";
import { IRatingProps } from "./types";
import styles from "./Rating.module.css";
import cn from "classnames";

export const Rating = ({ onChange, value = 0, editable }: IRatingProps) => {
	const [rating, setRating] = useState<number>(value);

	const changeRatingDisplay = useCallback(
		(i: number) => {
			if (!editable) return;
			setRating(i);
		},
		[editable]
	);

	const updateRating = useCallback(
		(i: number) => {
			if (!editable) return;
			setRating(i);
			onChange(i);
		},
		[editable, onChange]
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent<SVGElement>, i: number) => {
			if (e.code === "Space" && editable) {
				setRating(i);
				onChange(i);
			}
		},
		[editable, onChange]
	);

	const stars = useMemo(() => {
		return [...new Array(5)].map((_, i) => (
			<span
				key={String(i)}
				onMouseEnter={() => changeRatingDisplay(i + 1)}
				onMouseLeave={() => changeRatingDisplay(value)}
				onClick={() => updateRating(i + 1)}
			>
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < rating,
					})}
					tabIndex={editable ? 0 : -1}
					onKeyDown={(e) => handleKeyDown(e, i + 1)}
				/>
			</span>
		));
	}, [
		rating,
		value,
		changeRatingDisplay,
		updateRating,
		handleKeyDown,
		editable,
	]);

	return <div className={styles.rating}>{stars}</div>;
};
