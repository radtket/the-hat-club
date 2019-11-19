import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	${styledNormalize}

    @font-face {
    font-family: "square721_cn_btbold";
    src: url("fonts/Square721-Cn-BT-Bold/square-721-bold-condensed-bt-webfont.eot");
    src: url("fonts/Square721-Cn-BT-Bold/square-721-bold-condensed-bt-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("fonts/Square721-Cn-BT-Bold/square-721-bold-condensed-bt-webfont.woff2") format("woff2"),
      url("fonts/Square721-Cn-BT-Bold/square-721-bold-condensed-bt-webfont.woff") format("woff"),
      url("fonts/Square721-Cn-BT-Bold/square-721-bold-condensed-bt-webfont.ttf") format("truetype"),
      url("fonts/Square721-Cn-BT-Bold/square-721-bold-condensed-bt-webfont.svg#square721_cn_btbold")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }

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

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
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
      background: transparent;
			border: 0;
			cursor: pointer;
			display: inline-block;
			font-family: 'Maisonneue Book';
			font-size: 16px;
			-webkit-font-smoothing: antialiased;
      font-weight: 400;
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

    .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }
    .slick-list {
        position: relative;
        overflow: hidden;
        display: block;
        margin: 0;
        padding: 0;

        &:focus {
            outline: none;
        }

        &.dragging {
            cursor: pointer;
            cursor: hand;
        }
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .slick-track {
        position: relative;
        left: 0;
        top: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;

        &:before,
        &:after {
            content: "";
            display: table;
        }

        &:after {
            clear: both;
        }

        .slick-loading & {
            visibility: hidden;
        }
    }
    .slick-slide {
        float: left;
        height: 100%;
        min-height: 1px;
        [dir="rtl"] & {
            float: right;
        }
        img {
            display: block;
        }
        &.slick-loading img {
            display: none;
        }

        display: none;

        &.dragging img {
            pointer-events: none;
        }

        .slick-initialized & {
            display: block;
        }

        .slick-loading & {
            visibility: hidden;
        }

        .slick-vertical & {
            display: block;
            height: auto;
            border: 1px solid transparent;
        }
    }
    .slick-arrow.slick-hidden {
        display: none;
    }


.slick-loading .slick-list {
  background: #fff url('./ajax-loader.gif') center center no-repeat;
}

/* Icons */
@font-face {
  font-family: 'slick';
  font-weight: normal;
  font-style: normal;
  src: url('/fonts/slick/slick.eot');
  src: url('/fonts/slick/slick.eot?#iefix') format("embedded-opentype"), url('/fonts/slick/slick.woff') format("woff"), url('/fonts/slick/slick.ttf') format("truetype"), url('/fonts/slick/slick.svg#slick') format("svg");
}

/* Arrows */

.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}

.slick-prev,
.slick-next {
    &::before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;
      opacity: .75;
      color: white;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

  &:hover,
  &:focus {
    color: transparent;
    outline: none;
    background: transparent;

    &::before {
      opacity: 1;
    }
  }

  &.slick-disabled {
    &::before {
      opacity: .25;
    }
  }
}

.slick-prev {
  left: -25px;
}

[dir='rtl'] .slick-prev {
  right: -25px;
  left: auto;
}

.slick-prev:before {
  content: '←';
}

[dir='rtl'] .slick-prev:before {
  content: '→';
}

.slick-next {
  right: -25px;
}

[dir='rtl'] .slick-next {
  right: auto;
  left: -25px;
}

.slick-next:before {
  content: '→';
}

[dir='rtl'] .slick-next:before {
  content: '←';
}

/* Dots */

.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;

  li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;

    button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 20px;
      height: 20px;
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 0;
      outline: none;
      background: transparent;

      &:hover, &:focus {
        outline: none;
      }

      &:hover:before, &:focus:before {
        opacity: 1;
      }

      &:before {
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: .25;
        color: black;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }

    &.slick-active button:before {
      opacity: .75;
      color: black;
    }
  }
}

`;
