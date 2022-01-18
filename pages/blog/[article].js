import React from 'react';

const Article = () => {
    return (
        <div>

        </div>
    );
};

export default Article;

export const getStaticProps = async () => {

}


export const getStaticPaths = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    const paths = articles.map((item) => ({
        params: {article: item.id}
    }));


    return {
        paths,
        //renverra une erreur 404 si false et qu'un chemin n'est pas bon
        fallback: false
    }
};