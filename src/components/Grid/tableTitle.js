import React from "react";
import { useState } from "react";
import * as C from './styles'
import Modal from '../Modal/Modal'
import Info from '../Modal/info_basicas'

const HeaderTitle = () =>{

    const [openModal, setOpenModal] = useState(false)
    return(
        <>
        <C.HeaderTitle>Listagem de Pacientes</C.HeaderTitle>
        <C.Input type="text" name="name" placeholder="Pesquisar"/>
        <C.Button onClick={() => setOpenModal(true)}>Adicionar Paciente</C.Button>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            <Info />
        </Modal>
        </>
    )
}

export default HeaderTitle