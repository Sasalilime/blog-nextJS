import React from 'react';

const Index = (props) => {

    console.log(props)
    return (
        <div>

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