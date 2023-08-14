import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Wrapper } from "./Wrapper"
import { Box, VStack, Button } from "@chakra-ui/react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Title, Paragraph } from "./Typography"

const MotionBox = motion(Box)

export default function Header() {
  return (
    <Box height={`calc(100vh - 72px)`} position="relative">
      <Wrapper
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <VStack
          textAlign="center"
          mx="auto"
          w="100%"
          maxW="700px"
          spacing={["8px", "8px", "2px", "8px"]}
          alignItems="center"
        >
          <Box width={["30%", "25%", "15%", "25%"]}>
            <StaticImage
              src="../assets/images/profile.png"
              alt="Kyle Trinh"
              placeholder="blurred"
              layout="constrained"
              width={150}
              height={150}
              quality={100}
            />
          </Box>
          <Paragraph textAlign="center" fontSize={["16px", "24px"]}>
            Hi, I'm Kyle{" "}
            <span role="img" aria-label="Hello">
              👋
            </span>
          </Paragraph>
          <Title my="0px">
            A Full-stack Javascript <br></br> Web Developer
          </Title>
          <Box>
            <Paragraph textAlign="center">
              with an eye for clean aesthetics and optimal User Experience via
              intuitive design.
            </Paragraph>
            <Paragraph textAlign="center">
              I have experience in MongoDB, Express.js, React.js, Node.js (MERN)
              stack
            </Paragraph>
          </Box>
          <Link to="/#contact">
            <Button colorScheme="blue">Connect with me!</Button>
          </Link>
        </VStack>
      </Wrapper>
      <Box
        position="absolute"
        bottom={0}
        left="50%"
        transform="translateX(-50%)"
        display={["none", "block"]}
      >
        <Box
          height="60px"
          width="40px"
          border="4px solid #2B6CB0"
          mb="40px"
          borderRadius="40px"
          position="relative"
        >
          <MotionBox
            position="absolute"
            top="20%"
            left="45%"
            transform="translate(-60%, -50%)"
            height="14px"
            width="5px"
            borderRadius="20px"
            backgroundColor="#2B6CB0"
            animate={{ y: 10 }}
            transition={{ ease: "easeOut", repeat: "Infinity", duration: 1 }}
          ></MotionBox>
        </Box>
      </Box>
    </Box>
  )
}
