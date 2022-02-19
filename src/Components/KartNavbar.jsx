import React from "react";

const KartNavbar = ({ kart }) => {
  function updateKart(kartdata) {
    return kartdata.length;
  }

  return <span className="text-danger">{updateKart(kart)}</span>;
};

export default KartNavbar;
