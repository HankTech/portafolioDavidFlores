import { css } from 'styled-components';

const sizes = {
	giant1440: 1440,
	desktop1200: 1200,
	laptop1000: 1000,
	tablet768: 768,
	mobileLarge600: 600, //thone
	mobileMedium480: 480,  //phablet
	mobileSmall376: 376,  //phone
	mobileTiny330: 330,	 //tiny
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
	// use em in breakpoints to work properly cross-browser and support users
	// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
	const emSize = sizes[label] / 16;
	accumulator[label] = (...args) => css`
		@media (max-width: ${emSize}em) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export default media;
