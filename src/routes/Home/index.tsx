import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Home(){

  const navigate = useNavigate();

  function handleNextPage(){
    navigate('/findUser');
  }

  return(
    
    <main>
    <section>

      <h1 className='title-home'>Desafio Github API</h1>
      <h3 className='description-home'>DevSuperior - Escola de programação</h3>

      <button onClick={handleNextPage} className='btn-blue'>Começar</button>
  
    </section>
    </main>
  );
}