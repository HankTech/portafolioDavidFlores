import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'config';
import media from 'styles/media';
import mixins from 'styles/mixins';
import theme from 'styles/theme';

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    outline: 0;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: transform 0.25s ease-in-out, visibility 0.25s ease-in-out;
    display: none;
    ${media.tablet768`display: block;`};
`;

const SideBar = styled.aside`
    ${mixins.flexCenter};
    flex-direction: column;
    background-color: ${colors.lightNavy};
    padding: 50px;
    width: 100%;
    height: 100%;
    position: relative;
    right: 0;
    margin-left: auto;
    box-shadow: -10px 0px 30px -15px ${colors.shadowNavy};
    ${media.mobileLarge600`padding: 25px;`};
    ${media.mobileTiny330`padding: 10px;`};
`;

// const NavLink = styled.nav`
//     ${mixins.flexBetween};
//     width: 100%;
//     flex-direction: column;
//     text-align: center;
//     color: ${colors.lightestSlate};
// `;

// const NavList = styled.ol`
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     width: 100%;
// `;

// const StyledLogo = styled.a`
//     white-space: nowrap;
//     color: ${colors.lightestSlate};

//     ${media.tablet768`
//         top:-15px;
//         right: 22%;
//         margin-bottom: 10px;
//     `};

//     ${media.mobileLarge600`
//         top:8px;
//         right: 16%;
//         margin-bottom: 10px;
//     `};

//     ${media.mobileMedium480`
//         top:10px;
//         right: 20%;
//         margin-bottom: 10px;
//     `};

//     ${media.mobileTiny330`
//         top:25px;
//         right: 15%;
//         margin-bottom: 5px;
//     `};

// 	&:before {
// 		content: '<';
// 		color: ${colors.green};
// 		margin-right: 5px;
// 	}

// 	&:after {
// 		content: '/>';
// 		color: ${colors.green};
// 	}
// `;

const NavListItem = styled.li` 
    list-style: none;
    margin: 10px 10px;
    position: relative;
    font-size: ${fontSizes.xxl};
    counter-increment: item 1;
    

    ${media.mobileLarge600`
        margin: 30px auto 15px;
        font-size: ${fontSizes.xxl};
    `}
    ${media.mobileTiny330`font-size: ${fontSizes.xl};`};

    &:before {
        content: '0' counter(item) '.';
        color: ${colors.green};
        text-align: right;
        font-size: ${fontSizes.lg};
    }
`;

const NavListLink = styled.a`
    ${mixins.link};
    padding: 12px 10px;
`;

// const ResumeLink = styled.a`
//   ${mixins.bigButton};
//   padding: 18px 50px;
//   margin: auto auto 0;
//   width: max-content;
// `;

const Menu = ({menuOpen, handleMenuOpen}) => {

    const handleMenuClick = () => {
        handleMenuOpen();
    }

    return (
        <StyledContainer 
            menuOpen={menuOpen}
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 1 : -1}
        >
            <SideBar>
            {/* <StyledLogo>David Developer</StyledLogo> */}

            
                        {
                            navLinks &&
                            navLinks.map(({url, name}, id) => {
                                return (
                                    <NavListItem key={id}>
                                        <Link href={url}>
                                            <NavListLink onClick={handleMenuClick}>{name}</NavListLink>
                                        </Link>
                                    </NavListItem>
                                )   
                            })
                        }
                
                {/* <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
                    Resume
                </ResumeLink> */}
            </SideBar>
        </StyledContainer>
    )
}

export default Menu;