import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    src: url("/fonts/Singfy-Medium.otf");
    font-family: singfy-medium;
  }
  @font-face {
    src: url("/fonts/Singfy-Bold.otf");
    font-family: singfy-bold;
  }

  *, 
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    --grey-dark: #040404; /* Used on Aside */
    --grey-light: #121212; /* Used as Backround Color */
    --grey-lighter: #282828; /* Used on Playlist Items Background Color.
                            */
    --grey-text: #B3B3B3; /* Used on Text Color */
    --grey-nav: #00000080; /* Used as Top Bar Background Color */
    --green-button: #1db954; /* Used as Play Button Background Color */
  }

  body {
    font-family: singfy-medium
  }

  ::-webkit-scrollbar {
    width: 12px;
  } 

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff4d;

    &:hover {
      background-color: #ffffff80;
    }

    &:active {
      background-color: var(--grey-text);
    }
  }
`;

export default Global;
