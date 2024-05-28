import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  disableTransitionOnChange: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "slow",
      },
    },
  },
});

export default theme;
