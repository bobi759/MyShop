import { Box } from "@mui/material";
import { LeftSidebar } from "../Common/LeftSidebar";
import { RightSidebar } from "./RightBookSidebar";

export const BookDropdownMenu = () => {
  return (
    <Box
      sx={{
        width: "1262px",
        height: "570px",
        bgcolor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        borderRadius: "4px",
        display: "flex",
      }}
    >
        <LeftSidebar/>
        <RightSidebar/>
    </Box>
  );
};
