import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.25 }}
        >
          <Avatar
            sx={{ width: 320, height: 320 }}
            src="img/shizan.jpg"
            alt="Shizan Vasim, Sheezan Vasim, therealshizan"
          />
        </motion.div>

        <Box py={2} />

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.25 }}
        >
          <Typography variant="h6" align="center">
            <strong>Frontend Developer</strong> with{" "}
            <strong>3 years' experience</strong> in{" "}
            <strong>ReactJS, TypeScript, HTML, CSS, Astro,</strong> and more.
            Creating engaging, user-friendly interfaces. Let's build something
            amazing together."
          </Typography>
        </motion.div>
      </Box>
  );
};

export default Home;
