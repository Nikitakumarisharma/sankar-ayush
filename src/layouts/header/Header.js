import { useEffect } from "react";
import { stickyNav } from "../../utils";
import Header1 from "./Header1";
const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  switch (header) {
    default:
      return <Header1 />;  }
};
export default Header;
