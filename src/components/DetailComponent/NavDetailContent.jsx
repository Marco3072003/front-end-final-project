import Button from "../GeneralComponent/Button"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function NavDetailContent({handleLogOutModal,username}){
    const navigate = useNavigate()
    if(!username) navigate('/')
    const text = 'You\'re Log In As ' + username
    return(
        <>
           <div className='left'>

           <Link to='/'><Button text='Home'/> </Link>
            </div>
            <div onClick={handleLogOutModal} className="right">
                <Button text={text} /> 
            </div>
        </>
    )
}