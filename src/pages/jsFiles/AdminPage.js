import '../cssFiles/AdminPage.css';

import AdminUserItem from '../../components/jsFiles/AdminUserItem';
import Footer from '../../components/jsFiles/Footer';
import Logo from '../../graphics/Logo.svg';

import axios from 'axios';
import env from 'react-dotenv';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'


function AdminPage() {

    const [users, setUsers] = useState([]);

    const [xValues, setXValues] = useState([])
    const [yValues, setYValues] = useState([])

    async function getUsers() {
        const response = await axios.get(`${env.BACKEND_URL}/user`);
        setUsers(response.data.users);
    }

    useEffect(() => { getUsers(); }, []);

    const setGraphValues = () => {

        let userRegions = []

        for (let user of users) {
            userRegions.push(user.region)
        }

        console.log('userR', userRegions)
        // returns array of each unique data type
        let set = new Set(userRegions);

        console.log('set', set)


        let names = []
        let nameAmount = []
        for (let entry of set) {
            names.push(entry)
            // https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array
            const count = userRegions.filter(x => x === entry).length

            nameAmount.push(count)
            console.log(entry + ":", count);
        }

        setXValues(names)
        setYValues(nameAmount)
        // console.log('xValues', names)
        // console.log('yValues', nameAmount)

    }

    useEffect(() => { setGraphValues() }, [users]);

    const data = {
        labels: xValues,
        datasets: [
            {
                label: 'Subs per Region',
                data: yValues,
                backgroundColor: [
                    '#632390',
                    '#7C26B5',
                    '#913ACF',
                    '#A35BD7',
                    '#B67BDF',
                    '#C89DE7',
                    '#DABDEF'
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    function createAdminUserItems() {
        return (
            users.map((user, idx) => {
                return (
                    <AdminUserItem key={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} />
                )
            })
        )
    }

    return (
        <div className='AdminPage'>
            <div className='AdminHeader'>
                <div className='AdminTopHeader'>
                    <img src={Logo} alt='Storm Chasers Logo' />
                    <div className='AdminLoginInfo'>
                        <h4>Welcome, Admin</h4>
                        <p>Sign Out</p>
                    </div>
                </div>
                <h2 className='AdminTitle'>Data Collection Dashboard</h2>
            </div>
            <div className='GraphContainer'>
                <h4>Subscribers by Region</h4>
                <div className='DoughnutGraph'>
                    <Doughnut
                        data={data}
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        font: {
                                            family: "'Roboto', sans- serif",
                                            size: 18
                                        }
                                    }
                                },
                            }
                        }}
                    />
                </div>
            </div>
            <div className='UserItemsDiv'>
                <div className='UserItemsHeader'>
                    <h3>User Name</h3>
                    <h3>Email</h3>
                </div>
                <div className='UserItemsScrollDiv'>
                    {createAdminUserItems()}
                </div>
            </div>
        </div>
    )
}

export default AdminPage;