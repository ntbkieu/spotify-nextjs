import { createClient } from '@supabase/supabase-js';
import { parseCookies } from 'nookies';

const getActiveProductsWithPrices = async () => {
  const cookies = parseCookies();
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    headers: {
      Cookie: cookies,
    },
  });

  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};

export default getActiveProductsWithPrices;