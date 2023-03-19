import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './theme/theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
        <Button colorScheme={"teal"}>ボタン</Button>
        <p>ああああああああああああああああ</p>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
