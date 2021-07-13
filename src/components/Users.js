import React, {useEffect, useState} from 'react';
import API from '../utils/API';

const Users = () =>
{
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() =>
    {
        getUsers();
    });

    const getUsers = async () =>
    {
        const uPrm = await API.getEmployee();
        const userArr = uPrm.data.results;

        
    }   



    return(
        <h1>hello</h1>
    );
}

export default Users;