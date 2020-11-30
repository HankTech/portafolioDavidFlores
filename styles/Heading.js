import styled from 'styled-components';
import theme from './theme';
import media from './media';

const { colors, fontSizes } = theme;

const Heading = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: ${fontSizes.h3};
    ${media.tablet768`font-size: 24px;`};

    &:before {
        counter-increment: section;
        content: '0' counter(section) '.';
        margin-right: 10px;
        font-weight: normal;
        color: ${colors.green};
        font-size: 26px;
        position: relative;
        bottom: -1px;
        ${media.tablet768`font-size: ${fontSizes.lg};`};
    }

    &:after {
        content: '';
        display: block;
        height: 1px;
        width: 300px;
        background-color: ${colors.lightestNavy};
        position: relative;
        top: 1px;
        margin-left: 20px;
        ${media.desktop1200`width: 200px`};
        ${media.tablet768`width: 100%;`};
        ${media.mobileLarge600`margin-left: 10px;`};
    }
`;

export default Heading;
