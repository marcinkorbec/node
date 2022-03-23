import React, {useState} from "react";
import {UsersListOneItem} from "./UsersListOneItem";

export const UsersList = props => {
    const [list, setList] = useState()

    return (
        <div className="container">
            <div className="user-list">
                {
                    [...props.users]
                    .sort((a, b)=> a.username.localeCompare(b.username))
                    .map(userObj => <UsersListOneItem user={userObj} key={userObj.username}/>)
                }
            </div>
        </div>
    )
}