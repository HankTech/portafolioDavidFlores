import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { email, srConfig } from 'config';
import mixins from 'styles/mixins';
import media from 'styles/media';
import Section from 'styles/Section';
import Heading from 'styles/Heading';
import theme from 'styles/theme';

const { colors, fontSizes } = theme;


const StyledContainer = styled(Section)`
    text-align: center;
    max-width: 600px;
    margin: 0 auto 100px;
    a {
        ${mixins.inlineLink};
    }
`;

const StyledHeading = styled(Heading)`
    display: block;
    color: ${colors.green};
    font-size: ${fontSizes.md};
    font-weight: normal;
    margin-bottom: 20px;
    justify-content: center;
    ${media.desktop1200`font-size: ${fontSizes.sm};`};
    &:before {
        bottom: 0;
        font-size: ${fontSizes.sm};
        ${media.desktop1200`font-size: ${fontSizes.xs};`};
    }
    &:after {
        display: none;
    }
`;

const StyledTitle = styled.h4`
    margin: 0 0 20px;
    font-size: 60px;
    ${media.desktop1200`font-size: 50px;`};
    ${media.tablet768`font-size: 40px;`};
`;

const StyledEmailLink = styled.a`
    ${mixins.bigButton};
    margin-top: 50px;
`;



const Contact = () => {
    const revealContainer = useRef(null);
    useEffect(() => ScrollReveal().reveal(revealContainer.current, srConfig()), []);

    return (
        <StyledContainer id="contact" ref={revealContainer}>
            <StyledHeading>¿Que es lo que sigue?</StyledHeading>
            <StyledTitle>Ponerse en Contacto</StyledTitle>
           <StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
                Di Hola!
           </StyledEmailLink>
        </StyledContainer>
    )
}

export default Contact