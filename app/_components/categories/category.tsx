import { StaticImageData } from "next/image";
import  Image from "next/image";
const Category = ({img, title, to}: {img:StaticImageData, title:string, to:string}) => {

    return (
        <div className="bg-red-400">
            <Image src={img} alt="" className="w-auto h-full" />
            <h1>{title}</h1>
        </div>
    )
}


export default Category;