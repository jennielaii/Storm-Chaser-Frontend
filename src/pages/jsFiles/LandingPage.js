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
    const [region, setRegion] = useState("")

    const submitForm = async (e) => {
        try {
            e.preventDefault()

            const response = await axios.post(`${env.BACKEND_URL}/user/signup`, { 
                firstName, lastName, email, region
            })

            console.log(response.data.user)

            // setUser(response.data.user)

            // localStorage.setItem('userId', response.data.user.id)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='LandingPage'>
            <img alt='Storm Chasers Logo' />
            {/* <Link>Login</Link> */}

            <div className='videoAndForm'>
                {/* for youtube, replace "watch?v=" with "embed/" */}
                <div className='form-video'>
                    <iframe src='https://www.youtube.com/embed/Xjv1sY630Uc'></iframe>
                </div>
                
                <form onSubmit={submitForm} className='signup-form'>


                    <div className='email-div'>
                        <label htmlFor="email"></label>
                        <input placeholder='Enter your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='name-div'>
                        <label htmlFor="firstName"></label>
                        <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                        <label htmlFor="lastName"></label>
                        <input placeholder='First Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className='select-div'>
                        <select onChange={(e) => {setRegion(e.target.value)}} name='region' id='region-list'>
                            {/* https://stackoverflow.com/questions/17603055/placeholder-for-select-tag */}
                            <option value="" disabled selected hidden> What region are you located in?</option>
                            <option value=""></option>
                            <option value='North West'>North West</option>
                            <option value='West'>West</option>
                            <option value='Mid-West'>Mid-West</option>
                            <option value='South West'>South West</option>
                            <option value='South East'>South East</option>
                            <option value='Mid-Atlantic'>Mid-Atlantic</option>
                            <option value='North East'>North East</option>
                        </select>
                    </div>
                    

                    <div className='submit-div'>
                        <input type="submit" value="Subscribe Now!!" />
                    </div>
                    
                </form>
            </div>
        <div className='LandingBoxOne'>
            <div class="LandingImageOne">
                <div id="image" style={{ display: "inline"}}>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
                    loading="lazy"
                    alt="Loading..."
                    />
                </div>
            </div>
            <div class="LandingTextOne">
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
                </div>
        </div>
        <div className='LandingBoxTwo'>
            <div class="LandingImageTwo">
                <div id="image" style={{ display: "inline"}}>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
                    loading="lazy"
                    alt="Loading..."
                    />
                </div>
            </div>
            <div class="LandingTextTwo">
            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
                </div>
        </div>
        <div className='LandingBoxThree'>
            <div class="LandingImageThree">
                <div id="image" style={{ display: "inline"}}>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
                    loading="lazy"
                    alt="Loading..."
                    />
                </div>
            </div>
            <div class="LandingTextThree">
            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
                </div>
        </div>
    </div>
    )
}

export default LandingPage;