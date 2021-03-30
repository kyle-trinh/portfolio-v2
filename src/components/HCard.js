import React from "react"
import { Grid, Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export default function HCard({ children }) {
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
        {children}
      </Grid>
    </MotionBox>
  )
}
