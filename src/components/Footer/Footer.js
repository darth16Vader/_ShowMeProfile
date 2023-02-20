import React from 'react';
import './Footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center align-self-center'>
                        <div className='txt-big txt-contact'>Contact me<span className='txt-green'>.</span></div>
                        <div className='details'><i className='fa-solid fa-envelope txt-green'></i> alvin16paala@gmail<span className='txt-green'>.</span>com</div>
                        <div className='details'><i className='fa-solid fa-mobile txt-green'></i> (+63) 935-283-8741</div>
                        <a className='details mt-5' href='#one'><i className='fa-solid fa-chevron-up text-white'></i></a>
                        <hr />
                        <p>© 2022 | Alvin Paala</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;