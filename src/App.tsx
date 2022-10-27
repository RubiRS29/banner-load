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
import { MenuNav } from "./componet/side_bar"

import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { Route, BrowserRouter, Routes, useRoutes } from "react-router-dom"
import { StepsMain } from "./pages/stepper/stepper"
import { ScheduleCom } from "./pages/schedule/schedule"

const theme = extendTheme({
  components: {
    Steps,
  },
});

const stepsMainCon = () => {
  return <StepsMain />;
};


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <StepsMain /> }
    // ...
  ]);
  return routes;
};


export const App = () => {

  return (

    <ChakraProvider theme={theme}>
      {/* <MenuNav /> */}

      <BrowserRouter>

        <Routes>
          <Route  path="/" element={<MenuNav />} >

            <Route path="/" element={<StepsMain />} />
            <Route path="/schedule" element={<ScheduleCom />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </ChakraProvider>
  )

}

export default App;


