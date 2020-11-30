import {
	IconAppStore,
	IconCodepen,
	IconExternal,
	IconFolder,
	IconFork,
	IconGitHub,
	IconInstagram,
	IconLinkedin,
	IconLoader,
	IconLocation,
	IconLogo,
	IconPlayStore,
	IconStar,
	IconTwitter,
    IconZap,
    IconBootstrap,
	IconHtml5,
	IconGraphQL,
    IconCss3,
    IconFirebase,
    IconJavascript,
    IconMaterialui,
    IconMongodb,
    IconNextjs,
    IconNodejs,
    IconReactjs,
    IconTailwindcss,    
} from 'components/icons';

const FormattedIcon = ({ name }) => {
	switch (name) {
		case 'AppStore':
            return <IconAppStore />;
        case 'Bootstrap':
            return <IconBootstrap />;
		case 'Codepen':
            return <IconCodepen />;
        case 'CSS3': 
            return <IconCss3 />;
		case 'External':
            return <IconExternal />;
        case 'Firebase': 
            return <IconFirebase />;
		case 'Folder':
			return <IconFolder />;
		case 'Fork':
			return <IconFork />;
		case 'GraphQL':
			return <IconGraphQL />;
		case 'GitHub':
			return <IconGitHub />;
		case 'Html5':
			return <IconHtml5 />;
		case 'Instagram':
            return <IconInstagram />;
        case 'JavaScript':
            return <IconJavascript />
		case 'Linkedin':
			return <IconLinkedin />;
		case 'Loader':
			return <IconLoader />;
		case 'Location':
			return <IconLocation />;
		case 'Logo':
            return <IconLogo />;
        case 'MaterialUI': 
            return <IconMaterialui />;
        case 'MongoDB': 
            return <IconMongodb />;
        case 'NextJS':
            return <IconNextjs />;
        case 'NodeJS':
            return <IconNodejs />;
		case 'PlayStore':
            return <IconPlayStore />;
        case 'ReactJS':
            return <IconReactjs />;
		case 'Star':
            return <IconStar />;
        case 'TailwindCSS':
            return <IconTailwindcss />;
		case 'Twitter':
			return <IconTwitter />;
		case 'Zap':
			return <IconZap />;
		default:
			return <IconExternal />;
	}
};

export default FormattedIcon;
