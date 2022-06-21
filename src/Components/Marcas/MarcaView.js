import React, { useState, useEffect } from "react";
import { getMarcas } from "../../Services/MarcasService";
import TablaModulos from "../TablaModulos";
import { MarcaNew } from "./MarcaNew";

export const MarcaView = () => {
  const [marcas, setMarcas] = useState([]);
  const [openModal, setOpenModal] = useState(false);



  const listarMarcas = async () => {
    try {
      const { data } = await getMarcas();
      setMarcas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMarcas();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
    <div className="container m-4 p-3">
      <h2>Marcas</h2>
      <TablaModulos componentes={marcas} />
    </div>
    {openModal ? (
        <MarcaNew
          handleOpenModal={handleOpenModal}
          listarMarcas={listarMarcas}
        />
      ) : (
        <button className="btn btn-secondary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
  </div>
  )
}