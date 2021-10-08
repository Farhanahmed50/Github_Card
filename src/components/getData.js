import React, { useState, useEffect } from 'react';
import './style.css';

function GotData() {
    let [username, setUsername] = useState();
    let [user, setUser] = useState();
    // let [getImg, setGetImg] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    // setUser(data.name);
                    setUser(data);
                    // How can we use `this` inside a callback without binding it??
                    // // Make sure you understand this fundamental difference with arrow functions!!!
                    // this.setState({
                    //     user: user
                    // });
                }
            );


    }, [username]);

    const HandleClick = () => {
        const inpUser = document.getElementById("inpUser");
        if (!inpUser.value) {
            alert("Please Enter Username");
        }
        else {
            console.log(inpUser.value);
            setUsername(inpUser.value);
        }
    }
    if (user === undefined) {
        return (
            <>
            </>
        )
    }
    else {
        return (
            <div>
                <div className="mainContainer">
                    <div className="searchbar">
                        <input type="username" className="inpUser" id="inpUser" placeholder="Enter Username" />
                        <button onClick={HandleClick}>Search</button>
                    </div>
                    <img className="dp" src={user.avatar_url}></img>
                    <h1 className="username">{user.name}</h1>
                    <span className="profileHeading">Profile</span>
                    <br />
                    <div className="profileData">
                        <span className="data">Bio : <span className="subdata">{user.bio}</span> </span>
                        <br />
                        <span className="data">User Name : <span className="subdata">{user.login}</span> </span>
                        <br />
                        <span className="data">Url : <span className="subdata">{user.html_url}</span> </span>
                        <br />
                        <span className="data">No. of Repositories : <span className="subdata">{user.public_repos}</span> </span>
                        <br />
                        <span className="data">Created At : <span className="subdata">{user.created_at}</span> </span>
                    </div>
                    <div className="follow">
                        <div>
                            <span className="follows">Followers</span>
                            <span className="count">{user.followers}</span>
                        </div>
                        <div>
                            <span className="follows">Following</span>
                            <span className="count">{user.following}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default GotData;