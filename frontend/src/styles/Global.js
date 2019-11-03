import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	${styledNormalize}
	@font-face {
			font-family: 'Maisonneue Bold';
			src: url('/fonts/maisonneue/maisonneue_bold.woff') format('woff'),
					 url('/fonts/maisonneue/maisonneue_bold.eot') format('eot'),
					 url('/fonts/maisonneue/maisonneue_bold.otf') format('otf'),
					 url('/fonts/maisonneue/maisonneue_bold.svg') format('svg');
			font-weight: normal;
			font-style: normal;
		}

		@font-face {
			font-family: 'Maisonneue Book';
			src: url('/fonts/maisonneue/maisonneue_book.woff') format('woff'),
					 url('/fonts/maisonneue/maisonneue_book.eot') format('eot'),
					 url('/fonts/maisonneue/maisonneue_book.otf') format('otf'),
					 url('/fonts/maisonneue/maisonneue_book.svg') format('svg');
			font-weight: normal;
			font-style: normal;
		}

		html {
			/* background-color: ${({ theme }) => theme.red}; */
			box-sizing: border-box;
			font-family: 'Maisonneue Book';
			font-size: 100%;
			line-height: 1.5;
		}

		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}

		html,
		body {
			height: 100%;
		}

		body {
			margin: 0;
		}


		ul,
		ol {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		a {
			text-decoration: none;
			color: ${({ theme }) => theme.red};
  	}

		figure {
			margin: 0;
		}

		img,
		picture {
			margin: 0;
			max-width: 100%;
		}

		button {
			appearance: none;
			border: 0;
			cursor: pointer;
			display: inline-block;
			font-family: 'Maisonneue Book';
			font-size: 16px;
			-webkit-font-smoothing: antialiased;
			font-weight: 600;
			line-height: 1;
			text-align: center;
			text-decoration: none;
			user-select: none;
			vertical-align: middle;
			white-space: nowrap;
		}

		.container {
			padding-left: 44px;
			padding-right: 44px;
			margin: 0 auto;
			max-width: 1200px;
			position: relative;
		}
`;
