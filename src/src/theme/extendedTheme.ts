import { COLORS_CONSTANT } from './../common/constants/colors';
import { extendTheme } from "@chakra-ui/react";
import { StyledButton as Button } from "../common/components/buttons/button.style";

const theme = extendTheme({
  colors: {
    primary: "#facd00",
    secondary: "#845EC2",
    white:'#fff'
  },
  // components: {
  //   // Button, // Has to match to the name of the component
  // },
});

export default theme;
