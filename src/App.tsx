import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from "react-error-boundary";

import ReactToastify from "./styledComponents/ReactToastify";
import theme from "./theme/theme";
import Home from "./components/Home";
import FallbackRender from "./FallbackRender";
import AppProvider from "./providers/AppProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallbackRender={FallbackRender}>
        <CssBaseline />
        <AppProvider>
          <Home />
        </AppProvider>
        <ReactToastify />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;

