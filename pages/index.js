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
                    console.log('Fetched data:', result);  // Log data for debugging
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

    return (
        <div>
            <h1>Data from Supabase</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.length > 0 ? (

                        data.map((event) => (
                            <p>
                                <p>{event.id}</p>
                                <p>{event.created_at}</p>
                                <p>{event.event_name}</p>
                                <br/>
                            </p>

                        ))


                    ) : (
                        <p>No data available</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Home;
