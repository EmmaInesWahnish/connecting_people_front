import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// CONTEXTS
import { useGlobalContext } from '../contexts';

// COMPONENTS
import { TopNavbar, Sidebar } from '../components';

// PAGES
import { Products } from '../pages';


function Home() {
  const { userData } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.name) {
      console.log("Not authenticated");
      navigate("/");
    }
  }, []);

  return (
    <>

      <Menu />

      <div className="row m-0">
        <Sidebar />
        <Products />
      </div>

    </>
  )
}

export default Home
