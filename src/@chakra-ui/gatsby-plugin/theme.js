import { theme as defaultTheme } from "@chakra-ui/react"

const theme = {
  ...defaultTheme,
  textStyles: {
    h1: {
      fontSize: ["48px", "64px"],
      lineHeight: 1,
      fontWeight: "bold",
    },
    h2: {
      fontSize: ["24", "48"],
      lineHeight: 1,
      fontWeight: "bold",
    },
  },
}

export default theme
