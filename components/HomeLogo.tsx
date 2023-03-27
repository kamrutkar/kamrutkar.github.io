import { FC } from "react";
import { StyledHomeLogo } from "./Style";
import Link from "next/link";

const HomeLogo: FC = () => {
  return (
    <Link href="/" passHref>
      <StyledHomeLogo aria-label="Komal Amrutkar's Site logo" translate="no">
        K
      </StyledHomeLogo>
    </Link>
  );
};

export default HomeLogo;
