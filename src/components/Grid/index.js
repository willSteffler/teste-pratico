import React from "react";
import GridItem from '../GridItem'
import * as C from './styles'
import Header from './tableTitle'
import {HiArrowsUpDown} from 'react-icons/hi2'

const Grid = ({item, setItens}) =>{
    return(
        <C.Container>
            <C.Container>
                <Header />
            </C.Container>
            
            <C.Table>
                <C.Thead>
                    <C.Tr>
                        <C.Th>Nome <HiArrowsUpDown /></C.Th>
                        <C.Th>CPF <HiArrowsUpDown /></C.Th>
                        <C.Th>Data de Nascimento <HiArrowsUpDown /></C.Th>
                        <C.Th>E-mail <HiArrowsUpDown /></C.Th>
                        <C.Th>Cidade <HiArrowsUpDown /></C.Th>
                        <C.Th>Ações <HiArrowsUpDown /></C.Th>
                    </C.Tr>
                </C.Thead>
                <C.Tbody>
                    {item?.map((item, index) => (
                        <GridItem key={index} item={item} />
                    ))}
                </C.Tbody>
            </C.Table>
        </C.Container>
    )
}

export default Grid