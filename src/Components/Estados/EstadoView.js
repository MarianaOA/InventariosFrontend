import React, { useState, useEffect } from "react";
import { getEstados } from "../../Services/EstadosService";
import { EstadosNew } from "./EstadosNew";
import TablaModulos from "../TablaModulos";

export const EstadoView = () => {
  const [estados, setEstados] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listarEstados = async () => {
    try {
      const { data } = await getEstados();
      setEstados(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarEstados();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
      <div className="container m-4 p-3">
        <h2>Estados</h2>
        <TablaModulos componentes={estados} />
      </div>

      {openModal ? (
        <EstadosNew
          handleOpenModal={handleOpenModal}
          listarEstados={listarEstados}
        />
      ) : (
        <button className="btn btn-secondary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
};
