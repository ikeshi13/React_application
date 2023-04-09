import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/theme";
import { Router } from "./router/Router";

function App() {
  return (
    /**初期画面はRouterコンポーネントを元に表示する */
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
