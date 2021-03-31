import React from "react"
import {
  Grid,
  Box,
  VStack,
  Text,
  Icon,
  HStack,
  Button,
  AbsoluteCenter,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaLink } from "react-icons/fa"
import ExternalLink from "./ExternalLink"
import { Link } from "gatsby"

const MotionBox = motion(Box)

export default function HCard({
  name,
  description,
  href,
  github,
  homepage,
  technologies,
  cover,
  id,
}) {
  const image = getImage(cover)
  console.log(image)
  return (
    <MotionBox
      bg="#fff"
      height="400px"
      borderRadius="3xl"
      border="2px solid #f6f6f6"
      width="100%"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Grid
        width="100%"
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="1fr"
        height="100%"
        gridGap="80px"
      >
        <Box
          gridColumn={id % 2 === 1 ? "1/2" : "2"}
          gridRow="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingLeft="60px"
        >
          <Link to={href}>
            <Text
              fontWeight="bold"
              fontSize="32px"
              color="gray.600"
              _after={{
                content: '""',
                display: "block",
                height: "4px",
                width: "60px",
                backgroundColor: "blue.400",
              }}
            >
              {name}
            </Text>
          </Link>
          <Text my="12px">{description}</Text>
          <Text color="gray.500">{technologies.join(" - ")} </Text>
          <Link to={href}>
            <Button variant="outline" mt="8px">
              Read more
            </Button>
          </Link>
          <HStack mt="16px" spacing="16px">
            <ExternalLink href={github}>
              <Icon
                as={FaGithub}
                width="28px"
                height="28px"
                _hover={{ color: "blue.400" }}
                transition="all 500ms ease-out"
                color="gray.600"
              />
            </ExternalLink>
            <ExternalLink href={homepage}>
              <Icon
                as={FaLink}
                width="28px"
                height="28px"
                _hover={{ color: "blue.400" }}
                transition="all 500ms ease-out"
                color="gray.600"
              />
            </ExternalLink>
          </HStack>
        </Box>
        <Link to={href}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            bg="gray.200"
            borderRadius="3xl"
            height="400px"
            gridRow="1"
            gridColumn={id % 2 === 0 ? "1/2" : "2"}
            _hover={{ "&::after": { opacity: "60%" } }}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              zIndex: 8,
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              backgroundColor: "blue.400",
              transition: "all 0.5s ease-out",
              borderRadius: "3xl",
              opacity: 0,
            }}
          >
            <GatsbyImage
              image={image}
              alt="asd"
              style={{
                borderRadius: "20px",
                height: "100%",
              }}
            />
            {/* <StaticImage
              src={`../../content/${cover}`}
              alt="binh trinh"
              placeholder="blurred"
              layout="constrained"
              width={550}
              height={400}
              quality={100}
              style={{ borderRadius: "20px" }}
            /> */}
          </Box>
        </Link>
      </Grid>
    </MotionBox>
  )
}
