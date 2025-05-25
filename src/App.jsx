import React, {useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {

  // React state to control content visibility
  let [showContent, setShowContent] = useState(false);
      useGSAP(function(){
        //Create a GSAP timeline for chaining multiple animations
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
          rotate: 30,
          duration: 2,
          ease: "Power4.easeInOut", 
          transformOrigin: "50% 50%" 
        })
        .to(".vi-mask-group",{
          scale: 10,
          duration: 2,
          delay: -1.8, 
          ease: "Expo.easeInOut", 
          transformOrigin: "50% 50%",
          opacity: 0, 

          onUpdate: function(){
            if(this.progress() >= 0.9){
              document.querySelector(".svg").remove();
              setShowContent(true);
              this.kill(); 
            }
          }
        })
      });

  return (
    <>

      {/* // PAGE - 01 */}

        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black"/>
            <g className="vi-mask-group">
              <text 
              x ="50%"
              y="50%"
              fontSize="250"
              textAnchor="middle"
              fill="white"
              dominantBaseline="middle"
              fontFamily="Arial Black"
              >
              VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">



          <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
            <div className="logo flex flex-row gap-6">
              <div className="lines flex flex-col gap-[5px]">
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
              </div>
              <h3 className="text-3xl -mt-[8px] leading-none text-white">Rockstar</h3>
            </div>
          </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img className="absolute top-0 left-0 w-full h-full object-cover" src="./sky.png"/>
              <img className="absolute top-0 left-0 w-full h-full object-cover" src="./bg.png"/>

              <div className="text absolute text-white top-20 left-1/2 -translate-x-1/2">
              <h1 className="text-9xl -ml-20">grand</h1>
              <h1 className="text-9xl ml-15">theft</h1>
              <h1 className="text-9xl -ml-26">auto</h1>
              </div>

              <img className="absolute -bottom-[50.8%] left-1/2 -translate-x-1/2 scale-[0.8]" src="./girlbg.png"/>

              
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className="text-1xl font-[arial]">Scroll Down</h3>
              </div>
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[58px]" src="./ps5.png"></img>
            </div>
          </div>

          {/* // PAGE - 02 */}

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="img relative w-1/2 h-full">
                <img
                  className="absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-6xl">Stay Grounded, </h1>
                <h1 className="text-6xl mt-3">Run Wild</h1>

                <div className="w-[400px] mt-10">

                <p className="mt-10 text-1xl font-sans hover:text-pink-300">
                  GTA 6, the most anticipated game in Rockstar’s history, promises stunning
                  graphics, a sprawling open world, dynamic storylines, and revolutionary
                  gameplay mechanics that will redefine the next generation of gaming.
                </p>
                <p className="mt-3 text-1xl max-w-sm font-sans hover:text-yellow-200">
                  GTA 6 brings players into a massive, vibrant city inspired by modern-day
                  Miami. With upgraded physics, deep character arcs, and smart NPCs, it delivers
                  immersive chaos, thrilling heists, and freedom like never before. Rockstar
                  sets a new standard yet again with jaw-dropping realism and depth.

                </p>
                <button className="bg-yellow-500 px-10 py-2 text-black mt-10 text-4xl rounded-sm hover:scale-120 transition-transform ease-in-out duration-300">
                  Download Now
                </button>
                </div>
              </div>
            </div>
          </div>

           {/* PAGE - 03 */}
              <div className="w-full h-screen flex items-center justify-center bg-black">
              <div className="center flex text-white w-full h-[80%]">
              <div className="image relative w-1/2 h-full group">
              <img
                src="./gta.png"
                alt="GTA"
                className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  scale-[0.6] grayscale
                  transition-all duration-500 ease-in-out
                  rounded-[2rem]
                  group-hover:scale-[0.7] group-hover:grayscale-0"
              />

            </div>
               <div className=" max-w-2xl h-full flex flex-col justify-center px-6">
                  <h1 className="text-5xl font-bold mb-4 text-yellow-100">Jason Duval</h1>
                  <p className="max-w-sm text-2xl mb-4 font-sans font-bold text-pink-300">
                        Jason wants an easy life, but things just keep getting harder.
                  </p>
                  <p className="text-lg text-#FFFFFF font-sans">
                        Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens,
                        he found himself in the Keys doing what he knows best—working for local drug runners. It might be time to try something new.
                  </p>
              </div>
          </div>
        </div>
        {/* // PAGE - O4 */}

          <div className="w-full h-screen flex items-center justify-center bg-black">
          <div className="flex items-center justify-center group">
          <img 
            src="./gun-man.png"
            className="
              grayscale
              transition-all duration-500 ease-in-out
              rounded-[2rem]
              w-[80vw] h-[80vh] object-contain
              group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
      </div>


        {/* // PAGE - 05  */}
          
        <div className="w-full h-screen flex items-center justify-center bg-black text-white text-9xl">
        <h2 className="
             text-9xl font-bold
             text-white
             bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
             bg-clip-text
             transition-all duration-500
             hover:text-transparent
             leading-[1.2]
        ">
        Adiós</h2>
        </div>
      </div>)}
    </>
  )
}

export default App;
