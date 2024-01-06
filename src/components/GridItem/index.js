import React from "react"
import * as C from "./styles"

const GridItem = (item) => {
    return(
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item}</C.Td>
            {/*<C.Td>{item.expense ? ()}</C.Td>*/}
        </C.Tr>
    )
}

export default GridItem