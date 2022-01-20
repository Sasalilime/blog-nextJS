import React, {useEffect, useState} from 'react';

const ApiBlog = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        fetch('/api/blog-api')
            .then(response => response.json())
            .then(data => setUser(data));

    }, []);

    console.log(user);

    return (
        <div>

        </div>
    );
};

export default ApiBlog;