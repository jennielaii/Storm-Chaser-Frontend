import '../cssFiles/LandingPage.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/jsFiles/Footer';
import axios from 'axios'
import env from 'react-dotenv'
import logo from '../../graphics/Logo.svg'



function LandingPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [region, setRegion] = useState("")
    const [signupResponse, setSignupResponse] = useState({})

    const submitForm = async (e) => {
        try {
            e.preventDefault()

            const response = await axios.post(`${env.BACKEND_URL}/user/signup`, { 
                firstName, lastName, email, region
            })

            setSignupResponse(response)

            console.log(response)

            // setUser(response.data.user)

            // localStorage.setItem('userId', response.data.user.id)

        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <div className='LandingPage'>
            <img src={logo} alt='Storm Chasers Logo' />
            {/* <Link>Login</Link> */}



        
        
            <div className='videoAndForm'>
                {/* for youtube, replace "watch?v=" with "embed/" */}
                <div className='form-video'>
                    <iframe src='https://www.youtube.com/embed/D1tEE_pRDMU'></iframe>
                </div>
                
                {signupResponse.status === 200 ? 


                    <div className='subscribed'>

                        <h1>Thank you for subscribing to Storm Chasers!</h1>

                        <p>Confirmation of your subscription was sent to the email you provided. Follow the link to create your account.</p>

                    </div>
                    

                :

                    <form onSubmit={submitForm} className='signup-form'>

                        <p>Want to see more exciting content?        </p>
                        <div className='email-div'>
                            <label htmlFor="email"></label>
                            <input placeholder={`Enter your Email Address`} value={email} onChange={(e) => {setEmail(e.target.value); e.target.style.color = '#000000'}} />
                        </div>

                        <div className='name-div'>
                            <label htmlFor="firstName"></label>
                            <input placeholder='First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value); e.target.style.color = '#000000'}} />

                            <label htmlFor="lastName"></label>
                            <input placeholder='Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value); e.target.style.color = '#000000'}} />
                        </div>

                        <div className='select-div'>
                            <label htmlFor="region"></label>
                            <select onChange={(e) => {setRegion(e.target.value); e.target.style.color = '#000000'}} name='region' id='region-list'>
                                {/* <label> */}
                                    {/* https://stackoverflow.com/questions/17603055/placeholder-for-select-tag */}
                                    <option  value="" disabled selected hidden>{"What region are you located in?"}</option>
                                    <option value='North West'>North West</option>
                                    <option value='West'>West</option>
                                    <option value='Mid-West'>Mid-West</option>
                                    <option value='South West'>South West</option>
                                    <option value='South East'>South East</option>
                                    <option value='Mid-Atlantic'>Mid-Atlantic</option>
                                    <option value='North East'>North East</option>
                                {/* </label> */}

                            </select>
                        </div>
                        

                        <div className='submit-div'>
                            <input type="submit" value="Subscribe Now!!" />
                        </div>
                        
                    </form>
                }
            </div>

            <div className='welcome-text'>
                <p>Welcome to Storm Chasers, where you can witness our most up-to-date, action-packed storm chasing videos and read our team's thrilling stories.</p>
            </div>




        <div className='LandingBoxOne'>
            <div class="LandingImageOne">
                <div id="image" style={{ display: "inline"}}>
                    <img src = "https://i.imgur.com/s4djP27.png"
                    loading="lazy"
                    alt="Loading..."
                    />
                </div>
            </div>
            <div class="LandingTextOne">
                    <text>Get notifications when we upload a brand new storm video.</text>
                </div>
        </div>
        <div className='LandingBoxTwo'>
            <div class="LandingImageTwo">
                <div id="image" style={{ display: "inline"}}>
                    <img src = "https://i.imgur.com/nqwKEgr.jpg"
                    loading="lazy"
                    alt="Loading..."
                    />
                </div>
            </div>
            <div class="LandingTextTwo">
            <text>View our gallery of the gnarliest twisters and awe-inspiring power of nature.</text>
                </div>
        </div>
        <div className='LandingBoxThree'>
            <div class="LandingImageThree">
                <div id="image" style={{ display: "inline"}}>
                    <img src = "https://i.imgur.com/Tb5bULF.jpg"
                    loading="lazy"
                    alt="Loading..."
                    />
                </div>
            </div>
            <div class="LandingTextThree">
            <text>Read our team's harrowing tales of our storm encounters.</text>
                </div>
        </div>
    </div>
    )
}

export default LandingPage;