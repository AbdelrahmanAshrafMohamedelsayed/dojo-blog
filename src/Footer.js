import { useState } from "react";
const Footer = () => {
    const [x, setx] = useState('abdo');
    let fun=()=>{
        setx('body');
    }
    return ( 
        <footer onClick={fun}>&copy; created by {x}</footer>
     );
}
 
export default Footer;