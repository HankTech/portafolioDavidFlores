import { useEffect, useRef } from 'react';
import { skills, srConfig } from 'config';
import { FormattedIcon } from 'components/icons';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import media from 'styles/media';
import Heading from 'styles/Heading';
import theme from 'styles/theme';

const { colors, fontSizes } = theme;

const StyledContainer = styled.section`
	margin: 0 auto;
	padding: 50px 0;
	max-width: 900px;
	position: relative;
`;

const StyledFlexContainer = styled.div`
	${mixins.flexBetween};
	align-items: center;
	${media.tablet768`
		flex-direction: column;
	`};
`;

const StyledContent = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	width: 60%;
	max-width: 480px;
	${media.tablet768`
		width: 100%;
	`};
`;

const SkillsContainer = styled.div`
	padding: 0;
	width: 40%;
	
	${media.tablet768`
		margin-top: 40px;
		width: 100%;
	`};
`;

const SkillsList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-column-gap: 5px;
	grid-row-gap: 10px;

	${media.tablet768`
		grid-column-gap: 15px;
		grid-row-gap: 15px;
	`};

`;

const SkillsListTitle = styled.h3`
    color: ${colors.green};
    font-size: ${fontSizes.xl};
	font-weight: normal;
	text-align: center;
	margin-bottom: 50px;

	${media.mobileLarge600`
		font-size:${fontSizes.lg};
	`};


	&:before {
		counter-increment: none;
        content: none;
		display: none
	}

	&:after {
		display: none
	}
`;

const SkillsListItems = styled.li`
	list-style: none;
	display: flex;
	justify-content: center;

	svg {
		height: 50px;
		width: 50px;

		${media.tablet768`
			height: 55px;
			width: 75px;
		`};
	}
`;


const About = () => {

    const revealContainer = useRef(null);
    useEffect(() => ScrollReveal().reveal(revealContainer.current, srConfig()), []);

	return (
		<StyledContainer id="about" ref={revealContainer}>
			<Heading>Acerca de Mi</Heading>
			<StyledFlexContainer>
				<StyledContent>
					Hola! soy David, un desarrollador Web FullStack con sede en Venezuela.
					Disfruto creando cosas para el internet, diesño y construyo sitios web y aplicaciones. 
					Aunque Estudie Ingenieria Electronica, aprendia por otra parte de este fasciante mundo de la programacion y el diseño web.
				</StyledContent>

                <SkillsContainer>
					<SkillsListTitle>
                    	Tecnologias con las que he trabajado
					</SkillsListTitle>
					<SkillsList>
						{skills && 
							skills.map(({ name }, id) => {
								return (
									<SkillsListItems key={id}>
										<FormattedIcon name={name} />
									</SkillsListItems>
								);
							})
						}
					</SkillsList>
                </SkillsContainer>
			</StyledFlexContainer>
		</StyledContainer>
	);
};

export default About;
