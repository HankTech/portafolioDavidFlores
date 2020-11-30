import { useState, useEffect } from 'react';
import { navLinks, navHeight } from 'config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'styles/media';
import mixins from 'styles/mixins';
import theme from 'styles/theme';
import Menu from './Menu';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.header`
	${mixins.flexBetween};
	position: fixed;
	top: 0;
	padding: 0px 50px;
	background-color: ${colors.navy};
	transition: ${theme.transition};
	z-index: 11;
	filter: none;
	pointer-events: auto;
	user-select: auto;
	width: 100%;
	height: ${(props) =>
		props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight};
	box-shadow: ${(props) =>
		props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
	transform: translateY(
		${(props) => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
	);
	${media.desktop1200`padding: 0 40px;`};
	${media.tablet768`padding: 0 25px;`};
`;

const StyledNav = styled.nav`
	${mixins.flexBetween};
	position: relative;
	width: 100%;
	color: ${colors.lightSlate};
	font-family: ${fonts.SFMono};
	counter-reset: item 0;
	z-index: 12;
`;

const StyledLogo = styled.a`
	${mixins.flexCenter};
	font-size: ${fontSizes.lg};
	transition: visibility 0.1s ease-in-out;
	visibility: ${(props) => (props.menuOpen ? 'hidden' : 'visible' )};

	&:before {
		content: '<';
		color: ${colors.green};
		margin-right: 5px;
	}

	&:after {
		content: '/>';
		color: ${colors.green};
	}

	&:hover,
	&:focus {
		svg {
			fill: ${colors.transGreen};
		}
	}
`;

const StyledHamburger = styled.div`
	${mixins.flexCenter};
    overflow: visible;
    margin: 0 -12px 0 0;
    padding: 25px 10px 10px 10px;
    cursor: pointer;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    display: none;
    ${media.tablet768`display: flex;`};
`;

const StyledHamburgerBox = styled.div`
	position: relative;
    display: inline-block;
    width: ${theme.hamburgerWidth}px;
    height: 24px;
`;

const StyledHamburgerInner = styled.div`
    position: absolute;
	background-color: ${colors.green};
	width: ${theme.hamburgerWidth}px;
	height: 2px;
    ${theme.borderRadius};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.menuOpen ? 'rotate(55deg)' : 'rotate(0)')};

    &:before,
    &:after {
        content: '';
        display: block;
        background-color: ${colors.green};
        position: absolute;
        right: 0;
        width: ${theme.hamburgerWidth}px;
        height: 2px;
        border-radius: 4px;
        transition: all 0.3s linear;
    }

    &:before {
        width: ${props => (props.menuOpen ? `100%` : `120%`)};
        top: ${props => (props.menuOpen ? `0` : `-10px`)};
        opacity: ${props => (props.menuOpen ? 0 : 1)};
        transform: ${(props) => (props.menuOpen ? 'traslateY(10px)' : 'traslateY(0)')};
    }

    &:after {
        width: ${props => (props.menuOpen ? `100%` : `120%`)};
        bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
        transform: ${(props) => (props.menuOpen ? 'rotate(-105deg)' : 'rotate(0)')};
    }
`;

const StyledLink = styled.div`
	display: flex;
	align-items: center;
	${media.tablet768`display: none;`};
`;

const StyledList = styled.ol`
	${mixins.flexBetween};
	padding: 0;
	margin: 0;
	list-style: none;
`;

const StyledListItem = styled.li`
	margin: 0 10px;
	position: relative;
	font-size: ${fontSizes.md};
	counter-increment: item 1;

	&:before {
		content: '0' counter(item) '.';
		text-align: right;
		color: ${colors.green};
		font-size: ${fontSizes.sm};
	}
`;

const StyledListLink = styled.a`
	padding: 12px 10px;
`;

// const StyledResumeButton = styled.a`
// 	${mixins.smallButton};
// 	margin-left: 10px;
// 	font-size: ${fontSizes.xs};
// `;



const DELTA = 10;

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrollDirection, setScrollDirection] = useState('none');
	const [lastScrollTop, setLastScrollTop] = useState(0);
	

	useEffect(() => {
			window.addEventListener('scroll', () => handleScroll());
			window.addEventListener('resize', () => handleResize());
			window.addEventListener('keyDown', (event) => handleKeyDown(event));

		
		return () => {
			window.removeEventListener('scroll', () => handleScroll());
			window.removeEventListener('resize', () => handleResize());
			window.removeEventListener('keyDown', (event) => handleKeyDown(event));
		};
	}, [lastScrollTop]);


	const handleScroll = () => {
		const fromTop = window.scrollY;
		let innerHeight = window.innerHeight
		let scrollHeight = document.body.scrollHeight

		
		if (fromTop < DELTA) {
			setScrollDirection('none');
		} else if (fromTop > lastScrollTop && fromTop > navHeight) {
			if (scrollDirection !== 'down') {
				setScrollDirection('down');
			}
		} else if (fromTop + innerHeight < scrollHeight) {
			if (scrollDirection !== 'up') {
				setScrollDirection('up');
			}
		}		
		
		setLastScrollTop(fromTop);
	};


	const handleOverflow = () => {
		if (menuOpen) {
			document.body.classList.remove("blur", "hidden")
		} 
		if (!menuOpen) {
			document.body.classList.add("blur", "hidden")
		}
	}
	    
    const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
		handleOverflow();
	}

	const handleResize = () => {
		let intViewportWidth = window.innerWidth

		if (intViewportWidth > 768 && menuOpen) {
			setMenuOpen(!menuOpen);
			handleOverflow();
		}
	};
	
	const handleKeyDown = (event) => {
		if (!menuOpen) {
			return;
		}

		if (event.key === 'Escape') {
			setMenuOpen(!menuOpen);
		}
	};

	const [isMounted, setIsMounted] = useState(false);
	

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 1000);
		return () => clearTimeout(timeout);
	}, []);

		
	return (
		<StyledContainer scrollDirection={scrollDirection}>
			
			<StyledNav>
				{/* Logo */}
				<TransitionGroup component={null}>
					{isMounted && 
						(
							<CSSTransition classNames="fade" timeout={2000}>
									<Link href="/">
										<StyledLogo menuOpen={menuOpen} >David Developer</StyledLogo>
									</Link> 
							</CSSTransition>
						)
					}
				</TransitionGroup>

				{/* Hamburger icon */}
				<TransitionGroup component={null}>
					{isMounted && 
						(
							<CSSTransition classNames="fade" timeout={2000}>
								<StyledHamburger onClick={handleMenuOpen}>
									<StyledHamburgerBox>
										<StyledHamburgerInner menuOpen={menuOpen} />
									</StyledHamburgerBox>
								</StyledHamburger>
							</CSSTransition>
						)
					}
				</TransitionGroup>

				{/* Nav menu */}	
				<StyledLink>
					<StyledList>
						<TransitionGroup component={null}>
							{isMounted &&
								navLinks.map(({ url, name }, id) => {
									return (
										<CSSTransition key={id} classNames="fadedown" timeout={2000}>
											<StyledListItem key={id} style={{ transitionDelay: `${id * 100}ms` }}>
												<Link href={url}>
													<StyledListLink> {name} </StyledListLink>
												</Link>
											</StyledListItem>
										</CSSTransition>
									);
								})
							}
						</TransitionGroup>
					</StyledList>
					
					
					{/* <TransitionGroup component={null}>
						{isMounted && 
							(
								<CSSTransition classNames="fade" timeout={2000}>
									<div style={{ transitionDelay: `${navLinks.length * 100}ms` }}> 
										<StyledResumeButton	href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
											Currículum
										</StyledResumeButton>
									</div>
								</CSSTransition>
							)
						}
					</TransitionGroup>		 */}
				</StyledLink>

			</StyledNav>

			{/*  Mobile menu */}
			<Menu menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
		</StyledContainer>
	);
};

export default Nav;
