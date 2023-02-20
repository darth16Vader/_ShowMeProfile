import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import React from 'react';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';
import Footer from './components/Footer/Footer';

function App(){
    return (
        <div>
            <main className='shadow'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            </main>
            <Footer />
        </div>
    )
}

export default App;