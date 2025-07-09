// hooks/useBucketFiles.js
import { useEffect, useState } from 'react';
import { supabase } from "../supabase";

export default function UseBucketFiles(bucketName = 'blog') {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        console.log('Fetching files from bucket:', bucketName);
        
        // First, let's check if the bucket exists
        const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
        if (bucketError) {
          console.error('Error listing buckets:', bucketError);
        } else {
          console.log('Available buckets:', buckets);
        }
        
        const { data: files, error } = await supabase
          .storage
          .from(bucketName)
          .list('', {
            limit: 100,
            sortBy: { column: 'name', order: 'asc' },
          });

        if (error) {
          console.error('Error fetching bucket files:', error.message);
          setError(error);
          setLoading(false);
          return;
        }

        console.log('Files found:', files);

        if (!files || files.length === 0) {
          console.log('No files found in bucket');
          setData([]);
          setLoading(false);
          return;
        }

        const urls = files.map(file => {
          const publicUrl = supabase.storage.from(bucketName).getPublicUrl(file.name).data.publicUrl;
          console.log('Generated URL for', file.name, ':', publicUrl);
          return publicUrl;
        });

        console.log('Generated URLs:', urls);
        setData(urls);
        setLoading(false);
      } catch (err) {
        console.error('Unexpected error:', err);
        setError(err);
        setLoading(false);
      }
    }

    fetchFiles();
  }, [bucketName]);

  return { data, loading, error };
}
