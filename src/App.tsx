import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { MenuNav } from "./componets/side_bar"
import { StepsExample } from "./componets/stepper"

import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  components: {
    Steps,
  },
});


export const App = () => (
  <ChakraProvider theme={theme}>

  <MenuNav />

  </ChakraProvider>
)
