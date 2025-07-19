import { useParams } from 'react-router-dom';
import useAppData from './assets/data';
import UseBucketFiles from './assets/blogimg';

const slugify = (str: string) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

export default function BlogPost() {
  const { slug } = useParams();
  const { data } = useAppData();
  const { data: images } = UseBucketFiles();

  // Find the blog and its index
  const blogIndex = data.blog.findIndex(b => slugify(b.heading) === slug);
  const blog = data.blog[blogIndex];
  const imageUrl = images && images[blogIndex];

  if (!blog) return <div className="text-center py-10 text-gray-500">No blog found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.heading}</h1>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={blog.heading}
          className="mb-6 rounded-lg w-full max-h-96 object-cover"
        />
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: blog.description }} />
    </div>
  );
} 