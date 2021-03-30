import React from "react"
import { Grid, Box, VStack, Text, Icon, HStack, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
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
}) {
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
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingLeft="60px"
        >
          <Link href={href}>
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
          <Link href={href}>
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
        <Link href={href}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            bg="gray.200"
            borderRadius="3xl"
            _hover={{ bg: "yellow.200" }}
            transition="all 0.5s ease-out"
          >
            <StaticImage
              src="../assets/images/themoviedb.png"
              alt="binh trinh"
              placeholder="blurred"
              layout="constrained"
              width={550}
              height={400}
              quality={100}
              style={{ borderRadius: "20px" }}
            />
          </Box>
        </Link>
      </Grid>
    </MotionBox>
  )
}
