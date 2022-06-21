import React from 'react'

export const TablaUsuarios = ({componentes, openEditById}) => {
    return (
        <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Creación</th>
              <th scope="col">Fecha Actualización</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              componentes.map((est, index) => {
        
                return(
                  <tr key={est._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{est.nombre}</td>
                    <td>{est.email}</td>
                    <td>{est.estado}</td>
                    <td>{est.fechaCreacion}</td>
                    <td>{est.fechaActualizacion}</td>
                    <td>
                      <button 
                        type="button" 
                        className="btn btn-outline-success"
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        data={est._id}
                        onClick={openEditById}
                      >
                        <i className="fa-solid fa-pen-to-square" data={est._id}
                        onClick={openEditById}></i>
                        
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                        
                      </button>
                    </td>
                    <td></td>
                </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      )
    }