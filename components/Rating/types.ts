export interface IRatingProps {
	value: number;
	onChange(rating: number): void;
	editable: boolean;
}
