
const Link = ({route}) => {
    return (
        
        <li className="mr-5 md: hover:bg-sky-700 bg-yellow-400 ">
            <a href={route.path}>{route.name}</a>
            </li>
    );
};

export default Link;