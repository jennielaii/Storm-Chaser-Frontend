import '../cssFiles/AdminPage.css';

import AdminUserItem from '../../components/jsFiles/AdminUserItem';
import Footer from '../../components/jsFiles/Footer';

import axios from 'axios';
import env from 'react-dotenv';
import { useState, useEffect } from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import Chart from 'chart.js/auto'

// ChartJS.register(ArcElement, Tooltip, Legend);

function AdminPage() {

    const [users, setUsers] = useState([]);
    // const [regionTallies, setRegionTallies] = useState([]);

    const [xValues, setXValues] = useState([])
    const [yValues, setYValues] = useState([])

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
        // setRegionTallies(tempRegionTallies);
    }

    const test = () => {

        let userRegions = []

        for (let user of users){
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
            const count = userRegions.filter( x => x === entry).length

            nameAmount.push(count)
            console.log(entry+":", count);
        }

        setXValues(names)
        setYValues(nameAmount)
        // console.log('xValues', names)
        // console.log('yValues', nameAmount)

    }

    useEffect(()=>{test()}, [users]);

    const data = {
        labels: xValues,
        datasets: [
            {
                label: 'Subs per Region',
                data: yValues,
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
            <h2 className='AdminHeader'>Data Collection Dashboard</h2>
            <div className='DoughnutGraph'>
                <Doughnut
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right'
                            },
                            title: {
                                display: true,
                                text: 'Subscribers by Region',
                                position: 'left'
                            }
                        }
                    }}
                />
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