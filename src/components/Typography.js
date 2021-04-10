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

export function Title(props) {
  return (
    <Text
      as="h1"
      lineHeight="1"
      my={["8px", "24px"]}
      fontWeight="bold"
      fontSize={["32px", "64px"]}
      {...props}
    />
  )
}

export function SubTitle(props) {
  return (
    <Text
      as="h2"
      textAlign="left"
      fontWeight="bold"
      lineHeight="1.1"
      fontSize="48px"
      {...props}
    />
  )
}

export function SmallTitle(props) {
  return (
    <Text
      as="h3"
      textAlign="left"
      my="24px"
      fontSize="32px"
      fontWeight="bold"
      {...props}
    />
  )
}

export function Paragraph(props) {
  return (
    <Text
      textAlign="left"
      lineHeight="1.6"
      fontSize="16px"
      my={["0px", "16px"]}
      {...props}
    />
  )
}
