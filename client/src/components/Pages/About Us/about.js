import React from 'react'
import Header from '../../Nomal Header/Header/header'
import Footer from '../../Footer/footer'
import './about.css'
import Ravindu from "./profile/ravindu.png"
import Janith from "./profile/Janith.png"
import Denura from "./profile/Denura.png"
import Sudhari from "./profile/Sudhari.png"



export default function about() {
  return (
    <div className='about-us-main'>
        <Header/>
        
        <div className='about-us-body-box'></div>

        <div  className='about-us-body-main' >
            <div className='about-title'>Developer Team</div>
            <div className='about-us-body-2'>
                    <div class="about-card">
                        <img src={Ravindu} alt="Avatar" />
                        <div class="about-cart-container">
                            <h4><b>Ravindu Rasanga</b></h4>
                            <p>Software Developer</p>
                            <a href='https://ravindurasanga.web.app'><p>Portfolio</p></a>
                        </div>
                    </div>

                    <div class="about-card">
                        <img src={Sudhari} alt="Avatar" />
                        <div class="about-cart-container">
                            <h4><b>Sudhari Sandamini</b></h4>
                            <p>Software Developer</p>
                            <a href='https://sudhari.web.app'><p>Portfolio</p></a>
                        </div>
                    </div>

                    <div class="about-card">
                        <img src={Janith} alt="Avatar" />
                        <div class="about-cart-container">
                            <h4><b>Janith Dilshan</b></h4>
                            <p>Software Developer</p>
                            <a href='https://github.com/JanithDilsh'><p>Portfolio</p></a>
                        </div>
                    </div>

                    <div class="about-card">
                        <img src={Denura} alt="Avatar" />
                        <div class="about-cart-container">
                            <h4><b>Denura Mudalige</b></h4>
                            <p>Software Developer</p>
                            <a href='https://github.com/MudaligeDLM'><p>Portfolio</p></a>
                        </div>
                    </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}
