import { ExploreBooks } from "./ExploreBooks/ExploreBooks";
import { SubNav } from "./NavbarProgressiveSub/NavbarProgressiveSub";
import { NavBelt } from "./NavBelt/NavBelt";
import { NavMain } from "./NavMain/NavMain";

export const Navbar = () => {
  return (
    <>
      <NavBelt />
      <NavMain />
      <SubNav />
      <ExploreBooks />
    </>
  );
};
