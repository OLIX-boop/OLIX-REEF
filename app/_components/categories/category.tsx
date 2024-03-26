import { StaticImageData } from "next/image";
import  Image from "next/image";
const Category = ({img, title, to}: {img:StaticImageData, title:string, to:string}) => {

    return (
        <figure className="grid overflow-hidden cursor-pointer rounded-2xl">
            <Image src={img} alt="Mountains" />
            <figcaption className="grid items-end text-4xl font-bold text-black p-3">{title}</figcaption>
        </figure>
    )
}


export default Category;