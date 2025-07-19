require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_KEY;
const SITE_URL = 'https://lacleodigital.com';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

async function main() {
  // Fetch data from Supabase
  const { data: blogs, error: blogError } = await supabase.from('blog').select('heading');
  const { data: maindata, error: mainError } = await supabase.from('maindata').select('promo');
  const { data: maindata2, error: subError } = await supabase.from('maindata2').select('promo');

  if (blogError || mainError || subError) {
    console.error('Error fetching data:', blogError || mainError || subError);
    process.exit(1);
  }

  // Static URLs
  const staticUrls = [
    '/',
    '/services',
    '/casestudies',
    '/aboutus',
    '/blog',
    '/contactus',
    '/privacy',
    '/terms',
    '/admin'
  ];

  // Dynamic URLs
  const blogUrls = (blogs || []).map(b => `/blogpost/${slugify(b.heading)}`);
  const serviceUrls = (maindata || []).map(s => `/show/${slugify(s.promo)}`);
  const subServiceUrls = (maindata2 || []).map(s => `/show/${slugify(s.promo)}`);

  // Combine all URLs
  const allUrls = [
    ...staticUrls,
    ...blogUrls,
    ...serviceUrls,
    ...subServiceUrls
  ];

  // Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls.map(url => `  <url><loc>${SITE_URL}${url}</loc></url>`).join('\n')}\n</urlset>\n`;

  // Write to public/sitemap.xml
  fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
  console.log('sitemap.xml generated!');
}

main(); 