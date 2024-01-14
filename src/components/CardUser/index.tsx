import './styles.css';
import { UserDTO } from '../../models/user';

type Props ={
  user: UserDTO;
}

export default function CardUser({ user }: Props){
  return(
     <div className='jf-card-container'>

      <img src={user.avatar_url} alt="Foto de Perfil" />

      <div className='jf-card-information-user'>
       <h2>Informações</h2>

       <div className='jf-container-fields'>

        <div className='jf-field'>
         <div className='jf-name-field'>Perfil: <span className='jf-value-field jf-blue'>{user.url}</span></div>
        </div>
        <div className='jf-field'>
        <div className='jf-name-field'>Seguidores: <span className='jf-value-field'>{user.followers}</span></div>
        </div>
        <div className='jf-field'>
        <div className='jf-name-field'>Localidade: <span className='jf-value-field'>{user.location}</span></div>
        </div>
        <div className='jf-field'>
        <div className='jf-name-field'>Nome: <span className='jf-value-field'>{user.name}</span></div>
        </div>

       </div>

      </div>
     </div>
  );
}