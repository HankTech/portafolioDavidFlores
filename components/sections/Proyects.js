import { useEffect, useRef } from 'react'
import { otherProjects, srConfig } from 'config';
import { FormattedIcon } from 'components/icons';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import media from 'styles/media';
import theme from 'styles/theme';

const { colors, fontSizes } = theme;

const StyledContainer = styled.section`
    ${mixins.flexCenter};
    margin: 0 auto;
	padding: 100px 0;
    flex-direction: column;
    align-items: center;
`;

const StyledTitle = styled.h4`
    margin: 0 auto;
    font-size: ${fontSizes.h3};
    ${media.tablet768`font-size: 24px;`};
    a {
        display: block;
    }
`;

const StyledGrid = styled.div`
    margin-top: 50px;

    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 15px;
        position: relative;
        ${media.desktop1200`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
    }
`;

const StyledProjectInner = styled.div`
    ${mixins.boxShadow};
    ${mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 2rem 1.75rem;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
    background-color: ${colors.lightNavy};
`;

const StyledProject = styled.div`
    transition: ${theme.transition};
    cursor: default;
    &:hover,
    &:focus {
        outline: 0;
        ${StyledProjectInner} {
        transform: translateY(-5px);
        }
    }
`;

const StyledProjectHeader = styled.div`
    ${mixins.flexBetween};
    margin-bottom: 30px;
`;

const StyledFolder = styled.div`
    color: ${colors.green};
    svg {
        width: 40px;
        height: 40px;
    }
`;

const StyledProjectLinks = styled.div`
    margin-right: -10px;
    color: ${colors.lightSlate};
`;

const StyledIconLink = styled.a`
    position: relative;
    top: -10px;
    padding: 10px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

const StyledProjectName = styled.h5`
    margin: 0 0 10px;
    font-size: ${fontSizes.xxl};
    color: ${colors.lightestSlate};
`;

const StyledProjectDescription = styled.div`
    font-size: 17px;
    color: ${colors.lightSlate};
    a {
        ${mixins.inlineLink};
    }
`;
const StyledTechList = styled.ul`
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
        font-size: ${fontSizes.xs};
        color: ${colors.slate};
        line-height: 1.75;
        margin-right: 15px;
        &:last-of-type {
        margin-right: 0;
        }
    }
`;

const Proyects = () => {
    const revealTitle = useRef(null);
	const revealProjects = useRef([]);
	useEffect(() => {
	    ScrollReveal().reveal(revealTitle.current, srConfig())
	    revealProjects.current.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig(i * 100)))
	}, []);

    return (
        <StyledContainer>
            <StyledTitle ref={revealTitle}>Otros Proyectos</StyledTitle>
            <StyledGrid>
                <div className="projects">
                {otherProjects &&
                    otherProjects.map(({ link, title, description, tech, github }, i) => {
                        return (
                            <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                                <StyledProjectInner>
                                    <header>
                                        <StyledProjectHeader>
                                            <StyledFolder>
                                                <FormattedIcon name="Folder" />
                                            </StyledFolder>

                                            <StyledProjectLinks>
                                                {github && (
                                                    <StyledIconLink
                                                        href={github}
                                                        target="_blank"
                                                        rel="nofollow noopener noreferrer"
                                                        aria-label="GitHub Link"
                                                    >
                                                        <FormattedIcon name="GitHub" />
                                                    </StyledIconLink>
                                                )}
                                                {link && (
                                                    <StyledIconLink
                                                        href={link}
                                                        target="_blank"
                                                        rel="nofollow noopener noreferrer"
                                                        aria-label="External Link"
                                                    >
                                                        <FormattedIcon name="External" />
                                                    </StyledIconLink>
                                                )}
                                            </StyledProjectLinks>
                                        </StyledProjectHeader>

                                        <StyledProjectName> {title} </StyledProjectName>
                                        <StyledProjectDescription> {description} </StyledProjectDescription>
                                    </header>
                                    <footer>
                                        {tech && (
                                            <StyledTechList>
                                                {tech.map((tech, i) => {
                                                    return (
                                                        <li key={i}> {tech} </li>
                                                    )
                                                })}
                                            </StyledTechList>
                                        )}
                                    </footer>
                                </StyledProjectInner>
                            </StyledProject>
                        )
                    })

                }
                </div>
            </StyledGrid>
        </StyledContainer>
    )
}

export default Proyects;