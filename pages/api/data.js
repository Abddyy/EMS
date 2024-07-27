import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
    console.log('API route called');  // Log to ensure route is called
    try {
        const { data, error } = await supabase
            .from('event')
            .select('*');

        console.log('Supabase data:', data);  // Log data for debugging

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: error.message });
        }

        if (data.length === 0) {
            console.warn('No data found in Supabase table');
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('API route error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
