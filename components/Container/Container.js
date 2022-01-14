import React from 'react';
import Link from 'next/link';

const Container = ({children}) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid justify-content-center">
                    <Link href="/">
                        <a className="navbar-brand mx-4">Accueil</a>
                    </Link>
                    <Link href="/blog">
                        <a className="navbar-brand mx-4">Blog</a>
                    </Link>
                    <Link href="/users">
                        <a className="navbar-brand mx-4">Liste</a>
                    </Link>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default Container;