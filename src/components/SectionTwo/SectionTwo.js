import React from 'react';
import './SectionTwo.scss';

const sectionTwo = () => {
    return(
        <section className='sectionTwo' id='two'>
            <div className='container'>
                <div className='txt-big text-center text-white txt-whatImGreat'>What I Am Great At<span className='txt-green'>.</span></div>
                <div className='txt-cloud para-desc mb-5'>- My main experience is in front-end development but I also have passion in back-end, I believe having experience in both design and development allows for making the most optimal user experiences.</div>
                <div className='row'>
                    <div className='col-6 col-sm-6 col-md-3 text-white mb-3'>
                        <div className='box-proj text-center shadow'>
                            <i className='fa-solid fa-pen-nib mt-5'></i>
                            <hr />
                            <p className='mt-4 mb-1'>UI/UX Design</p>
                            <span>12 projects</span>
                        </div>
                    </div>

                    <div className='col-6 col-sm-6 col-md-3 text-white mb-3'>
                        <div className='box-proj text-center shadow'>
                            <i className='fa-solid fa-code mt-5'></i>
                            <hr />
                            <p className='mt-4 mb-1'>web development</p>
                            <span>54 projects</span>
                        </div>
                    </div>

                    <div className='col-6 col-sm-6 col-md-3 text-white mb-3'>
                        <div className='box-proj text-center shadow'>
                            <i className='fa-solid fa-magnifying-glass mt-5'></i>
                            <hr />
                            <p className='mt-4 mb-1'>web research</p>
                            <span>58 projects</span>
                        </div>
                    </div>

                    <div className='col-6 col-sm-6 col-md-3 text-white mb-3'>
                        <div className='box-proj text-center shadow'>
                            <i className='fa-solid fa-globe mt-5'></i>
                            <hr />
                            <p className='mt-4 mb-1'>known sites</p>
                            <span>100+ projects</span>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-6 col-sm-6 col-md-4 box-info text-white text-center'>
                        <div className='my-5'>
                            <span>4 +</span>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 box-info text-white text-center'>
                        <div className='my-5'>
                            <span>20 +</span>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 box-info text-white text-center'>
                        <div className='my-5'>
                            <span>500 +</span>
                            <p>Design Tools</p>
                        </div>
                    </div>
                </div>

                <div className='mt-3 icons txt-cloud'>
                    <ul>
                        <li><i className="fa-brands fa-html5"></i></li>
                        <li><i className="fa-brands fa-css3"></i></li>
                        <li><i className="fa-brands fa-sass"></i></li>
                        <li><i className="fa-brands fa-js"></i></li>
                        <li><i className="fa-brands fa-react"></i></li>
                        <li><i className="fa-brands fa-php"></i></li>
                        <li><i className="fa-brands fa-bootstrap"></i></li>
                        <li><i className="fa-brands fa-wordpress"></i></li>
                        <li><i className="fa-brands fa-linux"></i></li>
                        <li><i className="fa-brands fa-ubuntu"></i></li>
                        <li><i className="fa-brands fa-github"></i></li>
                        <li><i className="fa-brands fa-stack-overflow"></i></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default sectionTwo;