import '../cssFiles/LandingPage.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/jsFiles/Footer';
import axios from 'axios'
import env from 'react-dotenv'

function LandingPage() {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [region, setRegion] = useState('')
    return (
        <div className='LandingPage'>
            <img alt='Storm Chasers Logo' />
            {/* <Link>Login</Link> */}

            <div>
                {/* for youtube, replace "watch?v=" with "embed/" */}
                <iframe src='https://www.youtube.com/embed/Xjv1sY630Uc'></iframe>
                <form>

                    <select>
                        <option value='North-West'>North-West</option>
                        <option value='West'>West</option>
                        <option value='Mid-West'>Mid-West</option>
                        <option value='South-West'>South-West</option>
                        <option value='South-East'>South-East</option>
                        <option value='Mid-Atlantic'>Mid-Atlantic</option>
                        <option value='North-East'>North-East</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default LandingPage;