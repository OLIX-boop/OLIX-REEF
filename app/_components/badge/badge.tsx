

const Badge = ({icon, title, text}: {icon:string, title:string, text:string}) => {


    return (<>
        <div className="shadow-md mx-auto min-[960px]:m-0 flex max-w-[60%] min-[960px]:max-w-[20%] py-2 px-4">
            <i className={icon + " text-4xl my-auto mr-5"}></i>
            <div className="">
                <h1 className="font-bold text-l">{title}</h1>
                <p className="text-sm tracking-tighter">{text}</p>
            </div>
        </div>
    </>)
}

export default Badge;