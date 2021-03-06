import styled from 'styled-components';
import { email } from 'config';
import Side from './Side';
import theme from '@styles/theme';

const { colors, fontSizes, fonts } = theme;

const StyledLinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: ${colors.lightSlate};
	}
`;

const StyledEmailLink = styled.a`
	font-family: ${fonts.SFMono};
	font-size: ${fontSizes.xs};
	letter-spacing: 0.1em;
	writing-mode: vertical-rl;
	margin: 20px auto;
	padding: 10px;

	&:hover,
	&:focus {
		transform: translateY(-3px);
	}
`;

const Email = () => {
	return (
		<Side orientation="right">
			<StyledLinkWrapper>
				<StyledEmailLink href={`mailto:${email}`}> {email} </StyledEmailLink>
			</StyledLinkWrapper>
		</Side>
	);
};

export default Email;
