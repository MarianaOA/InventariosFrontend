import React, { useState, useEffect } from "react";
import { getUsuarios } from "../../Services/UsuarioService";
import { TablaUsuarios } from "./TablaUsuarios";
import { UsuarioNew } from "./UsuarioNew";

export const UsuarioView = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container">
      <div className="container m-4 p-3">
        <h2>Usuarios</h2>
        <TablaUsuarios componentes={usuarios} />
      </div>
      {openModal ? (
        <UsuarioNew
          handleOpenModal={handleOpenModal}
          listarUsuarios={listarUsuarios}
        />
      ) : (
        <button className="btn btn-secondary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
};
