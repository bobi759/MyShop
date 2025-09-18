import { Box } from "@mui/material";
import { LeftSidebar } from "../Common/LeftSidebar";
import { RightMembershipsSidebar } from "./RightMembershipsSidebar";

export const MembershipsDropdownMenu = () => {
  return (
    <Box
      sx={{
        width: "1000px",
        height: "570px",
        bgcolor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        borderRadius: "4px",
        display: "flex",
      }}
    >
        <LeftSidebar/>
        <RightMembershipsSidebar/>
    </Box>
  );
};
