import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [open,setOpen] = useState(false)

    const routes = [
        { path: '/', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/products', id: 3, name: 'Products' },
        { path: '/contact', id: 4, name: 'Contact' },
        { path: '/dashboard', id: 5, name: 'Dashboard' },
      ];


    return (
        <nav>
            <div className="md:hidden text-3xl pt-3 pl-4 " onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : 
                    <AiOutlineMenu></AiOutlineMenu>
                } 
                     
                
            
            </div>
             
            
            <ol className={`md:flex duration-1000 absolute md:static p-5  ${open ? 'top-13' : '-top-60'}`}>
{
     routes.map(route => <Link key={route.id} route={route}></Link>)
 }
</ol> 
           

            
        </nav>
    );
};

export default Navbar;