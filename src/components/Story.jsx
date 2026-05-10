import {useRef , useState} from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'


const Story = () => {


const BentoTilt = ({children , className=""}) =>{

    const itemRef = useRef(null);

    const[transformStyle , setTransformStyle] = useState("")


    const handleMouseMove= (e) =>{

            if(!itemRef.current) return;

        const {left , top , width , height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;


        const tiltX = (relativeX - 0.5) * 10
        const tiltY = (relativeY - 0.5) *-10



    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95 , .95 , .95)`
    setTransformStyle(newTransform)
    }



    const handleMouseLeave= ()=>{

            setTransformStyle("perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    }



        return(
                <div
                
                ref={itemRef}
                className={className}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{transform:transformStyle}}
                
                
                >
                        {children}
                </div>
        )
}







  return (
     <section id="story" className='min-h-dvh w-full bg-black text-blue-50 pb-10'>
        <div className="flex size-full flex-col items-center py-10 pb-24">
              <p className="font-general text-sm uppercase md:text-[10px]">the multiverse ip world </p>
        

            <div className="relative size-full flex flex-col items-center gap-20 ">

               
                     <AnimatedTitle
                    title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                    sectionId="#story"
                    containerClass=" mt-3 pointer-events-none mix-blend-difference text-blue-50 absolute z-10 left-50% right-50% top-% text-cente"
                />

                    <div className="story-img-container">
                        <div className="story-img-mask" style={{borderRadius:'20px' , overflow:'hidden'}}>
                            <BentoTilt className="story-img-content">
                                    <img 
                                  src="/img/entrance.webp"
                                  alt="entrance"
                                  className=" rounded-2xl object-cover object-center"  
                                    />
                            </BentoTilt>
                        </div>

                        
                    </div>



                    <div className="-mt-80 flex w-full justify-center md:-mt-64  md:justify-center">
                        <div className="h-full flex w-fit flex-col items-center md:items-start">
                              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
                           <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
                        </div>

                    </div>

            </div>
            </div>

     </section>
  )
}

export default Story