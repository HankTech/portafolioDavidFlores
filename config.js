module.exports = {
	siteTitle: 'David Flores | Full Stack Web Developer',
	siteDescription:
		'',
	siteKeywords:
		'front-end, web developer, javascript, react',
	siteUrl: '',
	siteLanguage: 'es_ES',
	googleAnalyticsID: '',
	googleVerification: '',
	name: 'David',
	location: 'Venezuela',
	email: 'hanktech1.0@gmail.com',
	github: 'https://github.com/HankTech',
	twitterHandle: '@',

	//  //  //  // -- Social Links -- //  //  //  //

	socialMedia: [
		{
			name: 'GitHub',
			url: 'https://github.com/HankTech',
		},
		// {
		// 	name: 'Linkedin',
		// 	url: 'https://www.linkedin.com/',
		// },
		{
			name: 'Twitter',
			url: 'https://twitter.com/David96973680',
		},
    ],
    
    //  //  //  // -- Nav Links -- //  //  //  //

	navLinks: [
		{
			name: 'Sobre mi',
			url: '#about',
		},
		{
			name: 'Proyectos',
			url: '#projects',
		},
		{
			name: 'Contacto',
			url: '#contact',
		},
	],

	//  //  //  // -- Skills -- //  //  //  //

	skills: [
		{ name: 'Html5' },
		{ name: 'GraphQL' },
		{ name: 'MongoDB' },
		{ name: 'Firebase' },
		{ name: 'NextJS' },
		{ name: 'MaterialUI' },
		{ name: 'CSS3' },
		{ name: 'JavaScript' },
		{ name: 'Bootstrap' },
		{ name: 'ReactJS' },
		{ name: 'NodeJS' },
		{ name: 'TailwindCSS' },
	],

	//  //  //  // -- Proyects -- //  //  //  //

	featuredProjects: [
		{
			link: 'https://hanktech.github.io/landing-sample01/',
			title: 'landingPage',
			description:
				'Una landing page, multiproposito hecha con React, TailwindCSS en su mayor parte.',
			tech: ['TailWindCSS', 'CSS', 'Styled-Component', 'React'],
			github: 'https://github.com/',
			cover: 'img/featured/landing-sample01-min.png',
		},

		{
			link: 'https://hanktech.github.io/vegetalbioplant/',
			title: 'Vegetal Bioplant',
			description:
				'Web sobre una planta de uso medicinal, hecha con Bootstrap, HTML, JavaScript',
			tech: ['Html', 'CSS', 'Javascript', 'Bootstrap'],
			github: 'https://github.com/',
			cover: 'img/featured/vegetalbioplant-min.png',
		},

		{
			link: 'https://noticiassagitariodemonagas.vercel.app/',
			title: 'El Sagitario de Monagas',
			description:
				'Un sitio web de noticias, el cual se le puede añadir contenido que se almacena los datos en MongoBD',
			tech: ['NextJS', 'JavaScript', 'CSS', 'MaterialUI', 'MongoDB'],
			github: 'https://github.com/',
			cover: 'img/featured/sagitariodemonagas-min.png',
		},
	],

	//  //  //  // -- Other proyects -- //  //  //  //

	otherProjects: [

        
        {
			link: 'https://hanktech.github.io/portalRadios.hnk/',
			title: 'Radios App Cibernetica',
			description: 'Una pagina web simple que aloja distintas radios online de diversas fuentes ',
			tech: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
            github: 'https://github.com/HankTech/portalRadios.hnk',
            cover: 'img/featured/sagitariodemonagas-min.png',
		},

		{
			link: 'https://hanktech.github.io/weatherapp/',
			title: 'weatherapp',
			description: 'Una aplicacion web simple para ver el clima en ciudades de distintos paises.',
			tech: ['ReactJS', 'JavaScript', 'Bootstrap', 'CSS'],
			github: 'https://github.com/HankTech/weatherapp',
		},

		{
			link: 'https://hanktech.github.io/Cotizador-de-seguros/',
			title: 'CotizadorApp',
			description: 'Una aplicacion web en React.',
			tech: ['ReactJS', 'JavaScript', 'Bootstrap', 'CSS'],
			github: 'https://github.com/HankTech/weatherapp',
		},

        {
			link: 'https://hanktech.github.io/admistradorCitas/',
			title: 'AdministradorCitas',
			description: 'Una aplicacion web que genera Citas de Veterinario',
			tech: ['ReactJS', 'JavaScript', 'Bootstrap', 'CSS'],
			github: 'https://github.com/HankTech/admistradorCitas',
        },
        
	],

	navHeight: 100,

	colors: {
		green: '#64ffda',
		navy: '#0a192f',
		darkNavy: '#020c1b',
	},

	srConfig: (delay = 200) => ({
		origin: 'bottom',
		distance: '20px',
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor: 0.25,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
	}),
};
