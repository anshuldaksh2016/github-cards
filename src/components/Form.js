import React, { useState } from 'react';
const axios = require('axios');



const Form = props => {

    const [username, setUserName] = useState("");


    const handleSubmit = e => {
        e.preventDefault();

        axios.get(`https://api.github.com/users/${username}`)
            .then(resp => {
                props.onSubmit(resp.data)
                setUserName('')
            })
    }




    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={e => setUserName(e.target.value)}
                placeholder="Github username"
            />
            <button type="submit">Add Card </button>
        </form>
    )
}

export default Form;