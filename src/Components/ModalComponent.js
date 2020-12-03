import React, { Component } from "react";
import ModalVideo from 'react-modal-video';

class ModalComponent extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Ver</button>
      </React.Fragment>
    )
  }
}
export default ModalComponent;
