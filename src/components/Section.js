import { Box } from "@chakra-ui/react"
import React from "react"

export default function Section(props) {
  return (
    <Box
      as="section"
      padding="100px 0px"
      borderTop={`1px solid blue.100`}
      {...props}
    />
  )
}
