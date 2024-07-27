// pages/handlers/signUpHandler.js
import { supabase } from '../../lib/supabaseClient';

const signUpHandler = async (email, password) => {
    try {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.error('Error signing up:', error.message);
            return { success: false, message: error.message };
        }

        const { data, insertError } = await supabase
            .from('users')
            .insert([{ email, password }]);

        if (insertError) {
            console.error('Error inserting user into users table:', insertError.message);
            return { success: false, message: insertError.message };
        }

        console.log('User signed up and inserted:', data);
        return { success: true, user: data };
    } catch (error) {
        console.error('Error in signUpHandler:', error);
        return { success: false, message: error.message };
    }
};

export default signUpHandler;
