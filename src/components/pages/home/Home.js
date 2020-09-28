import React, { useState } from "react";
import { HeaderSection } from "../../HeaderSection";
import { slidesData } from "./Data";
import { useTransition, animated, config } from 'react-spring';

export const Home = () => {
	const [index, setIndex] = useState(0);
	const transitions = useTransition(slidesData[index], item => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses
	});

	const interval = setInterval(() => {
		goRight();
	}, 5000);

	const goLeft = () => {
			clearInterval(interval);

		if (index === 0) {
			setIndex(slidesData.length - 1);
		} else {
			setIndex(index - 1);
		}
	};

	const goRight = () => {
		clearInterval(interval);

		if (index === slidesData.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	return transitions.map(({item, props, key}) => (

		<animated.div key={key} style={{...props}}>
			<HeaderSection 
				title={item.title}
				description={item.description}
				img={item.img}
				btnText={item.btnText}
				goLeft={goLeft}
				goRight={goRight} />
		</animated.div>
	));

};
