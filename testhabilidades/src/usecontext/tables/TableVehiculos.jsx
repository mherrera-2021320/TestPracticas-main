import React, { useState, useEffect } from 'react'
import axios from "axios";

function TableVehiculos() {

<<<<<<< HEAD
  const [cosa, setCosa] = useState([]);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('')
  const [fechaCompra, setFechaCompra] = useState('')
  const [selectedItemId, setSelectedItemId] = useState(null);
=======
  const [data, setData] = useState([]);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('')
  const [fechaComrpa, setFechaCompra] = useState('')

>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get('http://localhost:8080/api/vehiculo/vehiculo');
      setCosa(response.data);
=======
      const response = await axios.get('http://localhost:8080/api/vehiculo/ver');
      setData(response.data);
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


<<<<<<< HEAD
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/vehiculo/vehiculo', {
        marca,
        modelo,
        año,
        fechaCompra
      });
      console.log('Vehiculo Agregado:', response.data);
      setCosa([...cosa, response.data]);
=======
  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/vehiculo/agregar', {
        marca,
        modelo,
        año,
        fechaComrpa
      });
      setData([...data, response.items]);
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
      setMarca('');
      setModelo('');
      setAño('');
      setFechaCompra('');
    } catch (error) {
<<<<<<< HEAD
      console.error('Error al Mandar Dato:', error);
=======
      console.error('Error adding item:', error);
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
    }
  };


<<<<<<< HEAD
  const updateItem = async (id) => {

    try {

      await axios.put(`http://localhost:8080/api/vehiculo/vehiculo/${id}`, {
        marca,
        modelo,
        año,
        fechaCompra
      });

      fetchItems();
      setSelectedItemId(null);
      setMarca('');
      setModelo('');
      setAño('');
      setFechaCompra('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };



  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/vehiculo/vehiculo/${id}`);
=======
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/vehiculo/${id}`);
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
      fetchItems(); // Actualizar la lista de elementos después de la eliminación
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

<<<<<<< HEAD
  return (
    <>


      <div>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Agregar Vehiculo
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Formulario */}
                <form className="row g-5 needs-validation" onSubmit={addItem}>
                  <div className="col-md-8">
                    <label htmlFor="validationCustom01" className="form-label">Marca </label>
                    <input
                      type="text"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                    />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="validationCustom02" className="form-label">Modelo</label>
                    <input
                      type="text"
                      value={modelo}
                      onChange={(e) => setModelo(e.target.value)}
                    />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="validationCustomUsername" className="form-label">Año</label>
                    <div className="input-group has-validation">
                      <input
                        type="number"
                        value={año}
                        onChange={(e) => setAño(e.target.value)}
                      />                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Fecha de Compra</label>
                    <input
                      type="datetime-local"
                      value={fechaCompra}
                      onChange={(e) => setFechaCompra(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button data-bs-dismiss="modal" className="btn btn-success" type="submit">Añandir Vehiculo</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h1>Datos</h1>
        <div>
=======


  return (
    <>
      <div>
        <h1>Datos</h1>
        <div>
          <h2> Agregar Nuevo Item</h2>
          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={e => setMarca(e.target.value)}
          />
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={e => setModelo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Año"
            value={año}
            onChange={e => setAño(e.target.value)}
          />
          <input
            type="date"
            placeholder="Fecha Compra"
            value={fechaComrpa}
            onChange={e => setFechaCompra(e.target.value)}
          />

          <button onClick={addItem}>Add Item</button>

        </div>
        <div>
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
          <table className="table">
            <thead>
              <tr >
                <th scope="col"> # </th>
                <th scope="col"> Marca</th>
                <th scope="col"> Modelo</th>
                <th scope="col"> Año </th>
                <th scope="col"> Fecha</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {cosa.map(datos => (
=======
              {data.map(datos => (
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
                <tr key={datos._id}>
                  <td>{datos._id}</td>
                  <td>{datos.marca}</td>
                  <td>{datos.modelo}</td>
                  <td>{datos.año}</td>
<<<<<<< HEAD
                  <td>{datos.fechaCompra}</td>
                  <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                      Editar
                    </button>

                    <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModal" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateModal">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            {/* Formulario */}
                            <form className="row g-5 needs-validation" onSubmit={updateItem}>
                              <div className="col-md-8">
                                <label htmlFor="validationCustom01" className="form-label">Marca </label>
                                <input
                                  type="text"
                                  value={marca}
                                  onChange={(e) => setMarca(e.target.value)}
                                />
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </div>
                              <div className="col-md-5">
                                <label htmlFor="validationCustom02" className="form-label">Modelo</label>
                                <input
                                  type="text"
                                  value={modelo}
                                  onChange={(e) => setModelo(e.target.value)}
                                />
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </div>
                              <div className="col-md-5">
                                <label htmlFor="validationCustomUsername" className="form-label">Año</label>
                                <div className="input-group has-validation">
                                  <input
                                    type="number"
                                    value={año}
                                    onChange={(e) => setAño(e.target.value)}
                                  />                      <div className="invalid-feedback">
                                    Please choose a username.
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label htmlFor="validationCustom03" className="form-label">Fecha de Compra</label>
                                <input
                                  type="datetime-local"
                                  value={fechaCompra}
                                  onChange={(e) => setFechaCompra(e.target.value)}
                                />
                                
                              </div>
                              <div className="col-12">
                                <button className="btn btn-info" onClick={() => updateItem(datos._id)}>Edit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>


                  </td>
                  <td>
                  
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ModalEliminar">
                      Eliminar
                    </button>

                    <div className="modal fade" id="ModalEliminar" tabIndex="-1" aria-labelledby="ModalEliminar" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Advertencia</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Estas Seguro de Eliminar Este dato ?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button data-bs-dismiss="modal" className="btn btn-danger" onClick={() => deleteItem(datos._id)}>Eliminar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>

=======
                  <td>{datos.fecha}</td>
                  <td><button>Editar</button></td>
                  <td><button onClick={() => deleteItem(datos._id)}>Delete</button></td>
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </>
  )
}

export default TableVehiculos