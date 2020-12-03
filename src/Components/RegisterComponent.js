/*import React from "react";
import "./App.css";
import "./bootstrap-css-only/css/bootstrap.min.css";
import {
  table,
  Button,
  conteiner,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const datos = [{}];

class App extends React.Component {
  state = {
    datos: datos,
    form: {
      id: "",
      nombre: "",
      Correo: "",
      Telefono: "",
    },

    ModalInsertar: false,
    ModalEditar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  MostrarmodalInsertal = () => {
    this.setState({ ModalInsertar: true });
  };

  OcultalmodalInsertal = () => {
    this.setState({ ModalInsertar: false });
  };

  render() {
    return (
      <>
        <conteiner>
        
        
        
        
        
        </conteiner>
        {""}
        {/ * Esta es la ventana Modal para registro * /}{" "}
        <Modal isOpen={this.state.ModalInsertar}>
          {" "}
          {/* Este es el Header }{" "}
          <ModalHeader>
            <div>
              <h3> Agregar Algun Contacto </h3>{" "}
            </div>{" "}
          </ModalHeader>{" "}
          {/ * Este es un body * /}{" "}
          <ModalBody>
            <FormGroup>
              <label> Id: </label>{" "}
              <input
                className="form-control"
                name="Id"
                readOnly
                type="text"
                value={this.state.datos.length + 1}
              />{" "}
            </FormGroup>{" "}
            <FormGroup>
              <label> Nombre: </label>{" "}
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>{" "}
            <FormGroup>
              <label> Correo: </label>{" "}
              <input
                className="form-control"
                name="correo"
                type="E-mail"
                onChange={this.handleChange}
                required
              />
            </FormGroup>{" "}
            <FormGroup>
              <label> Telefono: </label>{" "}
              <input
                className="form-control"
                name="Telefono"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>{" "}
          </ModalBody>{" "}
          {/* Este es un Footer}{" "}
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.InsertarNuevoRegistro()}
            >
              Insectar{" "}
            </Button>{" "}
            <Button color="warning" onClick={() => this.OcultalmodalInsertal()}>
              Cancelar{" "}
            </Button>{" "}
          </ModalFooter>{" "}
        </Modal>{" "}
      </>
    );
  }
}

export default App;
*/