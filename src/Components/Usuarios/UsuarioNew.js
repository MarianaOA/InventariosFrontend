import React, { useState } from "react";
import { crearUsuarios } from "../../Services/UsuarioService";
import Swal from "sweetalert2";

export const UsuarioNew = ({ handleOpenModal, listarUsuarios }) => {
  const [valoresForm, setValoresForm] = useState({});
  const {
    nombre = "",
    email = "",
    estado = "",
    fechaCreacion = new Date(),
  } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const usuario = {
      nombre,
      email,
      estado,
      fechaCreacion,
    };

    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await crearUsuarios(usuario);
      console.log(data);
      Swal.close();
      handleOpenModal();
      listarUsuarios();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  return (
    <div className="sideBar">
      <div className="container-fluiod">
        <div className="row">
          <div className="col">
            <div className="sidebar-header">
              <h3>Nuevo Usuario</h3>
              <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  required
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Estado</label>
                <input
                  required
                  type="text"
                  name="estado"
                  value={estado}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Fecha Creación</label>
                <input
                  required
                  type="date"
                  name="fechaCreacion"
                  value={fechaCreacion}
                  onChange={(evento) => handleOnChange(evento)}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
