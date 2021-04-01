import React from "react"
import { Box, HStack, Icon, Text, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(HStack)
const MotionFlex = motion(Flex)

export default function Skill({ icon, text, color }) {
  return (
    <MotionBox
      whileHover={{ scale: 1.06 }}
      cursor="pointer"
      alignItems="center"
      justifyContent="flex-start"
      spacing={0}
    >
      <Box
        padding="6px 8px"
        bg="gray.100"
        borderTopLeftRadius="lg"
        borderBottomLeftRadius="lg"
      >
        <Icon as={icon} color={color} width="30px" height="30px" />
      </Box>
      <MotionFlex
        whileHover={{ backgroundColor: "#F6E05E" }}
        bg="yellow.200"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        borderTopRightRadius="lg"
        borderBottomRightRadius="lg"
        fontWeight="bold"
      >
        <Text>{text}</Text>
      </MotionFlex>
    </MotionBox>
  )
}
