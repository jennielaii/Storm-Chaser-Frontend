import '../cssFiles/AdminPage.css';

import AdminUserItem from '../../components/jsFiles/AdminUserItem';
import Footer from '../../components/jsFiles/Footer';

import axios from 'axios';
import env from 'react-dotenv';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function AdminPage() {

    const [users, setUsers] = useState([]);
    const [regionTallies, setRegionTallies] = useState([]);

    async function getUsers() {
        const response = await axios.get(`${env.BACKEND_URL}/user`);
        setUsers(response.data.users);
    }

    useEffect(() => { getUsers(); }, []);

    function tallyRegions() {
        let tempRegionTallies = [0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < users.length; i++) {
            switch (users[i].region) {
                case 'North West':
                    tempRegionTallies[0]++;
                    break;
                case 'West':
                    tempRegionTallies[1]++;
                    break;
                case 'Mid-West':
                    tempRegionTallies[2]++;
                    break;
                case 'South West':
                    tempRegionTallies[3]++;
                    break;
                case 'South East':
                    tempRegionTallies[4]++;
                    break;
                case 'Mid-Atlantic':
                    tempRegionTallies[5]++;
                    break;
                case 'North East':
                    tempRegionTallies[6]++;
                    break;
                default:
                    console.log('unrecognized region while tallying. That region was: ' + users[i].region);
                    break;
            }
        }
        setRegionTallies(tempRegionTallies);
    }

    useEffect(tallyRegions, [users]);

    const data = {
        labels: ['North West', 'West', 'Mid-West', 'South West', 'South East', 'Mid-Atlantic', 'North East'],
        datasets: [
            {
                label: 'Subs per Region',
                data: regionTallies,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(250, 34, 123, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(250, 34, 123, 1)'
                ],
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
                <div className='TopHeader'>
                    <img alt='Storm Chasers Logo' />
                    <div className='AdminLoginInfo'>
                        <h5>Welcome, Admin</h5>
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
                                    position: 'right'
                                }
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