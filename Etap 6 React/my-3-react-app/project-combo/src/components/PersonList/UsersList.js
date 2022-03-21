import React from "react";

export const UsersList = props => {
    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <ul>{props.users
            .map(user => <li key={user.username.toUpperCase()}>
                <strong>{capitalizeFirstLetter(user.first_name)} {capitalizeFirstLetter(user.last_name)}</strong> <em>{user.username} </em>
            </li>)}
        </ul>
    )
}