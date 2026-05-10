import { div } from 'motion/react-client'
import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'


const  Links = [

    {href :"http://discord.com" ,icon : <FaDiscord /> },
    {href :"https://github.com/YOURCODERAYAN/Zentrae-interactive" ,icon : <FaGithub /> },
    {href: "http://instagram.com" ,icon : <FaInstagram /> },
    {href :"http://facebook.com" ,icon : <FaFacebook /> },
   
]




const Footer = () => {
  return (
        <footer className="w-full bg-violet-300 py-10 text-black">
                    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                                <p className="text-center text-sm md:text-left"> @Nova2026 . All Rights Reserved</p>

                                <div className="flex justify-center gap-4 md:justify-start">

                                    {
                                            Links.map((link)=>(

                                                <a key={link} href={link.href} target="__blank"     rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                                                    {link.icon}
                                                </a>
                                            ))

                                    }

                                </div>
                    </div>
        </footer>
  )
}

export default Footer