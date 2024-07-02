import React from "react";
import { Mobile } from "./Mobile";

const HomeRightComponent: React.FC = () => {
  
  return (
    <div>
      <Mobile />
      Actual email previewmay vary depending on the email client
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export { HomeRightComponent };
