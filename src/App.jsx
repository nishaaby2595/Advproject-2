import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Modal from './Modal';
import { useState } from 'react';



function App() {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div>
     <Header />
     <Hero />
     <Footer />


    </div>
  );
}

export default App;