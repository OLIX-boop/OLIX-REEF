const Footer = () => {
    return (<>
        <footer className="bg-black flex flex-col justify-center align-center mt-8 py-10 px-16 text-white">
            <div className="w-full flex justify-center gap-8 mb-3">
                <i className="fa-brands fa-facebook text-3xl cursor-pointer"></i>
                <i className="fa-brands fa-instagram text-3xl cursor-pointer"></i>
                <i className="fa-sharp fa-regular fa-phone text-3xl cursor-pointer"></i>
            </div>
            <div className="flex justify-center gap-5 pb-5">
                <p>Home</p>
                <p>New Corals</p>
                <p>About us</p>
                <p>Contacts</p>
                <p>Out Team</p>
            </div>
            <hr />
            <p className="flex align-center justify-center pt-5">All rights reserved. Copyright ©2024</p>
        </footer>
    </>)
}

export default Footer;