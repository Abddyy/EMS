// pages/api/data.js
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
    console.log('API route called');
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        console.log('Supabase data:', data);

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('API route error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
