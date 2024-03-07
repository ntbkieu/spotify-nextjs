import { createClient } from '@supabase/supabase-js';
import { parseCookies } from 'nookies';

const getSongs = async () => {
    const cookies = parseCookies();
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        headers: {
            Cookie: cookies,
        },
    });

    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error(error.message);
    }

    return data || [];
};

export default getSongs;
