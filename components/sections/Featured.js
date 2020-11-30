import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Heading from 'styles/Heading';
import media from 'styles/media';
import mixins from 'styles/mixins';
import { FormattedIcon } from 'components/icons';
import { featuredProjects, srConfig } from 'config';
import theme from 'styles/theme';

const { colors, fontSizes } = theme;

const StyledContainer = styled.section`
	margin: 0 auto;
	padding: 100px 0;
	${media.tablet768`
		padding: 50px 0;;
	`};
	max-width: 1000px;
	${mixins.flexCenter};
	flex-direction: column;
	align-items: flex-start;
`;

const StyledLabel = styled.h4`
	font-size: ${fontSizes.xs};
	font-weight: normal;
	color: ${colors.green};
	margin-top: 10px;
	padding-top: 0;
`;

const StyledContent = styled.div`
	position: relative;
	grid-column: 1 / 7;
	grid-row: 1 / -1;
	${media.mobileLarge600`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        z-index: 5;
    `};
	${media.mobileMedium480`padding: 30px 25px 20px;`};
`;

const StyledProjectName = styled.h5`
	font-size: 28px;
	margin: 0 0 20px;
	color: ${colors.lightestSlate};
	${media.tablet768`font-size: 24px;`};
	${media.mobileLarge600`color: ${colors.white};`};
	a {
		${media.tablet768`display: block;`};
	}
`;

const StyledDescription = styled.div`
	${mixins.boxShadow};
	position: relative;
	z-index: 2;
	padding: 25px;
	background-color: ${colors.lightNavy};
	color: ${colors.lightSlate};
	font-size: ${fontSizes.lg};
	border-radius: ${theme.borderRadius};
	${media.mobileLarge600`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
	p {
		margin: 0;
	}
	a {
		${mixins.inlineLink};
	}
`;

const StyledTechList = styled.ul`
	position: relative;
	z-index: 2;
	display: flex;
	flex-wrap: wrap;
	padding: 0;
	margin: 25px 0 10px;
	list-style: none;

	li {
		font-size: ${fontSizes.md};
		color: ${colors.slate};
		margin-right: ${theme.margin};
		margin-bottom: 7px;
		white-space: nowrap;
		&:last-of-type {
			margin-right: 0;
		}
		${media.mobileLarge600`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
	}
`;

const StyledLinkWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	margin-top: 10px;
	margin-left: -10px;
	color: ${colors.lightestSlate};
	a {
		padding: 10px;
		svg {
			width: 22px;
			height: 22px;
		}
	}
`;

const StyledFeaturedImg = styled.img`
	width: 100%;
	max-width: 100%;
	vertical-align: middle;
	border-radius: ${theme.borderRadius};
	position: relative;
	mix-blend-mode: multiply;
	filter: grayscale(100%) contrast(1) brightness(90%);
	${media.tablet768`
		object-fit: cover;
		width: 100%;
		height: 100%;
		filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;

const StyledImgContainer = styled.a`
	${mixins.boxShadow};
	grid-column: 6 / -1;
	grid-row: 1 / -1;
	position: relative;
	z-index: 1;
	background-color: ${colors.green};
	border-radius: ${theme.radius + 1}px;
	transition: ${theme.transition};
	${media.tablet768`height: 100%;`};
	${media.mobileLarge600`
		grid-column: 1 / -1;
		opacity: 0.25;
  	`};
	&:hover,
	&:focus {
		background: transparent;
		&:before,
		${StyledFeaturedImg} {
			background: transparent;
			filter: none;
		}
	}
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 3;
		transition: ${theme.transition};
		background-color: ${colors.navy};
		mix-blend-mode: screen;
	}
`;

const StyledProject = styled.div`
	margin-top:20px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(12, 1fr);
	align-items: center;
	margin-bottom: 100px;
	${media.mobileLarge600`
        margin-bottom: 70px;
    `};

	&:last-of-type {
		margin-bottom: 0;
	}

	&:nth-of-type(odd) {
		${StyledContent} {
			grid-column: 7 / -1;
			text-align: right;

			${media.mobileLarge600`
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
            `};
			${media.mobileMedium480`padding: 30px 25px 20px;`};
		}

		${StyledTechList} {
			justify-content: flex-end;
			li {
				margin-left: ${theme.margin};
				margin-right: 0;
			}
		}

		${StyledLinkWrapper} {
			justify-content: flex-end;
			margin-left: 0;
			margin-right: -10px;
		}

		${StyledImgContainer} {
			grid-column: 1 / 8;
			${media.tablet768`height: 100%;`};

			${media.mobileLarge600`
                grid-column: 1 / -1;
                opacity: 0.25;
            `};
		}
	}
`;

const Featured = () => {

	const revealTitle = useRef(null);
	const revealProjects = useRef([]);
	useEffect(() => {
		ScrollReveal().reveal(revealTitle.current, srConfig())
		revealProjects.current.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig(i * 100)))
	}, []);

	return (
		<StyledContainer id="projects">
			<Heading ref={revealTitle}>Algunas cosas que he construido</Heading>

			<div>
				{featuredProjects && 
					featuredProjects.map(({ link, title, description, tech, github, cover }, i) => {
						return (
							<StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
								<StyledContent>
									<StyledLabel>Proyectos Desctacados</StyledLabel>

									<StyledProjectName>
										<a
											href={link}
											target="_blank"
											rel="nofollow noopener noreferrer"
											aria-label="External Link"
										>
											{title}	
										</a>
									</StyledProjectName>

									<StyledDescription>{description}</StyledDescription>

									<StyledTechList>
										{tech.map((tech, i) => (
											<li key={i}>{tech}</li>
										))}
									</StyledTechList>

									<StyledLinkWrapper>
										<a
											href={github}
											target="_blank"
											rel="nofollow noopener noreferrer"
											aria-label="GitHub Link">
												<FormattedIcon name="GitHub" />
										</a>
										<a
											href={link}
											target="_blank"
											rel="nofollow noopener noreferrer"
											aria-label="External Link">
												<FormattedIcon name="External" />
										</a>
									</StyledLinkWrapper>
								</StyledContent>

								<StyledImgContainer
									href={link ? link : github ? github : '#'}
									target="_blank"
									rel="nofollow noopener noreferrer">
										<StyledFeaturedImg src={cover} alt={title} />
								</StyledImgContainer>
							</StyledProject>
						)
					})
				}
			</div>

			
		</StyledContainer>
	);
};

export default Featured;
