import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { SubnavMenuElement } from "./DropdownMenus/Common/SubnavMenuElement";
import { BookDropdownMenu } from "./DropdownMenus/BookCategories/BookDropdownMenu";
import { NewTrendingDropdownMenu } from "./DropdownMenus/NewTrending/NewTrendingDropdownMenu";
import { DealsRewardsDropdownMenu } from "./DropdownMenus/DealsRewards/DealsRewardsDropdownMenu";
import { BestSellersDropdownMenu } from "./DropdownMenus/BestSellers/BestSellersDropdownMenu";
import { MembershipsDropdownMenu } from "./DropdownMenus/Membership/MembershipsDropdownMenu";
import { CommunitiesDropdownMenu } from "./DropdownMenus/Communities/CommunitiesDropdownMenu";
import { MoreDropdownMenu } from "./DropdownMenus/More/MoreDropdownMenu";

const subNavStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    bgcolor: "#ffffff",
    color: "#111",
    height: "40px",
    px: 2,
    borderBottom: "1px solid #ddd",
    gap: 2,
    boxShadow: "0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)",
    position: "relative", // important so dropdown is positioned relative to this
  },
  item: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": { color: "#007185" },
    position: "relative", // so dropdown anchors correctly
  },
  divider: {
    height: "60%",
    width: "1px",
    bgcolor: "#ddd",
    mx: 1,
  },
  arrow: {
    fontSize: 18,
  },
  overlay: {
    position: "absolute",
    top: "40px", // align with the dropdown
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)", // Transparent dark overlay
    zIndex: 9,
  },
  dropdownWrapper: {
    position: "absolute",
    top: "40px", // Position just under the navbar
    left: 0,
    zIndex: 10,
  },
};

export const SubNav = () => {
  return (
    <Box sx={subNavStyles.root}>
      {/* Left label */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mr: 2 }}>
        books
      </Typography>

      <Box sx={subNavStyles.divider} />

      {/* Categories dropdown */}
      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"Categories"}
            dropdownComponent={<BookDropdownMenu />}
          />
        }
      </Box>

      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"New & Trending"}
            dropdownComponent={<NewTrendingDropdownMenu />}
          />
        }
      </Box>
      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"Deals & Rewards"}
            dropdownComponent={<DealsRewardsDropdownMenu />}
          />
        }
      </Box>

      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"Best Sellers & More"}
            dropdownComponent={<BestSellersDropdownMenu />}
          />
        }
      </Box>

      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"Memberships"}
            dropdownComponent={<MembershipsDropdownMenu />}
          />
        }
      </Box>

      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"Communities"}
            dropdownComponent={<CommunitiesDropdownMenu />}
          />
        }
      </Box>
      
      <Box sx={subNavStyles.item}>
        {
          <SubnavMenuElement
            text={"More"}
            dropdownComponent={<MoreDropdownMenu />}
          />
        }
      </Box>

      <Box sx={subNavStyles.divider} />

      <Box sx={subNavStyles.item}>Your Books</Box>
    </Box>
  );
};
