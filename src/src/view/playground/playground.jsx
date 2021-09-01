import { ChakraProvider, Button } from "@chakra-ui/react";
import theme from "../../theme/extendedTheme.ts";
import { StyledButton, bg } from '../../common/components/buttons/button.style.ts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <StyledButton bg={'primary'} variant='outline'>
        Button
      </StyledButton>
    </ChakraProvider>
  );
}

export default App;
