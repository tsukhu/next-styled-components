import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyles";

const theme = {
  colors: {
    primary: "#4B59F7",
    primaryDark: "#0467FB",
    white: "#fff",
    main: "#101522",
    grayDark: "#242424",
    grayOne: "#1c2237",
    grayLight: "#a9b3c1",
    grayLighter: "#f7f8fa"
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
