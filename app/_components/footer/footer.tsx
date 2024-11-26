'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { useRouter, usePathname } from "next/navigation";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const router = useRouter();
    const hoverAnimation =  "font-bold cursor-pointer hover:text-blue-500 duration-200";
    const path = usePathname();

    return (<>
        <footer className="bg-black flex flex-col justify-center align-center mt-8 py-10 px-16 text-white">
            <div className="w-full flex justify-center gap-8 mb-3">
                <FontAwesomeIcon icon={faFacebook} className={"text-3xl "+hoverAnimation}/>
                <FontAwesomeIcon icon={faInstagram} className={"text-3xl "+hoverAnimation}/>
                <FontAwesomeIcon icon={faPhone} className={"text-3xl "+hoverAnimation}/>
            </div>
            <div className="flex justify-center gap-5 pb-5">
                {path == '/'
                    ?
                    <a href="#HOME" className={hoverAnimation}>Home</a> 
                    :
                    <p onClick={() => router.push('/')} className={hoverAnimation}>Home</p>
                }

                {path == '/newcorals'
                    ?
                    <a href="#NEWCORALS" className={hoverAnimation}>New Corals</a> 
                    :
                    <p onClick={() => router.push('/newcorals')} className={hoverAnimation}>New Corals</p>
                }
                
                <p className={hoverAnimation}>About us</p>
                <p className={hoverAnimation}>Contacts</p>
                <p className={hoverAnimation}>Out Team</p>
            </div>
            <hr />
            <p className="flex align-center justify-center pt-5">All rights reserved. Copyright ©2024</p>
        </footer>
    </>)
}

export default Footer;