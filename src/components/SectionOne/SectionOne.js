import React from 'react';
import './SectionOne.scss';
import img_alvin from '../assets/img/alvin.png'

const sectionOne = () => {
    return (
        <section className='sectionOne' id='one'>
            <div className='container'>
                <div className='row'>
                    <div className='floating-bg-txt'>
                        PORT<br />FOLIO
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-3 align-self-center dev-name'>
                        <span className='txt-big'>Alvin Paala<span className='txt-green'>.</span><br /></span>
                        <div className='v-line mt-2'></div>
                        <ul className='ps-0'>
                            <a href='https://www.facebook.com/Alvin.S16.Paala' target='_blank' rel="noreferrer"><li><i className='fa-brands fa-facebook-f'></i></li></a>
                            <a href='https://www.instagram.com/vnsmk.05' target='_blank' rel="noreferrer"><li><i className='fa-brands fa-instagram'></i></li></a>
                            {/* <li><i className='fa-brands fa-linkedin'></i></li> */}
                            <a href='https://www.t.me/+639352838741' target='_blank' rel="noreferrer"><li><i className="fa-brands fa-telegram"></i></li></a>
                        </ul>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 align-self-end img-item position-relative'>
                        <img className='img-alvin' src={img_alvin} width="100" height="50" alt='' />
                        <div className='img-bg'></div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4 align-self-center job-desc'>
                        <div className='intro txt-green'>- Introduction<br /></div>
                        <div className='txt-big mb-2'>Front-end <br />Web Developer<br /></div>
                        <p className='desc'>I'm a industrious person and dedicated profession front-end developer/user interface designer. I always continue to learn how to improve the processes and practice with new ideas of programming, concept and other methods.</p>
                        <a className='btn btn-secOne1 m-2 shadow' target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1tlBu285PT0UXl9pLIUYWTSaIMTVc-xN1/view?usp=sharing'>View resume</a>
                        <a className='btn btn-secOne2 m-2 shadow' href='#two'>Know more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default sectionOne;