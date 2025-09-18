

import { Box } from "@mui/material";
import { LeftSidebar } from "../Common/LeftSidebar";
import { RightCommunitiesSidebar } from "./RightCommunitiesSidebar";

export const CommunitiesDropdownMenu = () => {
  return (
    <Box
      sx={{
        width: "500px",
        height: "570px",
        bgcolor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        borderRadius: "4px",
        display: "flex",
      }}
    >
        <LeftSidebar/>
        <RightCommunitiesSidebar/>
    </Box>
  );
};
