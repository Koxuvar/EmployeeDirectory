import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import API from '../utils/API';

const Users = () =>
{
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() =>
    {
        getUsers();
    },[]);

    const getUsers = async () =>
    {
        const uPrm = await API.getEmployee();
        let i = 1;
        const userArr = uPrm.data.results.map((e) =>
            {
                return{
                    id: i++,
                    first: e.name.first,
                    last: e.name.last,
                    email: e.email,
                    phone: e.cell
                }
            });
        
        setUsers(userArr);
        setFilteredUsers(userArr);
    };
    
    const cols = 
    [
        {
            name: 'ID',
            selector: 'id',
            sortable: true
        },
        {
            name: 'First',
            selector: 'first',
            sortable:true
        },
        {
            name: 'Last',
            selector: 'last',
            sortable:true
        },
        {
            name: 'Email',
            selector: 'email',
            sortable:false
        },
        {
            name: 'Phone',
            selector: 'phone',
            sortable:false
        }
    ];

    const handleInput = (e) =>
    {
        const {value} = e.target;
        if(value == '')
        {
            setFilteredUsers(users);
        }
        else
        {
            const filtered = users.filter(e =>
                {
                   return e.first.toLowerCase() === value.toLowerCase() || e.last.toLowerCase() === value.toLowerCase() || e.first.toLowerCase() + e.last.toLowerCase() === value.split(' ').join('').toLowerCase();
                });
            
            setFilteredUsers(filtered);
        }    
    }



    return(
        <div className="container fluid">
            <input className='input' type='text' placeholder='filter: First or Last name' onChange={handleInput}/>
            <DataTable className="card-body" columns={cols} data={filteredUsers} />

        </div>
    );
}

export default Users;