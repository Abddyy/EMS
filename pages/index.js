import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                if (response.ok) {
                    const result = await response.json();
                    console.log('Fetched data:', result);
                    setData(result);
                } else {
                    console.error('Failed to fetch data, Status:', response.status);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    console.log('Data:', data);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (data.length === 0) {
        return (
            <div>
                <h1>Data from Supabase</h1>
                <p>No data available</p>
            </div>
        );
    }

    // If data is not loading and there is data available
    return (
        <div>
            <h1>Data from Supabase</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <p>ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                        <p>Created At: {user.created_at}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
