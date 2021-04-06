import { Text } from "@chakra-ui/react"
import React from "react"
import { SmallTitle, Paragraph } from "../components/Typography"
import ExternalLink from "../components/ExternalLink"

const components = {
  h1: props => (
    <Text as="h1" fontSize="48px" {...props} lineHeight="1.35" my="20px" />
  ),
  h3: props => <SmallTitle {...props} />,
  p: props => <Paragraph {...props} />,
  a: props => (
    <ExternalLink
      {...props}
      style={{ color: "var(--chakra-colors-blue-500)" }}
    />
  ),
}

export default components
