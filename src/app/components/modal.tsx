import { Dispatch, ReactNode, SetStateAction } from "react";

import './modal.css'
import Button from "./button";

interface Props {
	children: ReactNode;
	windowTitle: string;
	modalOpen: boolean
	setModalOpen:Dispatch<SetStateAction<boolean>>
}

export default function Modal({ children, windowTitle, modalOpen, setModalOpen }: Props) {
	return (
		<div className={`modalBlur ${modalOpen ? null : "modalHidden"}`}>
			<div className="modal">
				<div className="modalUpperContainer">
					<h2>
						{windowTitle}
					</h2>
					<Button
						buttonType="x"
						onclick={()=>(setModalOpen(false))}
					/>
				</div>
				{children}
			</div>

		</div>
	);
}