import React from "react"
import { Grid, Box, Text, Icon, HStack, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
  index,
}) {
  const image = getImage(cover)
  return (
    <MotionBox
      bg="#fff"
      // height={["auto", "400px"]}
      borderRadius="3xl"
      border="2px solid #f6f6f6"
      width="100%"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Grid
        width="100%"
        gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
        gridTemplateRows={["repeat(5, 1fr)", "1fr"]}
        height="100%"
        gridGap={["0px", "0px", "0px", "80px"]}
      >
        <Box
          gridColumn={["1/-1", index % 2 === 0 ? "1/2" : "2"]}
          gridRow={["3/-1", "1"]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingLeft={["20px", "25px", "25px", index % 2 === 0 ? "60px" : "0"]}
          paddingRight={[
            "20px",
            "25px",
            "25px",
            index % 2 === 0 ? "0" : "60px",
          ]}
          py="20px"
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
              See how I built this!
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
        <Box
          display="flex"
          as={Link}
          to={href}
          justifyContent="flex-end"
          alignItems="center"
          bg="gray.200"
          borderRadius="3xl"
          gridRow={["1/3", "1"]}
          gridColumn={["1/-1", index % 2 === 1 ? "1/2" : "2"]}
          _hover={{ "&::after": { opacity: "60%" } }}
          height="100%"
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
            alt={name}
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
      </Grid>
    </MotionBox>
  )
}
