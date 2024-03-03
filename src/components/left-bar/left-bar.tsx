import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MenuItems from "./menu-items";
import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const LeftBar: React.FC = () => {
  return (
    <Stack height={"100vh"} p={8} justifyContent={"space-between"}>
      <Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Typography mb={2} variant="h1" fontWeight={700}>
              <Link style={{ color: "unset", textDecoration: "none" }} to={"/"}>
                Shizan Vasim
              </Link>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Typography mb={2} variant="h2">
              Frontend Developer
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
          >
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              I am a dedicated digital experience designer, with a focus on
              creating pixel-perfect designs that captivate and engage
              audiences.
            </Typography>
          </motion.div>
        </Box>

        <Box py={2} />

        <Box>
          <MenuItems />
        </Box>
      </Box>

      <Stack direction={"row"} columnGap={2}>
        <GitHub />
        <LinkedIn />
        <X />
        <Instagram />
      </Stack>
    </Stack>
  );
};

export default LeftBar;
