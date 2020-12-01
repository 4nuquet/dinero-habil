import React from 'react'
import './Modal.scss'
import '../../pages/Affiliatum/Theme.css'

const Modal = (props) => {
  const { setModal } = props;

  return (
    <div className='backdrop d-flex align-items-center justify-content-center' hidden={false}>
      <div className='card bg-black'>
        <div className='card-body'>
          <h2 className='text-white'>¿Estás dispuesto a TRANSFORMAR tu manera de generar ingresos por internet?</h2>
          <div class="cta-holder mt-4 text-center">
            <button class="btn btn-primary btn-cta shadow animate__animated animate__heartBeat animate__slower animate__infinite infinite" onClick={() => setModal()}><h5 >VAMOS CON TODA</h5></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal
