import '../cssFiles/LandingPage.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/jsFiles/Footer';
import axios from 'axios'
import env from 'react-dotenv'

function LandingPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [region, setRegion] = useState('')

    const submitForm = async (e) => {
        try {
            e.preventDefault()

            const response = await axios.post(`${env.BACKEND_URL}/user/signup`, { 
                firstName, lastName, email, region
            })

            console.log(response)

            // await setUser(response.data.user)

            // await localStorage.setItem('userId', response.data.user.id)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='LandingPage'>
            <img alt='Storm Chasers Logo' />
            {/* <Link>Login</Link> */}

            <div>
                {/* for youtube, replace "watch?v=" with "embed/" */}
                <iframe src='https://www.youtube.com/embed/Xjv1sY630Uc'></iframe>
                <form onSubmit={submitForm}>

                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <select onChange={(e) => {setRegion(e.target.value)}} name='region' id='region-list'>
                        <option value='North-West'>North-West</option>
                        <option value='West'>West</option>
                        <option value='Mid-West'>Mid-West</option>
                        <option value='South-West'>South-West</option>
                        <option value='South-East'>South-East</option>
                        <option value='Mid-Atlantic'>Mid-Atlantic</option>
                        <option value='North-East'>North-East</option>
                    </select>

                    <input type="submit" value="Sign Up!" />
                </form>
            </div>
        </div>
    )
}

export default LandingPage;