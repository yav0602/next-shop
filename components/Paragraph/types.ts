import React from "react";

export interface IParagraphProps extends React.ComponentProps<"p"> {
	size?: "s" | "m" | "l";
}
