import React, { Fragment } from 'react'
import './Destinointeresse.style.css'
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../contexto/Context';

const Destinointeresse = () => {

  const {selectedPaises, setSelectedPaises} = useContext(Context);
  const {selectedCidades, setSelectedCidades} = useContext(Context);
  const {country, setCountry} = useContext(Context)
  const {city, setCity} = useContext(Context)
  const {invalido} = useContext(Context)

  const paises = 
    country.map(paises=>{
        return({
            label: paises.name_ptbr,
            value: paises.code,
        }
        )
    })

    const cidades = 
    city.map(cidades=>{
        return({
            label: cidades.name,
            value: cidades.code,
        }
        )
    })
 
  
    
  
      useEffect(()=>{
        axios.get('https://amazon-api.sellead.com/country')
        .then(response =>{
          setCountry(response.data)
        })
        .catch(error => {
          console.log(error);
        })
  
      },[setCountry])
     
    
      useEffect(()=>{
        axios.get('https://amazon-api.sellead.com/city')
        .then(response =>{
          setCity(response.data)
        })
        .catch(error => {
          console.log(error);
        })
  
      },[setCity])

    
 

  return (
    <div className='DestinoInteresse'>
     <div className='container-select'>
     { country.length > 0 ?
         <div>
      <h2>Destino de interesse</h2>
      <div className='container-select'>
      <MultiSelect
      className={invalido ?'' :'select_obrigatorio'}
        options={paises}
        value={selectedPaises}
        onChange={setSelectedPaises}
        ClearSelectedIco={null}
        ClearIcon={true}
        labelledBy="Select"/>
       
        </div>
        <div className='container-select'>
        <MultiSelect
        className={invalido ?'select' :'select_obrigatorio'}
        options={cidades}
        value={selectedCidades}
        onChange={setSelectedCidades}
        ClearSelectedIco={null}
        ClearIcon={true}
        labelledBy="Select"/>
        </div>
    </div> : <h2>Carregando...</h2>
    }
       
        
       </div>
    </div>
  )
}

export default Destinointeresse