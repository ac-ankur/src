import React from 'react';
import './CSS/home.css'
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';


const Work = () => {
    return (
        <div class="services indexh">
         <div class="container indexc">
            <div class="row indexr">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2 class="yellowh"> <span class="yellow">How We Works</span><br/><span class="yellow1"></span></h2>
                  </div>
               </div>
               <div class="col-md-2 col-sm-6 indexhow">
                  <div id="ho_color" class="services_main box">
                     <i><img src={icon1} alt="#"/></i>
                     <h3 class="indexbtnh"><button class="indexbtn">Step 1</button>Register for free</h3>
                     <p>Use your email id to create your login for free, on our website to check the best rates
                     </p>
                  </div>
               </div>
               <div class="col-md-2 col-sm-6">
                  <div id="ho_color" class="services_main box">
                     <i><img src={icon2} alt="#"/></i>
                
                     <h3 class="indexbtnh"><button class="indexbtn">Step 2</button>Submit User Details</h3>
                     <p class="indexstep">Follow simple 4 steps to Send Money: 1. Student details 2. Sender details 3. Beneficiary details and 4. Confirm to initiate your Transaction.
                     </p>
                  
                  </div>
               </div>
               <div class="col-md-2 col-sm-6">
                  <div id="ho_color" class="services_main box">
                     <i><img src={icon3} alt="#"/></i>
                     
                     <h3  class="indexbtnh"><button class="indexbtn">Step 3</button>KYC verification</h3>
                     <p class="indexstep">Upload your KYC document as part of RBI regulation and a necessary step to make a successful Transaction. Details of Payer/ Payee to be submitted - Address Proof/ ID proof as a mandatory check.
                     </p>
                    
                  </div>
               </div>
               <div class="col-md-2 col-sm-6">
                  <div id="ho_color" class="services_main box">
                     <i><img src={icon4} alt="#"/></i>
                     
                     <h3  class="indexbtnh"><button class="indexbtn">Step 4</button>LRS Declaration & Payment</h3>
                     <p class="indexstep">Mention the Source of fund, Purpose of Fund and Make money transfer to our Escrow account before it is late and rates are high afterwards
                     </p>
                    
                  </div>
               </div>
               <div class="col-md-2 col-sm-6">
                  <div id="ho_color" class="services_main box">
                     <i><img src={icon5} alt="#"/></i>
                     
                     <h3  class="indexbtnh"><button class="indexbtn">Step 5</button>Early bird Discount</h3>
                     <p class="indexstep">Instant Discount on Transactions and Earn with every successful Referral.
                     </p>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default Work;