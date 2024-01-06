import React from "react";


const Info = () =>{
    return(
        <div>
            <label>
                Paciente:
            </label>
            <input placeholder="Digite"></input>
            <label>
                Apelido:
            </label>
            <input placeholder="Digite"></input>
            <label>
                Nacionalidade:
            </label>
            <input placeholder="Digite"></input>
            <label>
                Nascimento:
            </label>
            <input type="date"></input>
            <label>RG</label>
            <input placeholder="Digite"></input>
            <label>
                Gênero:
            </label>
            <select>
                <option value=""></option>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
            <label>Estado Civil:</label>
            <select>
                <option value=""></option>
                <option>Solteiro(a)</option>
                <option>Casado(a)</option>
                <option>Viuvo(a)</option>
            </select>
            <label>Observações adicionais</label>
            <textarea placeholder="Digite"></textarea>
        </div>
    )
}

export default Info