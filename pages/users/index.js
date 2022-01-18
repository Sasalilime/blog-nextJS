import React from 'react';
import Link from 'next/link';

const Index = ({users}) => {

    return (
        <div className="container px-4 pt-5">
            <h1 className="text-center">Liste des utilisateurs: </h1>
            <div className="row justify-content-center mt-5">
                {users?.map(user => (
                    <div className="col-12 col-lg-6 m-2" key={user.id}>
                        <div className="card">
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">
                                    {user.username}
                                </h5>
                                <Link href={`/users/${user.id}`}>
                                    <a className="ml-auto card-link text-decoration-none link-secondary">Contacter</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;

export const getStaticProps = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    return {
        props: {
            users
        }
    };
};