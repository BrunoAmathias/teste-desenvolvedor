import React from 'react'
import { useContext } from 'react';
import { Context } from '../contexto/Context';
import './DadosPessoais.style.css'
import InputMask from 'react-input-mask';



const DadosPessoais = () => {

  const {nome, setNome} = useContext(Context)
  const {email, setEmail} = useContext(Context);
  const {tel, setTel} = useContext(Context);
  const {cpf, setCpf} = useContext(Context);
  const {invalido} = useContext(Context)




  function changeNome(e) {
    setNome(e.target.value)
  }
  function changeEmail(e) {
    setEmail(e.target.value)
  }
  function changeTel(e) {
    setTel(e.target.value.replace(/[^0-9]/g, ''))
  }
  function changecpf(e) {
    setCpf(e.target.value.replace(/[^0-9]/g, ''))
   
  }


  return (
    <div className='DadosPessoais'>
      <h2>Dados pessoais</h2>
       <div className='container-input'>
        <label>
        
        <InputMask className={invalido ? 'input': 'input campo-obrigatorio'} value={nome} onChange={changeNome} placeholder='Nome' type="text" /> 
      
        </label>
        <label>
            <InputMask className={invalido ? 'input': 'input campo-obrigatorio'} value={email} onChange={changeEmail} placeholder='Email' type="email" />
        </label>
        <label>
            <InputMask className={invalido ? 'input': 'input campo-obrigatorio'} value={tel}  onChange={changeTel} mask="(99)99999-9999" placeholder='Telefone'/>
        </label>
        <label>
            <InputMask className={invalido ? 'input': 'input campo-obrigatorio'} value={cpf} onChange={changecpf} mask="999.999.999-99" placeholder='CPF'/>
        </label>  
       </div>
    </div>
  )
}

export default DadosPessoais