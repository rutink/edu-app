import React from 'react';

const Profile = (props) => {
    let user = props.function();
    return (<div className="row">
        <div className="col-sm-3">
            <img src={user.avatar} width="90%" alt=""/>
        </div>
        <div className="col-sm-9">
            <h1>{user.name} {user.lastname}</h1>
            <h3>Обо мне</h3>
            <p>{user.about}</p>
        </div>
    </div>)
}

export default Profile;