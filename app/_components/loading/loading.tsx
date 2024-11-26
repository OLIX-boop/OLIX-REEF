import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Loading = ({value}: {value:any}) => {
    return(<>
        {!value && 
            <div className="flex gap-3 w-full justify-center mt-5">
                <FontAwesomeIcon className="animate-spin text-2xl" icon={faSpinner} />
                <h1 className="text-xl font-bold">Processing ...</h1>
            </div>
        }
    </>)
}

export default Loading