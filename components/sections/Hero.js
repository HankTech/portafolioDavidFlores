import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import media from 'styles/media';
import mixins from 'styles/mixins';
import Section from 'styles/Section';
import { email } from 'config'
import theme from 'styles/theme';


const { colors, fontSizes } = theme;


const StyledContainer = styled(Section)`
    ${mixins.flexCenter};
    
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    div {
        width: 100%;
    }
`;

const StyledOverline = styled.h1`
    color: ${colors.green};
    margin: 0 0 20px 3px;
    font-size: ${fontSizes.md};
    ${media.desktop1200`font-size: ${fontSizes.md};`};
    ${media.tablet768`font-size: ${fontSizes.sm};`};
`;

const StyledTitle = styled.h2`
    font-size: 65px;
    line-height: 1.1;
    margin: 0;
    color: ${colors.slate};
    ${media.desktop1200`font-size: 60px;`};
    ${media.tablet768`font-size: 50px;`};
    ${media.mobileMedium480`font-size: 40px;`};
    ${media.mobileSmall376`font-size: 30px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  ${media.desktop1200`font-size: 70px;`};
  ${media.tablet768`font-size: 60px;`};
  ${media.mobileMedium480`font-size: 50px;`};
  ${media.mobileSmall376`font-size: 30px;`};
`;
const StyledDescription = styled.div`
    margin-top: 25px;
    width: 50%;
    max-width: 500px;
    ${media.desktop1200`font-size: ${fontSizes.xl};`};
    ${media.tablet768`font-size: ${fontSizes.md};`};
`;

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;


const Hero = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 1000);
      return () => clearTimeout(timeout);
    }, []);

    const one = () => (
        <StyledOverline style={{ transitionDelay: '100ms' }}>Hi, my name is</StyledOverline>
    )

    const two = () => (
        <StyledTitle style={{ transitionDelay: '200ms' }}>David Flores.</StyledTitle>
    )

    const three = () => (
        <StyledSubtitle style={{ transitionDelay: '300ms' }}>Creo soluciones web hermosas y confiables.</StyledSubtitle>
    )

    const four = () => (
        <StyledDescription style={{ transitionDelay: '400ms' }}>Creo firmemente que la comunicación, la confianza y la transparencia son los elementos esenciales de una relación comercial exitosa.</StyledDescription>
    )

    const five = () => (
        <StyledEmailLink href={`mailto:${email}`} style={{ transitionDelay: '500ms' }}>Ponte en Contacto</StyledEmailLink>
    )

    const items = [one, two, three, four, five];

    return (
        <StyledContainer>
            <TransitionGroup component={null}>
                {isMounted && 
                    items.map((item, id) => (
                        <CSSTransition key={id} classNames="fadeup" timeout={2000}>
                          {item}
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </StyledContainer>
    )
}

export default Hero;