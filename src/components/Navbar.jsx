import {useRef , useState , useEffect} from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import clsx from 'clsx';
import{useWindowScroll} from 'react-use'
import gsap from 'gsap';



const navItems =['Nexus' , 'About' , 'Vault' , 'Prologue']

const Navbar = () => {

    const[isAudioPlay , setIsAudioPlay] = useState(false);
    const[isIndicatorActive , setIsIndicatorActive] = useState(false);

    const audioElementRef = useRef(null);

    const toggleAudioIndicator = () =>{

                setIsAudioPlay((prev)=>!prev);
                setIsIndicatorActive((prev)=>!prev);
    }


    useEffect(()=>{

        if(isAudioPlay){
                audioElementRef.current.play();
        }
        else{
                audioElementRef.current.pause();
        }


    },[isAudioPlay])


    // we have to destructure it as and we are destructurin in y direction//

    const{y:scrollY} = useWindowScroll();

    const[isNavbarVisible , setIsNavbarVisible] = useState(true);

    const[lastScroll , setLastScroll] = useState(0)


    useEffect(()=>{

        if(scrollY === 0){
            setIsNavbarVisible(true);   
            containerRef.current.classList.remove('floating-nav');
        }

        else if(scrollY  > lastScroll){
                setIsNavbarVisible(false);
                containerRef.current.classList.add('floating-nav');
        }
        else if(scrollY < lastScroll){

            setIsNavbarVisible(true);
            containerRef.current.classList.add('floating-nav');
        }

        setLastScroll(scrollY);
    },[lastScroll , scrollY])


    useEffect(()=>{

    gsap.to(containerRef.current,{

        y:isNavbarVisible ? 0 : -100,
        opacity:isNavbarVisible ? 1 : 0,
        duration:0.2
    })

    }
    ,[isNavbarVisible])








    const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    {/* navbar left section */}
                        <div className="flex items-center gap-7">
                                <img src="/img/logo.png" alt="logo" className="w-10"  />

                                <Button 
                             id="product-button"
                             title="Products"
                             rightIcons={<TiLocationArrow/>} 
                             containerClass="md:flex items-center justify-center gap-1 hidden bg-blue-50"  
                                
                                />
                        </div>


                        {/* navbar right section */}

                        <div className="flex h-full items-center ">
                            <div className="hidden md:block ">
                                {
                                    navItems.map((item)=>(

                                        <a key={item} className="nav-hover-btn">
                                            {item}
                                        </a>
                                    ))
                                }
                            </div>
                            {/*audio button */}
                                <button onClick={toggleAudioIndicator} className="ml-10  flex items-center space-x-0.5 cursor-pointer">
                                    <audio src="/audio/loop.mp3" 
                                    className="hidden"
                                    loop
                                    ref={audioElementRef} 
                                    />
                                {[1,2,3,4] .map((bar)=>(
                                    <div
                                key={bar}
                                className={clsx("indicator-line",{
                                        active:isIndicatorActive,
                                })}  
                                
                                style={{
                                    animationDelay:`${bar * 0.1}s`,
                                }} 
                                    />
                                ))}

                                </button>


                        </div>
                </nav>
            </header>
    </div>
  )
}

export default Navbar