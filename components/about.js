import React from 'react'
import imgab from './images/about.png'
import './CSS/home.css'

const About = () => {
  return (
   //  <div class="about">
   //       <div class="container">
   //          <div class="row d_flex">
   //             <div class="col-md-12 col-lg-5">
   //                <div class="about_img">
   //                   <figure><img src={imgab} alt="#"/></figure>
   //                </div>
   //             </div>
   //             <div class="col-md-12 col-lg-7">
   //                <div class="titlepage">
   //                   <h2> <span class="yellow">ABOUT US</span><br/>Welcome TO CashFree</h2>
   //                   <p>We are here to enable students and their parents to seamlessly receive money across borders reducing cost and time to send money abroad.</p>
   //                   <a class="read_more" href="#">Read More</a>
   //                </div>
   //             </div>
   //          </div>
   //       </div>
   //    </div>

   <div class="about">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-12 col-lg-5">
                  <div class="about_img">
                     <figure><img src={imgab} alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-12 col-lg-7">
                  <div class="titlepage">
                     <h2> <span class="yellow">ABOUT US</span><br/>Welcome TO OUR "Company"</h2>
                     <p>We are here to enable students and their parents to seamlessly receive money across borders reducing cost and time to send money abroad.</p>
                     <a class="read_more" href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
     
  )
}

export default About;