import { COLORS_CONSTANT } from "./../../constants/colors";
import { Button } from "@chakra-ui/react";
import { darken, mode, whiten } from "@chakra-ui/theme-tools";
import styled from "styled-components";

export const variants = {
  solid: "solid",
  outline: "outline",
  // ghost: "ghost",
  // link: "link",
};

/**
 * bg
 *  primary
 *  seconday
 *  outline-coor
 */

export const StyledButton = styled(Button)`
  background-color: ${props=>{
    const clr = props.variant ==='solid' ? 'primary' : 'white';
    return `${clr} !important`
  }} ;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  ${(props) => {
    const {bg = 'primary' } =props;
    console.log(props);
    // const bgColor = bg;
    return `
    &:hover {
      background-color: ${'red'} !important;
    };
    &:focus {
      box-shadow: none !important;
    }
 `;
  }}
`;
// export const StyledButton = {
//   // style object for base or default style
//   baseStyle: {},
//   // styles for different sizes ("sm", "md", "lg")
//   sizes: {},
//   // styles for different visual variants ("outline", "solid")
//   variants: {
//     primary: (props: any) => ({
//       bg: "primary",
//       color: "white",
//       _hover: {
//         bg: "red",//whiten("primary", 10)(props),
//         boxShadow: "md",
//       },
//     }),
//     secondary: (props: any) => ({
//       bg: "secondary",
//       color: "white",
//       _hover: {
//         bg: whiten("secondary", 20)(props),
//         boxShadow: "md",
//       },
//     }),
//     secondaryOutline: (props: any) => ({
//       bg: "transparent",
//       border: "1px solid",
//       borderColor: "secondary",
//       color: "secondary",
//       transition: "all 200ms ease",
//       _hover: {
//         boxShadow: "md",
//         transform: "scale(1.02)",
//       },
//     }),
//   },
//   // default values for `size` and `variant`
//   defaultProps: {},
// };
