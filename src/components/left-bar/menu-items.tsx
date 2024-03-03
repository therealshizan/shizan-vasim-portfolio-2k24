import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import theme from "../../theme";

import { motion } from "framer-motion";

const items = ["About", "Experience", "Projects"] as const;

const MenuItems: React.FC = () => {
  const location = useLocation();

  return (
    <Stack rowGap={2}>
      {items &&
        items?.map((item, index) => {
          let isCurrent =
            item.split(" ").join("-").toLowerCase() ===
            location.pathname.slice(1);
          return <MenuItem isCurrent={isCurrent} item={item} index={index} />;
        })}
    </Stack>
  );
};

export default MenuItems;

// -----------------------------------------------------------------------------

const MenuItem: React.FC<{
  item: string;
  isCurrent: boolean;
  index: number;
}> = ({ item, isCurrent, index }) => {
  let link = item.split(" ").join("-").toLowerCase();

  console.log(isCurrent);

  return (
    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{delay: 0.5 * (index + 1)}}>
      <Stack direction={"row"} alignItems={"center"} columnGap={2}>
        <Divider
          sx={{
            transition: ".25s",
            width: isCurrent ? "75px" : "50px",
            border: `1px solid ${
              isCurrent
                ? theme.palette.primary.main
                : theme.palette.secondary.main
            }`,
          }}
        />
        <NavLink
          className={link}
          style={{ color: "unset", textDecoration: "none" }}
          to={link}
        >
          <Typography
            variant="body2"
            fontWeight={700}
            textTransform={"uppercase"}
            sx={{
              color: isCurrent
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            }}
          >
            {item}
          </Typography>
        </NavLink>
      </Stack>
    </motion.div>
  );
};
