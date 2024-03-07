import { createClient } from '@supabase/supabase-js';
import { parseCookies } from 'nookies';

import getSongs from "./getSongs";

const getSongsByTitle = async (title) => {
  const cookies = parseCookies();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    headers: {
      Cookie: cookies,
    },
  });

  if (!title) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};

export default getSongsByTitle;
