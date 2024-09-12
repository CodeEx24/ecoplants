import React from "react";

import OurStoryDetails from "./SubDetails/OurStoryDetails";
import EcoPlantAnalytics from "./SubDetails/EcoPlantAnalytics";

export default function Story() {
  return (
    <section className="base-padding my-20 space-y-20">
      <div className="space-y-8">
        <OurStoryDetails />
      </div>
      <EcoPlantAnalytics />
    </section>
  );
}
