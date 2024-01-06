import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{

        box-sizing: border-box;
        font-family: 'Poppins', Sans-Serif;
        background-color: #f2f2f2;
    }

    img{
        padding: 25px;
        width: 150px;
        height: 100px;
    }
`

export default Global