import React from "react";
import hachi1 from "../images/hachi-1.jpg";
import hachi2 from "../images/hachi-2.jpg";
import hachi3 from "../images/hachi-3.jpg";
import { Modal, Carousel } from "react-bootstrap";

export const GalleryComponent = ({ show, handleClose }) => {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName="modal-90w"
			aria-labelledby="example-custom-modal-styling-title"
		>
			<Modal.Body>
				<Carousel fade indicators={false}>
					<Carousel.Item>
						<img className="d-block w-100" src={hachi1} alt="First slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={hachi2} alt="First slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={hachi3} alt="First slide" />
					</Carousel.Item>
				</Carousel>
			</Modal.Body>
		</Modal>
	);
};
