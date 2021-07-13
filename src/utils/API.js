import axios from 'axios';

export default
{
    getEmployee: async function()
    {
        const user = await axios('https://randomuser.me/api/?results=50&nat=us');

        if(user)
        {
            return user;
        }
        else
        {
            return {object: 'error', message:'Oops nothing here!'};
        }
    }
}