import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = ({icon, title, text} : {icon:IconDefinition, title:string, text:string}) => {
    return (<>
        <div className="border-2 border-gray-400 hover:border-black duration-300 rounded-lg mx-auto min-[960px]:m-0 flex max-w-[60%] min-[960px]:max-w-[20%] py-2 px-4">
            <FontAwesomeIcon icon={icon} className={"text-4xl my-auto mr-5"} />
            <div className="">
                <h1 className="font-bold text-l">{title}</h1>
                <p className="text-sm tracking-tighter">{text}</p>
            </div>
        </div>
    </>)
}

export default Badge;