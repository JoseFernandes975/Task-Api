import { useEffect, useState } from 'react';
import * as service from '../../services/request';
import './styles.css';
import { UserDTO } from '../../models/user';
import CardUser from '../CardUser';

export default function SearchBar(){
 
   const [inputName, setInputName] = useState<string>();

   const [user, setUser] = useState<UserDTO>();
   
   function handleInputName(event: any){
    setInputName(event.target.value);
   }

   function handleRequisition(event: any){
    event.preventDefault();
    service.findByUser(String(inputName)).then(result => {
      console.log(result.data);
      setUser(result.data);
    }).catch(() => {
      console.log("Erro ao buscar usuário");
      setUser(undefined);
    });
   
   }

   useEffect(() => {
     const error = document.getElementById("error-user");
     error?.classList.add("disable")
   }, []);


    return(
      <>
       <div className='jf-search-bar' >
        <h1 className='jf-title-bar'>Encontre um perfil Github</h1>
        <form >
            <input type="text" placeholder='Usuário Github' onChange={handleInputName} />
        </form>
       <button className='btn-blue' type='submit' onClick={handleRequisition}>Encontrar</button>
      </div> 

      {
        user 
         ? <CardUser user={user} />
         : <h1 id='error-user'>Erro ao buscar usuário</h1>
      }
      </>
    );
}