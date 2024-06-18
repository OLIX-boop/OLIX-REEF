'use client';

import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    const hoverAnimation =  "font-bold cursor-pointer hover:text-blue-500 duration-200";
    return (<>
        <footer className="bg-black flex flex-col justify-center align-center mt-8 py-10 px-16 text-white">
            <div className="w-full flex justify-center gap-8 mb-3">
                <i className={"fa-brands fa-facebook text-3xl "+hoverAnimation}></i>
                <i className={"fa-brands fa-instagram text-3xl "+hoverAnimation}></i>
                <i className={"fa-sharp fa-regular fa-phone text-3xl "+hoverAnimation}></i>
            </div>
            <div className="flex justify-center gap-5 pb-5">
                <p onClick={() => router.push('/')} className={hoverAnimation}>Home</p>
                <p onClick={() => router.push('/newcorals')} className={hoverAnimation}>New Corals</p>
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