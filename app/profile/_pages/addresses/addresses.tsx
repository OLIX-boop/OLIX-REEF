import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Addresses() {

    // const res = await fetch("/api/v1/auth/getaddresses");

    return (<>
        <h1 className="font-bold mb-3 text-3xl flex justify-center">My details</h1>
        <hr className="border-black" />

        <div className="grid grid-cols-5 mx-16 my-10 gap-y-8">
            <div className="max-w-56 border-2 border-black rounded-md p-5">
                <FontAwesomeIcon className="relative -top-3 left-[95%]" icon={faPen} />
                <div className="-mt-6">
                    <p>Via Pietro Mascagni, 4, Mi, 20073</p>
                    <p>3395294449</p>
                    <p>Andrea</p>
                </div>
            </div>
        </div>

        <hr className="border-black" />
        <div className="w-full flex justify-center">
            <button className="bg-black text-white p-3 border-2 border-black font-bold hover:text-black hover:bg-white duration-150">ADD ADDRESS</button>
        </div>
    </>)
}