import React from "react";

export const UsersList = props => {

    const person = props.users.map((s, index) => <li key={index.toString()}>{s}</li>);
    console.log(person)
    return (
        <>
            {/*<img src=`{person.picture}` alt=""/>*/}
            {/*<p>email: {person.email}</p>*/}
            <p>imię: {person}</p>
            {/*<p>nazwa użytkownika: {person.username}</p>*/}
        </>
    )
}