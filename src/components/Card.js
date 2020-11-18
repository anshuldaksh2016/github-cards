import React from 'react';

const Card = (props) => {
    return (
        <div style={{ margin: "1em" }}>

            <img alt="avatar"
                style={{ width: "75px" }}
                src={props.avatar_url}
            />

            <div
                style={{ fontWeight: 'bold' }} >

                {props.name}
            </div>

            <div>{props.bio}</div>
        </div>
    )
}

export default Card;