import { Box, Typography } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="body1">
        Hello, I'm <strong>Shizan Vasim</strong>, a dedicated and{" "}
        <strong>experienced Frontend Developer</strong>
        with a passion for creating clean, user-friendly interfaces. With{" "}
        <strong>three years of professional experience</strong>, I've had the
        opportunity to work with various companies and technologies, honing my
        skills and expanding my expertise. I specialize in modern web
        technologies such as{" "}
        <strong>ReactJS, TypeScript, HTML, CSS, and Astro</strong>.
      </Typography>

      <Box py={1} />

      <Typography variant="body1">
        My journey in the world of web development began with a strong
        foundation in JavaScript, which I've continued to build upon over the
        years. My proficiency in front-end frameworks like{" "}
        <strong>ReactJS</strong> and libraries like <strong>jQuery</strong> has
        enabled me to create dynamic, responsive, and high-performance
        applications. I'm a strong advocate for writing clean, maintainable, and
        scalable code, adhering to best practices and industry standards.
      </Typography>

      <Box py={1} />

      <Typography variant="body1">
        Additionally, I have experience in design tools like{" "}
        <strong>Figma</strong> and <strong>Photoshop</strong>, which allows me to collaborate effectively
        with designers and contribute to the visual aspects of projects. I'm
        also well-versed in
        <strong>Tailwind CSS</strong>, a utility-first CSS framework, which
        helps me rapidly prototype and develop stylish and responsive UIs.
      </Typography>

      <Box py={1} />

      <Typography variant="body1">
        In addition to web development, I've also worked with{" "}
        <strong>WordPress</strong>, a popular content management system (CMS),
        and <strong>React Native</strong> for cross-platform mobile app
        development, broadening my skillset and versatility.
      </Typography>

      <Box py={1} />

      <Typography variant="body1">
        With a passion for learning and a commitment to staying up-to-date with
        the latest technologies and trends, I'm always looking for new
        challenges and opportunities to apply my skills.
      </Typography>
    </Box>
  );
};

export default About;
