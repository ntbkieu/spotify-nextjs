import { createClient } from '@supabase/supabase-js';
import { parseCookies } from 'nookies';

const getSongsByUserId = async () => {
  const cookies = parseCookies();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    headers: {
      Cookie: cookies,
    },
  });

  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', sessionData.session?.user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};

export default getSongsByUserId;
