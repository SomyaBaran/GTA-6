import React, {useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {

  // React state to control content visibility
  let [showContent, setShowContent] = useState(false);
      useGSAP(function(){ //GSAP timeline animation

        //Create a GSAP timeline for chaining multiple animations
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
          rotate: 30,
          duration: 2,
          ease: "Power4.easeInOut", // Smooth dramatic easing
          transformOrigin: "50% 50%" // Rotate from center
        })
        .to(".vi-mask-group",{
          scale: 10,
          duration: 2,
          delay: -1.8, // Start before previous animation ends
          ease: "Expo.easeInOut", // Smooth, fast middle easing
          transformOrigin: "50% 50%",
          opacity: 0, //Fade out completely

          onUpdate: function(){
            if(this.progress() >= 0.9){ // Check if animation is 90% complete
              document.querySelector(".svg").remove();
              setShowContent(true);
              this.kill(); //Kill the timeline to stop further updates
            }
          }
        })
      });

      // useGSAP(function(){
      //   const main = document.querySelector(".main");

      //   main?.addEventListener("mousemove", function(e){
      //     console.log(e.clientX, e.clientY);
      //   });
      // }, [showContent]);



  return (
    <>
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
      </div>)}
    </>
  )
}

export default App;