import { useState, useEffect } from "react"
import {
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa6"
import "../sass/Home.scss"
//components.
import ContraBadge from "../components/ContraBadge"

//asset.
import Profile from "../assets/profile.png"
import Mockup from "../assets/mockup.png"
import VideoHome from "../assets/This.mp4"
// add two elements forever.
const arrayCover = [1,2,3,4,5,6,7,8,9,10,11,12];
function Home(){

    const [valueScroll,setValueScroll] = useState(0);
    const [valueImageCoverMockup,setValueImageCoverMockup] = useState(1);
    const scroll = 420;
    const size = arrayCover.length-2;
    const alongSize = (size/2) * scroll;

    const ButtonLeft = (event)=>{
        setValueScroll(valueScroll - scroll);
        if(valueScroll <= 0){
            setValueScroll(alongSize);
        }
    }

    const ButtonRight = (event)=>{
        setValueScroll(valueScroll + scroll);
        if(valueScroll >= alongSize){
            setValueScroll(0);
        }
    }


    return(<>

        {/* 
            header.
            add background to header. 
        */}
        <header id="header">

            {/*
                profile image. 
            */}
            {/* <button></button> */}
            <video muted autoPlay loop id="video" src={VideoHome} ></video>

            <div id="contentProfile">
                {/*  */}
                <div id="contentProfile_image">
                    <img
                        src={Profile}
                        alt={Profile}
                    />
                </div>
                {/*  */}
                <div id="contentProfile_text">
                    <h5>Wilson Rivero</h5>
                    <span>Graphic design</span>
                </div>
            </div>
            
            {/*
                contact selection. 
            */}

            <ContraBadge/>
            
        </header>

        {/* main */}

        <main id="main">

            {/* project section. */}
            <section id="projectContent">
                <span className="labels">
                    Projects
                </span>

                <button className="buttons" onClick={ButtonLeft}>
                    <FaAngleLeft style={{color:"#5300b8",fontSize: 20}} />
                </button>

                <article style={{transform:`translateX(-${valueScroll}px)`}} >
                    {
                        arrayCover.map(cover=>(
                            <button
                                onClick={(event)=>{
                                    setValueImageCoverMockup(cover);
                                }}
                                key={cover + 1}
                            >
                                <img
                                    key={cover + 1}
                                    src={`/imgProject/image.${cover}.jpg`}
                                />
                            </button>
                        ))
                    }
                </article>

                <button className="buttons" onClick={ButtonRight}>
                    <FaAngleRight style={{color:"#5300b8",fontSize: 20}} />
                </button>

            </section>

            {/* mockup */}
            <section id="mockup">

                <span className="labels">
                    Mockup
                </span>

                <article>

                    <img
                        id="imageBeforeMockup"
                        src={`/imgProject/image.${valueImageCoverMockup}.jpg`}
                        alt={Profile}
                    />

                    <img
                        id="imageMockup"
                        src={Mockup}
                        alt={Mockup}
                    />
                    
                </article>
            </section>

        </main>
        
    </>)
}

export default Home;