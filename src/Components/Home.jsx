import React, { useState } from 'react'
import {motion,AnimatePresence} from "framer-motion"
import doctor from "../Images/doctor.png"

function Home() {
  const[isVisible,setIstVisible]=useState(true)
  
  return (
    <>
    <div className="home d-flex justify-content-center align-items-center flex-column">
    </div>
          <br />
          <br />
      <Services />
      <br />
      <br />
        <About/>
        <br />
        <br />
        <Contact/>
        <br />
        <br />
      </>
  );
}

export default Home


function Services(){
  return <>
  <h2 className='text-center'> Our Services</h2>
  <motion.div className="container d flex overflow-hidden"
  
  >
  <div className='row justify-content-around overflow-hidden'>

  <motion.div class="card text-center " style={{width: "18rem"}}
  initial={{
    opacity:0,
    x:-100,
    y:-100
  }}
  whileInView={{
    opacity:1,
    x:0,
    y:0
  }}
  animate={{
   
  }}
  transition={{
    duration: 2,
    ease: "backInOut",
  }}
  >
  <i class="fa-solid fa-user-doctor serviceIcon mt-2"></i>
            <div class="card-body">
      <p class="card-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis provident eligendi eos.
      </p>
    </div>
  </motion.div>
  <motion.div class="card text-center " style={{width: "18rem"}}
  initial={{
    opacity:0,
    
    y:-100
  }}
  whileInView={{
    opacity:1,
    
    y:0
  }}
  animate={{
   
  }}
  transition={{
    duration: 2,
    ease: "backInOut",
  }}
  
  >
  <i class="fa-solid fa-hand-holding-droplet serviceIcon mt-2"></i>
            <div class="card-body">
      <p class="card-text">
        Lorem ipsum dolor sit amet.consectetur adipisicing elit. Reiciendis provident eligendi eos.
      </p>
    </div>
  </motion.div>
  <motion.div class="card text-center " style={{width: "18rem"}}
   initial={{
    opacity:0,
    x:100,
    y:-100
  }}
  whileInView={{
    opacity:1,
    x:0,
    y:0
  }}
  animate={{
   
  }}
  transition={{
    duration: 2,
    ease: "backInOut",
  }}
  >
  <i class="fa-solid fa-heart-pulse serviceIcon mt-2"></i>
            <div class="card-body">
      <p class="card-text">
        Lorem ipsum dolor sit amet.consectetur adipisicing elit. Reiciendis provident eligendi eos.
      </p>
    </div>
  </motion.div>

  </div>
</motion.div>
</>
}

function About(){
return(<>
<h2 className="text-center mt-5">About Us</h2>
      <div className="btmBorder"></div>
      <div className="about container">
        <div className="row justify-content-between">
          <motion.div className="col-lg-6 col-md-12 text-center align-self-center"
          initial={{
            opacity:0,
            x:-400,
           
          }}
          whileInView={{
            opacity:1,
            x:0,
            y:0
          }}
          animate={{
           
          }}
          transition={{
            duration: 2,
            ease: "backInOut",
          }}>
          Im doctor 7masa , el 3bd llah msk el 7aded tnah . Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa, suscipit dicta ea, dolorum aliquam officia rem sapiente ullam harum animi, quia dolores quos aspernatur architecto laudantium consectetur. Sint, architecto tempora dolore quod rem ad molestias sit doloribus porro optio distinctio qui possimus explicabo facilis quia totam, animi beatae dicta sed temporibus laborum aliquid quaerat ipsum. Odio est consequuntur illo voluptas tempora itaque, sit similique? Architecto quo saepe error nisi veritatis rerum quae non laudantium, ullam quis delectus repellendus libero harum, omnis commodi quam culpa, ipsa numquam accusamus fuga eaque eligendi aut. Vel alias odio, autem mollitia distinctio modi? Quasi?

          </motion.div>
          <motion.div className="col-lg-4 col-md-12 bg align-self-center"
          initial={{
            opacity:0,
            x:400,
           
          }}
          whileInView={{
            opacity:1,
            x:0,
            y:0
          }}
          animate={{
           
          }}
          transition={{
            duration: 2,
            ease: "backInOut",
          }}>
            <img src={doctor} alt="" srcset="" className="w-100 " />
          </motion.div>
        </div>
      </div>



</>

)
}

function Reviews(){

}

function Contact(){
return(<>
<section class="contact mt-5  pt-3" id="contact">
        <h2 class="text-center mt-5">Contact</h2>
        <div class="btmBorder"></div>
        <br />
        <br />
        <div class="container d-flex justify-content-around flex-wrap">
          <div class="contactDetails  col-sm-12 col-lg-6 align-self-center ">
            <div class="mb-3 w-75">
              <i class="fa-solid fa-phone"></i>
              <br />
              <a href="tel:0504906351" className="text-decoration-none">
                Tel: 07775000
              </a>
              <p class="d-inline-block"> </p>
              <br />
              <a href="tel:01011466330" className="text-decoration-none">
                Mobile: 07775000
              </a>
              <p class="d-inline-block"> </p>
              <br />
              <a href="tel:01551936225" className="text-decoration-none">
                Mobile: 07775000
              </a>
              <p class="d-inline-block"> </p>
            </div>

            <div class="mb-4 w-75 ">
              <i class="fa-brands fa-facebook"></i>
              <br />
              <a
                class="text-decoration-none"
                href="https://www.facebook.com/profile.php?id=61550614966784"
              >
                Facebook Page
              </a>
            </div>
            <div class="mb-4 w-75 ">
              <i class="fa-solid fa-envelope"></i> <br />
              <a class="text-decoration-none">Email: Lorem, ipsum dolor.</a>
            </div>
            <div>
              <i class="fa-solid fa-map-location-dot w-75"></i>
              <br />
              <a href="https://maps.app.goo.gl/nLgkmeJJPyJZ1kNR8">
                <p class="d-inline-block">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
              </a>
            </div>
          </div>
          <br />
          <div class="map col-sm-12 col-lg-3 d-flex justify-content-center align-items-center">
            <div class="text-center mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13755.299673650403!2d31.180811038397923!3d30.4693967899052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7df5645a794dd%3A0xf23e10419a7decdf!2sFaculty%20of%20Computer%20and%20Artificial%20intelligence!5e0!3m2!1sen!2seg!4v1705135546528!5m2!1sen!2seg" 
                width="400"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
</>)
}

