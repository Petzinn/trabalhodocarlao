import { useState } from "react"
import React from "react";
 
function Cadastro({addAnimal}){
    const [descricao, setDescricao] = useState('');
 
    const enviarDados = (e) => {
        e.preventDefault();
      //alert("Descricao: " + descricao)
 
      if(!descricao) return;
 
      addAnimal(descricao)
      //linpa o valor da variavel
      setDescricao('');
     
    }
 
    return (
        <>
        <div className="cadastrar">
            <form onSubmit={enviarDados}>
            <input type="text" value={descricao}
             onChange={(e) => setDescricao(e.target.value)} placeholder="informe a descrição do Animal" />
            <button className="botaoCadastrar" type="submit" >Cadastrar Animal</button>
            </form>
           </div>
 
          </>
         
    )
}
export default Cadastro