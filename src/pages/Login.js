import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { signInWithGoogle } from "../Firebase";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate('/deposit');
  }

  return (
    <>
      <Navbar />
      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button        className="btn"
        onClick={handleSignInWithGoogle}>
          Sign in with Google
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Login;
