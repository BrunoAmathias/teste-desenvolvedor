import React from 'react'
import { useContext } from 'react';
import { Context } from '../contexto/Context';
import './Button.style.css'

const Button = () => {

  const {nome, setNome} = useContext(Context);
  const {email, setEmail} = useContext(Context);
  const {tel, setTel} = useContext(Context);
  const {cpf, setCpf} = useContext(Context);
  const {selectedPaises, setSelectedPaises} = useContext(Context);
  const {selectedCidades, setSelectedCidades} = useContext(Context);
  const {setInvalido} = useContext(Context)


  return (
    <div>
        <button onClick={putOnData}>Adicionar</button>
    </div>
  )
  
 


  function putOnData (){
    if (nome.length >0 && email.length >0 && cpf.length===11 && tel.length===11 && selectedPaises.length > 0 && selectedCidades.length >0) {
  

      setNome("")
      setEmail("")
      setTel("")
      setCpf("")
      setSelectedPaises([])
      setSelectedCidades([])
      setInvalido(true)
      alert('Informações adicionadas')
      console.log(nome)
      console.log(email) 
      console.log(tel)
      console.log(cpf)
      console.log(selectedPaises)
      console.log(selectedCidades)
     
    }else{
      setInvalido(false)
      alert('Todos os campos são obrigatórios')
    }
   
    }
  
}

export default Button