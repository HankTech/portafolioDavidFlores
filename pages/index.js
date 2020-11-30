import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from 'components/sections/Hero';
import About from 'components/sections/About';
import Featured from 'components/sections/Featured';
import Proyects from 'components/sections/Proyects';
import Contact from 'components/sections/Contact';
import media from 'styles/media';
import mixins from 'styles/mixins';

const StyledMainContainer = styled.main`
	counter-reset: section;

	${mixins.sidePadding};

	width: 100%;
	margin: 0 auto;
	padding-top: 15px;
	padding-bottom: 200px;

	${media.desktop1200`
		padding-top: 0px;
		padding-bottom: 200px;
  	`};
	
	${media.tablet768`
		padding-top: 15px;
		padding-bottom: 150px;
	`};

	${media.mobileMedium480`
		padding-top: 0px;
		padding-bottom: 125px;
	`};
`;


export default function Home() {

	return (
		<>
			<StyledMainContainer>
				<Hero />
				<About />
				<Featured />
				<Proyects />
				<Contact />
			</StyledMainContainer>
		</>
	);
}
