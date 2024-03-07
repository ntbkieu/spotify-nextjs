import { createClient } from '@supabase/supabase-js';
import { parseCookies } from 'nookies';

const getLikedSongs = async () => {
  const cookies = parseCookies();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    headers: {
      Cookie: cookies,
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from('liked_songs')
    .select('*, songs(*)')
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false });

  if (!data) return [];

  return data.map((item) => ({
    ...item.songs,
  }));
};

export default getLikedSongs;