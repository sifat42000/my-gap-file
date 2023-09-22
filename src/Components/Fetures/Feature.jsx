import { FaCheck } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div className="flex gap-3 items-center">
            <FaCheck></FaCheck>
            <h2>{feature}</h2>
            
        </div>
    );
};

export default Feature;