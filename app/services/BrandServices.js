import { supabase } from '../config/supabase';

export const fetchBrands = async () => {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('id, name, logo_url, tagline, description')
      .limit(10);
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const fetchBrandById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('id, name, logo_url, tagline, description')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};