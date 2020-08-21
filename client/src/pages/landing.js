import React, { Component } from "react";
import Modal from '../components/Modal/index';
import PatientForm from '../components/form';
 
class Landing extends Component {
    render() {
      return (
        <div className="App">
            <Modal>
              <div 
                  style={{color:'black'}}
              >
                The Best Has Happened To ME
              </div>
              <PatientForm />
            </Modal>
        </div>
      );
    }
  }
  
  export default Landing;