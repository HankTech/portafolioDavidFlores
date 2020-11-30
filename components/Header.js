import Head from 'next/head';
import { siteTitle, siteDescription } from 'config'


const Headers = () => {
	return (
		<Head>
			<title>{siteTitle}</title>
			<link rel="icon" type="image/ico" href="img/favicon/favicon.ico"></link>
			<meta name="description" content={siteDescription} />
			<meta property="og:image" content="img/ogimage/screen.png" />
			{/* Scroll Reveal */}
			<script src="https://unpkg.com/scrollreveal"></script>

			{/* Fontawesome */}
			<script src="https://kit.fontawesome.com/0acaa77d73.js" crossOrigin="anonymous"></script>
		</Head>
	);
};

export default Headers;
