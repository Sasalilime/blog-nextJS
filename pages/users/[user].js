import React from 'react';

const User = ({user}) => {

    return (<div className="container px-4 pt-3">
        <h2 className="text-center mb-4">
            Nom d&apos;utilisateur: {user.username}
        </h2>
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-6">
                <div className="card p2">
                    <div className="card-body">
                        <div className="card-title">
                            {user.name} {user.surname}
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">Mail: {user.email}</li>
                            <li className="list-group-item">Site Web: {user.website}</li>
                            <li className="list-group-item">Téléphone: {user.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default User;

export const getStaticProps = async (context) => {
    const id = context.params.user;

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await data.json();

    return {
        props: {
            user
        }
    };

};

export const getStaticPaths = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    const paths = users.map(item => ({
        params: {user: item.id.toString()}
    }));

    return {
        paths, fallback: false
    };
};