import styled from 'styled-components';
import theme from '@styles/theme' 

const { fontSizes } = theme;

const StyledFooter = styled.footer`
	height: auto;
	min-height: 70px;
	padding: 15px;
	text-align: center;
	font-size: ${fontSizes.sm};
`;

const Footer = () => {

	return (
		<StyledFooter>
			{/* Copyright */}
			<div><a href="https://github.com/HankTech" target="_blank" rel="nofollow noopener noreferrer">Designed &amp; Built by David Flores</a></div>
		</StyledFooter>
	)
}

export default Footer;
