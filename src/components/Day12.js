import { useState, useEffect } from 'react';
import React from 'react';

const cache = {};

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (cache[url]) {
            setData(cache[url]);
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch');
                const result = await response.json();

                cache[url] = result; // Cache the data
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};



const Day12 = () => {
    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='wrapper'>
            <h4 className="days">Day 12</h4>
            <h2>Fetching Data with Custom Hook</h2>
            <hr></hr>
            {data.map((post) => (
                <div key={post.id} className='Day12Post'>
                    <h3>Name : {post.name}</h3>
                    <p>Email : {post.email}</p>
                    <br></br>
                </div>
            ))}
        </div>
    );
};

export default Day12;