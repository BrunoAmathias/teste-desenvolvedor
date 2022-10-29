import React from 'react'
import DadosPessoais from ".//DadosPessoais";
import Destinointeresse from "./Destinointeresse";
import './Home.style.css'
import  Button  from './Button';

const Home = () => {
  return (<>
    <div className='container-dados-destino'>
        <DadosPessoais/>
        <Destinointeresse/>
    </div>
    <div className="container-btn">
      <Button/>
    </div>
    
    </>
  )
}

export default Home