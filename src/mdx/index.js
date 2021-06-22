import React from "react"
import {
  SmallTitle,
  Paragraph,
  Title,
  SubTitle,
} from "../components/Typography"
import ExternalLink from "../components/ExternalLink"

const components = {
  h1: props => <Title {...props} />,
  h2: props => <SubTitle {...props} />,
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
