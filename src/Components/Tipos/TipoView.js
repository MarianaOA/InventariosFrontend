import React, { useState, useEffect } from "react";
import { getTipos } from "../../Services/TiposService";
import { TipoNew } from "./TipoNew";
import TablaModulos from "../TablaModulos";

export const TipoView = () => {
  const [tipos, setTipos] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listarTipos = async () => {
    try {
      const { data } = await getTipos();
      setTipos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarTipos();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
    <div className="container m-4 p-3">
      <h2>Tipos</h2>
      <TablaModulos componentes={tipos} />
    </div>
      {openModal ? (
        <TipoNew
          handleOpenModal={handleOpenModal}
          listarTipos={listarTipos}
        />
      ) : (
        <button className="btn btn-secondary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
};
