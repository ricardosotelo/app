import { useState } from 'react';
import './ItemCount.css';


function ItemCount (){
    
    
    
 const [valoraciones, setValoraciones]= useState(0);

    const decrement = () =>{
    if (valoraciones >0 )
        if (valoraciones <=5)
    setValoraciones (valoraciones-1);
    }
    const increment = () => {

    if (valoraciones<5) 
    
    setValoraciones (valoraciones +1);
    
    }

    const Alert = () => {

      alert ("Ud a comprado,"+valoraciones+",unidades");
      

    }
    return(
    <div class ="container1">
        
        <button onClick = {increment}>+</button>
    
        <p>{valoraciones}</p>
    
        <button onClick = {decrement}>-</button>
   

        <button onClick = {Alert} > Add to car </button>
       
    </div>
    )
    }
 
export default ItemCount;