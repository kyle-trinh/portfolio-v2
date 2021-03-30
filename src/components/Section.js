import { Box } from "@chakra-ui/react"
import { meta } from "../config"
import React from "react"

export default function Section(props) {
  return (
    <Box
      as="section"
      padding="100px 0px"
      borderTop={`1px solid ${meta.colors.lightBlue}`}
      {...props}
    />
  )
}
