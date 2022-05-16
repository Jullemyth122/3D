import React, { useEffect } from 'react'
import gsap from 'gsap'
import anime from 'animejs'
// import Scroll
// import indicators from 'plugins/'
import marcos from './images/marcos.jfif'
import luna from './images/luna.jpeg'
import ppp from './images/ppp.jpg'
import death from './images/death.jpg'
import spanish from './images/spanish.jfif'


import scrollbar from './images/scroll-bar.png'

function History() {

    useEffect(() => {
        var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
        setTimeout(() => {
            anime({
                targets:'.history .images_panel',
                translateY:['0%','-100%'],
                rotateX:['0deg','90deg'],
                duration:1000,
                easing:'easeInOutQuart',
                delay: anime.stagger(100)
            })
        },4000)

        anime({
            targets:'.anime_history',
            translateY:'-100%',
            delay:5000
        })

        let films = [];

        const perspectiveOrigin = {
          x: parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--scenePerspectiveOriginX"
            )
          ),
          y: parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--scenePerspectiveOriginY"
            )
          ),
          maxGap: 10
        };
        
        window.addEventListener("scroll", moveCamera);
        window.addEventListener("mousemove", moveCameraAngle);
        setSceneHeight();

        const filmsElcount = document.querySelectorAll('.scene3D .items')
        appendFilms(filmsElcount)
        
        function createFilmItem(film) {
            console.log(film)
          return film;
        }
        
        function appendFilms(films) {
          const filmsEl = document.querySelector(".viewport .scene3D");
          let filmsNodes = [];


          films.forEach(e => {
              filmsNodes.push(createFilmItem(e))
              filmsEl.appendChild(e)
          })
        //   for (d of films) {
        //     filmsNodes.push(createFilmItem(d));
        //   }
        
        //   filmsEl.appendChild(filmsNodes);
        }
        
        function moveCamera() {
          document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
        }
        
        function setSceneHeight() {
          const numberOfItems = films.length;
          const itemZ = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
          );
          const scenePerspective = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--scenePerspective"
            )
          );
          const cameraSpeed = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
          );
        
          const height =
            window.innerHeight +
            scenePerspective * cameraSpeed +
            itemZ * cameraSpeed * numberOfItems;
        
          document.documentElement.style.setProperty("--viewportHeight", height);
        }
        
        function moveCameraAngle(event) {
          const xGap =
            (((event.clientX - window.innerWidth / 2) * 100) /
              (window.innerWidth / 2)) *
            -1;
          const yGap =
            (((event.clientY - window.innerHeight / 2) * 100) /
              (window.innerHeight / 2)) *
            -1;
          const newPerspectiveOriginX =
            perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
          const newPerspectiveOriginY =
            perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;
        
          document.documentElement.style.setProperty(
            "--scenePerspectiveOriginX",
            newPerspectiveOriginX
          );
          document.documentElement.style.setProperty(
            "--scenePerspectiveOriginY",
            newPerspectiveOriginY
          );
        }
    },[])

    return (
        <div class="viewport">
            <div className="scrollEffect">
                <img src={scrollbar} alt="" />
            </div>
            <div class="scene3D-container">
                <div class="scene3D">
                <div className="items">
                    <div className="header">
                        <img src={marcos} alt="" />
                        <div className="title">
                            The Richest in all world 90's, Ferdinand Marcos. 
                        </div>
                    </div>
                    <div className="bottom">
                        Ferdinand Marcos (1917-1989) was a nationalist president remembered as a corrupt dictator who ushered in an era of political repression and violence. In attaining and holding the presidency, he wielded charisma, vast wealth, political connections among both Filipinos and Americans, military clout, and drew upon the charm of his wife, the former beauty pageant winner Imelda Marcos.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={death} alt="" />
                        <div className="title">
                            Rizal's Death 
                        </div>
                    </div>
                    <div className="bottom">
                        Rizal is widely considered one of the greatest heroes of the Philippines and has been recommended to be so honored by an officially empaneled National Heroes Committee. However, no law, executive order or proclamation has been enacted or issued officially proclaiming any Filipino historical figure as a national hero.[9] He wrote the novels Noli Me Tángere (1887) and El filibusterismo (1891), which together are taken as a national epic, in addition to numerous poems and essays.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={luna} alt="" />
                        <div className="title">
                            Heneral's Luna Death
                        </div>
                    </div>
                    <div className="bottom">
                        Regarded as one of the fiercest generals of his time, he succeeded Artemio Ricarte as the Commanding General of the Philippine Army. He sought to apply his background in military science to the fledgling army. A sharpshooter himself, he organized professional guerrilla soldiers later named the "Luna Sharpshooters" and the "Black Guard" with Senyor Michael Joaquin. His three-tier defense, now known as the Luna Defense Line, gave the American troops a difficult endeavor during their campaign in the provinces north of Manila. This defense line culminated in the creation of a military stronghold in the Cordillera.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={ppp} alt="" />
                        <div className="title">
                            People's Power Revolution
                        </div>
                    </div>
                    <div className="bottom">
                        The People Power Revolution, also known as the EDSA Revolution or the February Revolution,was a series of popular demonstrations in the Philippines, mostly in Metro Manila, from February 22 to 25, 1986. There was a sustained campaign of civil resistance against regime violence and electoral fraud. The nonviolent revolution led to the departure of Ferdinand Marcos, the end of his 20-year dictatorship and the restoration of democracy in the Philippines.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={spanish} alt="" />
                        <div className="title">
                            Spanish Rule
                        </div>
                    </div>
                    <div className="bottom">
                        As it is commonly known, the Philippines was under Spanish rule for more than three hundred years. Years of colonization transpired and with the influx of a new cultural framework being introduced unto us, it is inevitable to say that we would have to consider various changes to our cultural structures and institutions as well
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={marcos} alt="" />
                        <div className="title">
                            The Richest in all world 90's, Ferdinand Marcos. 
                        </div>
                    </div>
                    <div className="bottom">
                        Ferdinand Marcos (1917-1989) was a nationalist president remembered as a corrupt dictator who ushered in an era of political repression and violence. In attaining and holding the presidency, he wielded charisma, vast wealth, political connections among both Filipinos and Americans, military clout, and drew upon the charm of his wife, the former beauty pageant winner Imelda Marcos.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={death} alt="" />
                        <div className="title">
                            Rizal's Death 
                        </div>
                    </div>
                    <div className="bottom">
                        Rizal is widely considered one of the greatest heroes of the Philippines and has been recommended to be so honored by an officially empaneled National Heroes Committee. However, no law, executive order or proclamation has been enacted or issued officially proclaiming any Filipino historical figure as a national hero.[9] He wrote the novels Noli Me Tángere (1887) and El filibusterismo (1891), which together are taken as a national epic, in addition to numerous poems and essays.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={luna} alt="" />
                        <div className="title">
                            Heneral's Luna Death
                        </div>
                    </div>
                    <div className="bottom">
                        Regarded as one of the fiercest generals of his time, he succeeded Artemio Ricarte as the Commanding General of the Philippine Army. He sought to apply his background in military science to the fledgling army. A sharpshooter himself, he organized professional guerrilla soldiers later named the "Luna Sharpshooters" and the "Black Guard" with Senyor Michael Joaquin. His three-tier defense, now known as the Luna Defense Line, gave the American troops a difficult endeavor during their campaign in the provinces north of Manila. This defense line culminated in the creation of a military stronghold in the Cordillera.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={ppp} alt="" />
                        <div className="title">
                            People's Power Revolution
                        </div>
                    </div>
                    <div className="bottom">
                        The People Power Revolution, also known as the EDSA Revolution or the February Revolution,was a series of popular demonstrations in the Philippines, mostly in Metro Manila, from February 22 to 25, 1986. There was a sustained campaign of civil resistance against regime violence and electoral fraud. The nonviolent revolution led to the departure of Ferdinand Marcos, the end of his 20-year dictatorship and the restoration of democracy in the Philippines.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={spanish} alt="" />
                        <div className="title">
                            Spanish Rule
                        </div>
                    </div>
                    <div className="bottom">
                        As it is commonly known, the Philippines was under Spanish rule for more than three hundred years. Years of colonization transpired and with the influx of a new cultural framework being introduced unto us, it is inevitable to say that we would have to consider various changes to our cultural structures and institutions as well
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={marcos} alt="" />
                        <div className="title">
                            The Richest in all world 90's, Ferdinand Marcos. 
                        </div>
                    </div>
                    <div className="bottom">
                        Ferdinand Marcos (1917-1989) was a nationalist president remembered as a corrupt dictator who ushered in an era of political repression and violence. In attaining and holding the presidency, he wielded charisma, vast wealth, political connections among both Filipinos and Americans, military clout, and drew upon the charm of his wife, the former beauty pageant winner Imelda Marcos.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={death} alt="" />
                        <div className="title">
                            Rizal's Death 
                        </div>
                    </div>
                    <div className="bottom">
                        Rizal is widely considered one of the greatest heroes of the Philippines and has been recommended to be so honored by an officially empaneled National Heroes Committee. However, no law, executive order or proclamation has been enacted or issued officially proclaiming any Filipino historical figure as a national hero.[9] He wrote the novels Noli Me Tángere (1887) and El filibusterismo (1891), which together are taken as a national epic, in addition to numerous poems and essays.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={luna} alt="" />
                        <div className="title">
                            Heneral's Luna Death
                        </div>
                    </div>
                    <div className="bottom">
                        Regarded as one of the fiercest generals of his time, he succeeded Artemio Ricarte as the Commanding General of the Philippine Army. He sought to apply his background in military science to the fledgling army. A sharpshooter himself, he organized professional guerrilla soldiers later named the "Luna Sharpshooters" and the "Black Guard" with Senyor Michael Joaquin. His three-tier defense, now known as the Luna Defense Line, gave the American troops a difficult endeavor during their campaign in the provinces north of Manila. This defense line culminated in the creation of a military stronghold in the Cordillera.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={ppp} alt="" />
                        <div className="title">
                            People's Power Revolution
                        </div>
                    </div>
                    <div className="bottom">
                        The People Power Revolution, also known as the EDSA Revolution or the February Revolution,was a series of popular demonstrations in the Philippines, mostly in Metro Manila, from February 22 to 25, 1986. There was a sustained campaign of civil resistance against regime violence and electoral fraud. The nonviolent revolution led to the departure of Ferdinand Marcos, the end of his 20-year dictatorship and the restoration of democracy in the Philippines.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={spanish} alt="" />
                        <div className="title">
                            Spanish Rule
                        </div>
                    </div>
                    <div className="bottom">
                        As it is commonly known, the Philippines was under Spanish rule for more than three hundred years. Years of colonization transpired and with the influx of a new cultural framework being introduced unto us, it is inevitable to say that we would have to consider various changes to our cultural structures and institutions as well
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={marcos} alt="" />
                        <div className="title">
                            The Richest in all world 90's, Ferdinand Marcos. 
                        </div>
                    </div>
                    <div className="bottom">
                        Ferdinand Marcos (1917-1989) was a nationalist president remembered as a corrupt dictator who ushered in an era of political repression and violence. In attaining and holding the presidency, he wielded charisma, vast wealth, political connections among both Filipinos and Americans, military clout, and drew upon the charm of his wife, the former beauty pageant winner Imelda Marcos.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={death} alt="" />
                        <div className="title">
                            Rizal's Death 
                        </div>
                    </div>
                    <div className="bottom">
                        Rizal is widely considered one of the greatest heroes of the Philippines and has been recommended to be so honored by an officially empaneled National Heroes Committee. However, no law, executive order or proclamation has been enacted or issued officially proclaiming any Filipino historical figure as a national hero.[9] He wrote the novels Noli Me Tángere (1887) and El filibusterismo (1891), which together are taken as a national epic, in addition to numerous poems and essays.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={luna} alt="" />
                        <div className="title">
                            Heneral's Luna Death
                        </div>
                    </div>
                    <div className="bottom">
                        Regarded as one of the fiercest generals of his time, he succeeded Artemio Ricarte as the Commanding General of the Philippine Army. He sought to apply his background in military science to the fledgling army. A sharpshooter himself, he organized professional guerrilla soldiers later named the "Luna Sharpshooters" and the "Black Guard" with Senyor Michael Joaquin. His three-tier defense, now known as the Luna Defense Line, gave the American troops a difficult endeavor during their campaign in the provinces north of Manila. This defense line culminated in the creation of a military stronghold in the Cordillera.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={ppp} alt="" />
                        <div className="title">
                            People's Power Revolution
                        </div>
                    </div>
                    <div className="bottom">
                        The People Power Revolution, also known as the EDSA Revolution or the February Revolution,was a series of popular demonstrations in the Philippines, mostly in Metro Manila, from February 22 to 25, 1986. There was a sustained campaign of civil resistance against regime violence and electoral fraud. The nonviolent revolution led to the departure of Ferdinand Marcos, the end of his 20-year dictatorship and the restoration of democracy in the Philippines.
                    </div>
                </div>
                <div className="items">
                    <div className="header">
                        <img src={spanish} alt="" />
                        <div className="title">
                            Spanish Rule
                        </div>
                    </div>
                    <div className="bottom">
                        As it is commonly known, the Philippines was under Spanish rule for more than three hundred years. Years of colonization transpired and with the influx of a new cultural framework being introduced unto us, it is inevitable to say that we would have to consider various changes to our cultural structures and institutions as well
                    </div>
                </div>

                </div>
            </div>



            <div className="anime_history">
                <p id="text">
                    History of the Philippines
                </p>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div> 
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
                <div className="images_panel"></div>
            </div>
        </div>
    )
}

export default History