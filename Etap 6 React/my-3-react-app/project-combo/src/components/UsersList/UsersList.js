import React, {useState} from "react";
import {UsersListOneItem} from "./UsersListOneItem";

export const UsersList = props => {
    const [list, setList] = useState(props.users);

    const removeItem = (username) => {
        console.log("Usuń element.", username)
        setList(list => (list
            .filter(one => one.username !== username)
            // [1,2,3].filter(one => one !== 2) // [1,3]
        ))
    }

    return (
        <div className="container">
            <div className="user-list">
                {
                    [...list]
                    .sort((a, b)=> a.username.localeCompare(b.username))
                    .map(userObj => <UsersListOneItem
                        user={userObj}
                        key={userObj.username}
                        onRemoveItem={removeItem}
                    />)
                }
            </div>
        </div>
    )
}