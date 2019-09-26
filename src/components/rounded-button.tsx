import React from "react"

export interface RoundedButtonProps {
	color: string
	style?: React.CSSProperties
	onClick: () => void
	children: React.ReactNode
}

export function RoundedButton(props: RoundedButtonProps) {
	return (
		<button
			type="button"
			style={{
				backgroundColor: props.color,
				border: "none",
				color: "white",
				padding: 20,
				textAlign: "center",
				textDecoration: "none",
				display: "inline-block",
				fontSize: "16px",
				margin: "4px 2px",
				borderRadius: 5,
			}}
			onClick={() => props.onClick()}
		>
			{props.children}
		</button>
	)
}
