import React, { useEffect } from 'react'
import n1 from './images/1.jpg'
import n2 from './images/2.jfif'
import n3 from './images/3.jpg'
import n4 from './images/4.jpg'
import n5 from './images/5.jpg'
import n6 from './images/6.jpg'
import n7 from './images/7.jpg'
import n8 from './images/8.jpg'
import n9 from './images/9.webp'
import n10 from './images/10.jpg'
import n11 from './images/11.jpg'
import n12 from './images/12.jfif'

import o1 from './images/a.jpg'
import o2 from './images/b.jpg'
import o3 from './images/c.jfif'
import o4 from './images/d.jpg'
import o5 from './images/e.jpg'
import o6 from './images/f.jfif'
import o7 from './images/g.jfif'
import o8 from './images/h.jpg'
import o9 from './images/i.jpeg'
import o10 from './images/j.jpg'
import o11 from './images/k.jpg'
import o12 from './images/l.jpg'

import p1 from './images/p1.jfif'
import p2 from './images/p2.png'
import p3 from './images/p3.jpg'
import p4 from './images/p4.jpg'
import p5 from './images/p5.jpg'
import p6 from './images/p6.jpg'
import p7 from './images/p7.jpg'
import p8 from './images/p8.jpg'
import p9 from './images/p9.jpg'
import p10 from './images/p10.jfif'
import p11 from './images/p11.webp'
import p12 from './images/p12.jpg'


import gsap from 'gsap'
import { Power2 } from 'gsap/gsap-core'

function Home() {
    
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease:"power2.out"}})

        tl.to('.sub-body .text',{y:'0%',duration:1, stagger: 0.25})
        tl.to(".sub-body .slider",{ y: '-100%',duration:1.5,delay:1.5})
        tl.to(".sub-body .intro",{y:"-100%",duration:1},"-=2")
        
    },[])

    return (
        <div class="sub-body">
            <div class="intro">
                <div class="intro-text">
                    <div class="hide"><span class="text"> Representing </span></div>
                    <div class="hide"><span class="text"> Our National Country </span></div>
                    <div class="hide"><span class="text"> Philippines </span></div>
                </div>
            </div>
            <div class="slider"></div>

            <div class="container">
                <ul>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n1} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n2} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n3} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n4} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n5} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n6} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n7} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n8} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n9} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n10} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n11} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={n12} alt=""/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o1} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o2} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o3} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o4} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o5} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o6} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o7} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o8} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o9} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o10} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o11} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={o12} alt=""/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p1} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p2} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p3} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p4} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p5} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p6} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p7} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p8} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p9} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p10} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p11} alt=""/>
                    </li>
                    <li>
                        <div id="flagWrapper">
                            <div id="blue"></div>
                            <div id="red"></div>
                            <div id="white"></div>
                            <span id="sun"></span>
                            <span class="star-1"></span>
                            <span class="star-2"></span>
                            <span class="star-3"></span>
                        </div>
                        <img src={p12} alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home