import { LeftSidebar } from "../Common/LeftSidebar";
import { Box } from "@mui/material";
import { RightDealsRewardsSidebar } from "./RightDealsRewardsSidebar";


export const DealsRewardsDropdownMenu = () => {
  return (
    <Box
      sx={{
        width: "550px",
        height: "570px",
        bgcolor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        borderRadius: "4px",
        display: "flex",
      }}
    >
        <LeftSidebar/>
        <RightDealsRewardsSidebar/>
    </Box>
  );
};
