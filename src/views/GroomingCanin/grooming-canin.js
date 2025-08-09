import { Helmet } from "react-helmet";

import {
  GroomingCaninExtraServices,
  GroomingCaninIntro,
  GroomingCaninPrices,
  GroomingCaninPricing,
} from "@components/grooming-canin";
import { Navbar, Footer, Contact } from "@components/common";

const GroomingCanin = () => {
  return (
    <div className="grooming-canin-container">
      <Helmet>
        <title>GroomingCanin - PawXperience</title>
      </Helmet>
      <Navbar />
      <GroomingCaninIntro />
      <GroomingCaninPricing />
      <GroomingCaninPrices />
      <GroomingCaninExtraServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default GroomingCanin;
