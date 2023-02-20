import React from 'react';
import './SectionThree.scss';

const sectionThree = () => {
    return(
        <section className='sectionThree'>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-12 text-center align-self-center'>
                        <div className='txt-big txt-footer'>Recent Works<span className='txt-green'>.</span></div>
                    </div>

                    <div className='col-sm-12 col-md-8'>
                        <div className='img-qnalysis tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>Qnalysis<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>An advertising company website displaying of product and services. A guest can inquire of using contact form. It is a responsive site compatible for pc, tablet and phone.</div>
                            <a className='clickme' href='https://qnalysis-ph.com' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Visit site</a>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-jpcasino tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>JP Casino Pro<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>Is a website to help customer how casino works and how you can pay using credit card, japan bank and crpytocurrency. It has en and jp language for user.</div>
                            <a className='clickme' href='https://jpcasinopro.com/' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Visit site</a>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-clubh tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>ClubH<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>This was develop using wordpress and elementor pro. It has google map for the location of client.</div>
                            <a className='clickme' href='https://clubh.ph' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Visit site</a>
                        </div>
                    </div>
                </div>
                
                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-slogin tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>Recruit Slogin<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>It is a recruitment site where applicant can see the benefits inside of the company.
                            The website shows the possible salary, mission of the company and the employees. When applicant finish to fill up the form,
                            it will send a test to the applicants email.
                            </div>
                            <a className='clickme' href='https://recruit.slogin.io/' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Visit site</a>
                       </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-crypto tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>Cryptograph<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>
                            This is a japanese base website for crypto currency, I only modified the design and content, it is develop in wordpress and elementor pro.
                            </div>
                            <a className='clickme' href='https://cryptograph.finance/' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Visit site</a>
                       </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-petacoin tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>Petacoin<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>This is a japanese based website for payment gateway. Client use this to send the information of their credit card.</div>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-proshop tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>Proshop<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>The Proshop is an e-commerce(online shopping), I just created it for learning deep in redux. User can add, edit, delete the items, can signin or register for user and it has ratings.</div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-8 mt-4 dontshow-sp'>
                        <div className='img-proshop2 tzoid shadow'></div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <div className='img-itec tzoid shadow'></div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                       <div className='box-works'>
                            <div className='bw-title'>Itec<span className='txt-green'>.</span></div>
                            <div className='p-desc txt-cloud'>An advertising company website that has a product for selling and also a guest can inquire for the price and availability of the item. It is also responsive website for phone compatibility.</div>
                            <a className='clickme' href='https://i-tecsystems.net/' target='_blank' rel='noreferrer'><i className="fa-solid fa-link"></i> Visit site</a>
                        </div>
                    </div>
                </div>

                <div className='row mb-5 preview'>
                    <div className='col-12 align-self-center'>
                        <div className='txt-big txt-recent'>Other Projects<span className='txt-green'>.</span></div>
                        {/* <div className='p-desc txt-cloud'>- I have challenging position doing websites, <br />creating excellent user friendly design and highly responsive websites. </div> */}
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='img-toolalgo small-preview shadow'></div>
                        <div className='title-preview'>Tool Algo Monitoring System</div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='img-oven small-preview shadow'></div>
                        <div className='title-preview'>Oven Monitoring System</div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='img-psms small-preview shadow'></div>
                        <div className='title-preview'>Project Services System</div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='img-bottleline small-preview shadow'></div>
                        <div className='title-preview'>Bottle Line Efficiency</div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='img-myrecipe small-preview shadow'></div>
                        <div className='title-preview'>MyRecipe</div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default sectionThree;