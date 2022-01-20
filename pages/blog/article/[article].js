import React from 'react';
import Head from 'next/head';

const Article = (props) => {

    return (
        <>
            <Head>
                <title>{props.article.title}</title>
            </Head>
            <div className="container px-4 pt-5 ">
                <h1 className="text-center mb-4">{props.article.title}</h1>
                <p className="card-body">{props.article.body}</p>

            </div>
        </>
    );
};

export default Article;

export const getStaticProps = async (context) => {
    const id = context.params.article;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await data.json();

    return {
        props: {
            article
        }
    };
};

export const getStaticPaths = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    const paths = articles.map((item) => ({
        params: {article: item.id.toString()}
    }));

    return {
        paths,
        //renverra une erreur 404 si false et qu'un chemin n'est pas bon
        fallback: false
    };
};