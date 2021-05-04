import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BedCountPropsType } from "./types";

const BedCount = ({ icon, count, type }: BedCountPropsType) => {
  return (
    <div className="bed-count">
      <h4
        className={`text-${
          count === undefined || count === null
            ? "secondary"
            : count === 0
            ? "danger"
            : "success"
        } mt-2 font-weight-bold`}
      >
        {count}
      </h4>
      <FontAwesomeIcon icon={icon} size="2x" className="text-secondary" />
      <h6 className="text-secondary pt-2">{type}</h6>
    </div>
  );
};

export default BedCount;
