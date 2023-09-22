// import PropTypes from 'prop-types';

import Feature from "../Fetures/feature";

const Priceoption = ({option}) => {
    return (
        <div className="bg-red-500 flex-col">
            <h2 className="mb-4">
                <span className="text-5xl ">{option.price}</span>
                <span className="text-2xl">/mon</span>
                </h2>
                <h4 className="text-4xl mb-10">{option.name}</h4>
                <div className="mb-12 flex-grow ">
                {
                    option.features.map((feature,index) => <Feature key={index} feature={feature} ></Feature>)
                }
                </div>
                <div className="flex justify-center mb-5 ">
                    <button className=" bg-blue-500 px-32 py-1 hover:bg-sky-700">Buy now</button>
                </div>
            
        </div>
    );
};

// Priceoption.PropTypes = {
//     option : PropTypes.object
// }

export default Priceoption;