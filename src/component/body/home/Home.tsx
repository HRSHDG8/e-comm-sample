import React, { FunctionComponent, useEffect } from 'react';

const Home: FunctionComponent<any> = (props: any) => {
    useEffect(() => {
        if (localStorage.getItem("user-id") === null) {
            window.location.href = "login";
        } else {
            props.setUser(localStorage.getItem("user-id"));
        }
    })
    return (
        <div>Home</div>
    )
}
export default Home;