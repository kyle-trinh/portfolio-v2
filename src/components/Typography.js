import { Box, Text } from "@chakra-ui/react"
import React from "react"

export function SectionTitle({ children }) {
  return (
    <Box textStyle="h2" color="blue.600">
      {children}
    </Box>
  )
}

export function SectionSub({ children }) {
  return (
    <Text fontSize="16px" mt={4}>
      {children}
    </Text>
  )
}
