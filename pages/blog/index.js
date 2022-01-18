import React from 'react';
import Link from 'next/link';

const Index = (props) => {

    return (
        <div className="container px-4 py-5">
            <h1 className="text-center">Bienvenue sur le blog</h1>
            <p className="text-center">Liste des articles</p>
            <div className="row g-3 mt-4">
                {props.articles.map(article => (
                    <div key={article.id} className="col-12 col-md-6 col-xl-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {article.title}
                                </h5>
                                <p className="card-text">{article.body.slice(0, 20) + '...'}</p>
                                <Link href={`/blog/article/${article.id}`}>
                                    <a className="card-link text-decoration-none link-secondary">Lire
                                        l&apos;article</a></Link>
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
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    return {
        props: {
            articles
        }
    };
};