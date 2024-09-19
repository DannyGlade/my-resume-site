import { createTheme } from "@mantine/core";
import { colors } from "./colors";

export const theme = createTheme({
   fontFamily: "Source Code Pro",
   autoContrast: true,
   // colors: colors,
   white: "#fff",
   black: "#000",
   primaryColor: "dark",
   headings: {
      fontFamily: "Major Mono Display",
      fontWeight: "700",
   },
});
