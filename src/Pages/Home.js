import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import MainContentHome from '../Components/MainContentHome';
import MyProjects from '../Components/MyProjects';

function Home() {
  return (
    <div>
      <Header />
      <MainContentHome />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default Home;
