import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll, Events, scrollSpy} from "react-scroll";


export const ButtonFloating = () => {

    useEffect(() => {

        scrollSpy.update();

        Events.scrollEvent.register("begin",(to, element) => {
            console.log(element)
        })
        return () => {
            console.log("clean")
        }
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

	return (
		<a className="scroll-to-top rounded js-scroll-trigger m-fadeIn" href="#inicio-section" onClick={scrollToTop}>
			<FontAwesomeIcon icon={faAngleUp} />
		</a>
	);
};
