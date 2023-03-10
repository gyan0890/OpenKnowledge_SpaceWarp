import './styles/Home.css';
import { useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <h1>Join Us</h1>
      <div className='SignIn'>
        <button className='SignIn-1' onClick={() => navigate('/learner') }>Sign In</button>
        <button className='SignIn-2' onClick={() => navigate('/org') }>Organisation Sign In</button>
      </div>
    </div>
  );
}

export default Home;