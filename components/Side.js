import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import media from '@styles/media'
import theme from '@styles/theme';

const { colors } = theme;

const StyledContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
    z-index: 10;
    color: ${colors.lightSlate};
    ${media.tablet768`display: none;`};
`;
 
const Side = ({ children, orientation }) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledContainer orientation={orientation}>
            <TransitionGroup component={null}>
            {isMounted && 
                (
                    <CSSTransition classNames="fade" timeout={2000}>
                        {children}
                    </CSSTransition>
                )
            }
            </TransitionGroup>
        </StyledContainer>
    )

}

export default Side