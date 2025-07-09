import { useState } from "react";
import useAppData from "../assets/data";
import { supabase } from "../supabase";
import { Helmet } from 'react-helmet-async';
import UseBucketFiles from "../assets/blogimg";

interface AdminProps {
  onLogout?: () => void;
}

function Admin({ onLogout }: AdminProps) {

  const [tag, setTag] = useState<number>(111);
  const { data, loading } = useAppData();
  const { data: images, loading: _imagesLoading, error: _error } = UseBucketFiles();

  const [updates, setUpdates] = useState<{ [key: string]: string }>({});
  const [newBlog, setNewBlog] = useState({ heading: '', description: '', image: '' });
  const [newBlogImageFile, setNewBlogImageFile] = useState<File | null>(null);
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);

  if (loading) return <p className="text-center text-white">Loading data...</p>;

  const selectedMainKey = data.mainkey.filter((item) => item.id === tag);
  const selectedSubItems = data.maindata2.filter((item) => item.id === tag || item.sid === tag);
  const selectedItems = data.maindata.filter((item) => item.id === tag);
  
  // Debug: let's see what we're getting
  console.log('Current tag:', tag);
  console.log('selectedMainKey:', selectedMainKey);
  console.log('selectedItems:', selectedItems);
  console.log('selectedSubItems:', selectedSubItems);

  const handleInputChange = (field: string, value: string) => {
    setUpdates((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async (field: string, value: string) => {
    console.log(`Updating ${field} to:`, value);
    
    try {
      // Determine which table and record to update based on the field name
      if (field === "title" || field === "description" || field === "keywords") {
        // Update mainkey table
        const { error } = await supabase
          .from('maindatakeywords')
          .update({ 
            [field === "keywords" ? "metakeywords" : field]: 
              field === "keywords" ? value.split(',').map(k => k.trim()) : value 
          })
          .eq('id', tag);
        
        if (error) throw error;
        console.log('MainKey updated successfully');
        
      } else if (field.startsWith('promo_') || field.startsWith('heading_') || 
                 field.startsWith('secheading_') || field.startsWith('secpara_') || 
                 field.startsWith('text_') || field.startsWith('keywords_')) {
        
        // Extract the ID from the field name
        const id = field.split('_')[1];
        const actualField = field.split('_')[0];
        
        // Determine if it's maindata or maindata2 based on the current selection
        const isMainData = selectedItems.some(item => item.id === parseInt(id));
        const isMainData2 = selectedSubItems.some(item => item.sid === parseInt(id));
        
        if (isMainData) {
          // Update maindata table
          const { error } = await supabase
            .from('maindata')
            .update({ 
              [actualField]: 
                actualField === "keywords" ? value.split(',').map(k => k.trim()) : value 
            })
            .eq('id', parseInt(id));
          
          if (error) throw error;
          console.log('MainData updated successfully');
          
        } else if (isMainData2) {
          // Update maindata2 table
          const { error } = await supabase
            .from('maindata2')
            .update({ 
              [actualField]: 
                actualField === "keywords" ? value.split(',').map(k => k.trim()) : value 
            })
            .eq('sid', parseInt(id));
          
          if (error) throw error;
          console.log('MainData2 updated successfully');
        }
      }
      
      // Clear the updates state for this field
      setUpdates(prev => {
        const newUpdates = { ...prev };
        delete newUpdates[field];
        return newUpdates;
      });
      
      // Show success message (you can add a toast notification here)
      alert('Updated successfully!');
      
    } catch (error) {
      console.error('Error updating:', error);
      alert('Error updating data. Please try again.');
    }
  };

  // Function to get section name based on tag
  const getSectionName = (tagId: number) => {
    const sections = [
      { label: "Home", id: 111 },
      { label: "Services", id: 112 },
      { label: "Case Studies", id: 113 },
      { label: "About Us", id: 114 },
      { label: "Blog", id: 115 },
      { label: "Contact Us", id: 116 },
    ];
    
    const section = sections.find(s => s.id === tagId);
    if (section) return section.label;
    
    // Check if it's a maindata item
    const mainItem = data.maindata.find(item => item.id === tagId);
    if (mainItem) return mainItem.promo;
    
    // Check if it's a sub item
    const subItem = data.maindata2.find(item => item.sid === tagId);
    if (subItem) return `${subItem.promo} (Sub Item)`;
    
    return 'Content Editor';
  };

  return (
    <div className="w-screen h-screen p-1 bg-black flex gap-1 text-black relative">
      <Helmet>
        <title>Admin Dashboard | LaCleo Digital</title>
        <meta name="description" content="Admin dashboard for managing LaCleo Digital content and services." />
        <meta name="keywords" content="admin dashboard, content management, LaCleo Digital admin" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lacleodigital.com/admin" />
        <meta property="og:title" content="Admin Dashboard | LaCleo Digital" />
        <meta property="og:description" content="Admin dashboard for managing LaCleo Digital content." />
        <meta property="og:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lacleodigital.com/admin" />
        <meta property="twitter:title" content="Admin Dashboard | LaCleo Digital" />
        <meta property="twitter:description" content="Admin dashboard for managing LaCleo Digital content." />
        <meta property="twitter:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
      </Helmet>
      
      {/* Logout Button */}
      {onLogout && (
        <button
          onClick={onLogout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 z-50"
        >
          Logout
        </button>
      )}
      {/* Sidebar */}
      <aside className="w-1/5 bg-white h-full rounded-sm overflow-y-auto">
        <div className="flex flex-col gap-2 p-2">
          {[
            { label: "Home", id: 111 },
            { label: "Services", id: 112 },
            { label: "Case Studies", id: 113 },
            { label: "About Us", id: 114 },
            { label: "Blog", id: 115 },
            { label: "Contact Us", id: 116 },
          ].map((item) => (
            <button
              key={item.id}
              className={`p-4 font-bold text-left ${
                tag === item.id ? "bg-black text-white" : "hover:bg-black hover:text-white"
              }`}
              onClick={() => setTag(item.id)}
            >
              {item.label}
            </button>
          ))}

          <hr className="my-3 border-gray-300" />

          {data.maindata.map((item) => (
            <button
              key={item.id}
              className={`p-4 font-bold text-left ${
                tag === item.id ? "bg-black text-white" : "hover:bg-black hover:text-white"
              }`}
              onClick={() => setTag(item.id)}
            >
              {item.promo}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col gap-1 w-4/5 h-full relative">
        {/* Sub Items */}
        <div className="w-full h-1/4 bg-white rounded-sm p-4 overflow-y-auto flex-shrink-0">
          <h3 className="text-lg font-bold mb-2">Sub Items</h3>
          <div className="flex flex-wrap gap-2">
            {selectedSubItems.map((item) => (
              <button
                key={item.sid}
                onClick={() => setTag(item.sid)}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-black hover:text-white text-sm"
              >
                {item.promo}
              </button>
            ))}
          </div>
        </div>

                 {/* Update Section */}
         <div className="w-full flex-1 bg-white rounded-sm p-4 overflow-hidden">
           <h3 className="text-lg font-bold mb-4">
             Editing: {getSectionName(tag)}
           </h3>

           <div className="h-full overflow-y-auto pr-2">
             {/* MainKey Data Editing */}
             {selectedMainKey.length > 0 && (
               <div className="mb-8 p-4 border border-blue-200 rounded-lg bg-blue-50">
                 <h4 className="text-lg font-semibold mb-4 text-blue-800">SEO & Meta Data</h4>
                 {selectedMainKey.map((item) => (
                   <div key={item.id} className="space-y-4">
                     {/* Title */}
                     <div>
                       <label className="font-semibold text-gray-700">Meta Title</label>
                       <input
                         type="text"
                         value={updates.title ?? item.title}
                         onChange={(e) => handleInputChange("title", e.target.value)}
                         className="w-full mt-1 p-2 border rounded"
                         placeholder="Enter meta title for SEO"
                       />
                       <button
                         onClick={() => handleUpdate("title", updates.title ?? item.title)}
                         className="mt-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                       >
                         Update Meta Title
                       </button>
                     </div>

                     {/* Description */}
                     <div>
                       <label className="font-semibold text-gray-700">Meta Description</label>
                       <textarea
                         rows={3}
                         value={updates.description ?? item.description}
                         onChange={(e) => handleInputChange("description", e.target.value)}
                         className="w-full mt-1 p-2 border rounded"
                         placeholder="Enter meta description for SEO"
                       />
                       <button
                         onClick={() => handleUpdate("description", updates.description ?? item.description)}
                         className="mt-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                       >
                         Update Meta Description
                       </button>
                     </div>

                     {/* Keywords */}
                     <div>
                       <label className="font-semibold text-gray-700">Meta Keywords</label>
                       <input
                         type="text"
                         value={
                           updates.keywords ??
                           (Array.isArray(item.metakeywords)
                             ? item.metakeywords.join(", ")
                             : item.metakeywords || "")
                         }
                         onChange={(e) => handleInputChange("keywords", e.target.value)}
                         className="w-full mt-1 p-2 border rounded"
                         placeholder="Enter keywords separated by commas"
                       />
                       <button
                         onClick={() =>
                           handleUpdate(
                             "keywords",
                             updates.keywords ??
                               (Array.isArray(item.metakeywords)
                                 ? item.metakeywords.join(", ")
                                 : item.metakeywords)
                           )
                         }
                         className="mt-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                       >
                         Update Meta Keywords
                       </button>
                     </div>
                   </div>
                 ))}
               </div>
             )}
            {tag == 115 && data.blog && (
  <div className="mb-8 p-4 border rounded-lg bg-gray-50">
    <button
      className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      onClick={() => setShowNewBlogForm(true)}
    >
      + Add New Blog Post
    </button>
    {showNewBlogForm && (
      <div className="mb-8 p-4 border rounded-lg bg-white">
        <h4 className="text-lg font-bold mb-2">New Blog Post</h4>
        <label className="font-semibold text-gray-700">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={e => setNewBlogImageFile(e.target.files?.[0] || null)}
          className="w-full mt-1 p-2 border rounded"
        />
        <label className="font-semibold text-gray-700 mt-4">Heading</label>
        <input
          type="text"
          value={newBlog.heading}
          onChange={e => setNewBlog({ ...newBlog, heading: e.target.value })}
          className="w-full mt-1 p-2 border rounded"
        />
        <label className="font-semibold text-gray-700 mt-4">Description</label>
        <textarea
          rows={6}
          value={newBlog.description}
          onChange={e => setNewBlog({ ...newBlog, description: e.target.value })}
          className="w-full mt-1 p-2 border rounded"
        />
        <div className="flex gap-2 mt-3">
          <button
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={async () => {
              let imageUrl = '';
              if (newBlogImageFile) {
                const filePath = `blog/${Date.now()}_${newBlogImageFile.name}`;
                const { error } = await supabase.storage.from('blog').upload(filePath, newBlogImageFile, { upsert: true });
                if (!error) {
                  const { data: urlData } = supabase.storage.from('blog').getPublicUrl(filePath);
                  imageUrl = urlData.publicUrl;
                }
              }
              // Insert into Supabase
              const { error: insertError } = await supabase.from('blog').insert([{
                heading: newBlog.heading,
                description: newBlog.description,
                image: imageUrl,
                promo: '', // or any default value
              }]);
              if (!insertError) {
                setShowNewBlogForm(false);
                setNewBlog({ heading: '', description: '', image: '' });
                setNewBlogImageFile(null);
                // Optionally: refetch your data here
              } else {
                alert('Failed to add blog post!');
              }
            }}
          >
            Add Blog Post
          </button>
          <button
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={() => setShowNewBlogForm(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
    <h3 className="text-xl font-bold mb-4">Edit Blog Posts</h3>
      {data.blog.map((item, index) => (
        <div key={item.id} className="mb-8 p-4 border rounded-lg bg-white">
          <label className="font-semibold text-gray-700">Heading</label>
          <input
            type="text"
            value={updates[`heading_${item.id}`] ?? item.heading}
            onChange={e => handleInputChange(`heading_${item.id}`, e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <button
            onClick={() => handleUpdate(`heading_${item.id}`, updates[`heading_${item.id}`] ?? item.heading)}
            className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
          >
            Update Heading
          </button>

          <label className="font-semibold text-gray-700 mt-4">Description (HTML allowed)</label>
          <textarea
            rows={6}
            value={updates[`description_${item.id}`] ?? item.description}
            onChange={e => handleInputChange(`description_${item.id}`, e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <button
            onClick={() => handleUpdate(`description_${item.id}`, updates[`description_${item.id}`] ?? item.description)}
            className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
          >
            Update Description
          </button>

          <label className="font-semibold text-gray-700 mt-4">Image</label>
          {/* Show current image if available */}
          {images && images[index] && (
            <div className="mb-2">
              <img src={images[index]} alt="Blog" className="h-24 rounded" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              // Upload to Supabase Storage
              const filePath = `blog/${item.id}_${file.name}`;
              const { data: _data, error: error } = await supabase.storage.from('blog').upload(filePath, file, { upsert: true });
              if (!error) {
                // Get public URL
                const { data: urlData } = supabase.storage.from('blog').getPublicUrl(filePath);
                // Save the new image URL to your blog post
                handleUpdate(`image_${item.id}`, urlData.publicUrl);
              } else {
                alert('Image upload failed!');
              }
            }}
            className="w-full mt-1 p-2 border rounded"
          />
          <button
            className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
            onClick={() => handleUpdate(`image_${item.id}`, updates[`image_${item.id}`] ?? item.image)}
          >
            Update Image
          </button>
        </div>
      ))}
    </div>
  )}

                          {/* MainData Editing */}
             {selectedItems.length > 0 && (
               <div className="mb-8 p-4 border border-green-200 rounded-lg bg-green-50">
                 <h4 className="text-lg font-semibold mb-4 text-green-800">Main Service Content</h4>
                 {selectedItems.map((item) => (
                   <div key={item.id} className="space-y-4">
                     <h5 className="text-md font-semibold mb-2 text-green-700">{item.promo}</h5>
                
                {/* Promo */}
                <div>
                  <label className="font-semibold text-gray-700">Promo</label>
                  <input
                    type="text"
                    value={updates[`promo_${item.id}`] ?? item.promo}
                    onChange={(e) => handleInputChange(`promo_${item.id}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`promo_${item.id}`, updates[`promo_${item.id}`] ?? item.promo)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Promo
                  </button>
                </div>

                {/* Heading */}
                <div>
                  <label className="font-semibold text-gray-700">Heading</label>
                  <input
                    type="text"
                    value={updates[`heading_${item.id}`] ?? item.heading}
                    onChange={(e) => handleInputChange(`heading_${item.id}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`heading_${item.id}`, updates[`heading_${item.id}`] ?? item.heading)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Heading
                  </button>
                </div>

                {/* Secondary Heading */}
                <div>
                  <label className="font-semibold text-gray-700">Secondary Heading</label>
                  <input
                    type="text"
                    value={updates[`secheading_${item.id}`] ?? item.secheading}
                    onChange={(e) => handleInputChange(`secheading_${item.id}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`secheading_${item.id}`, updates[`secheading_${item.id}`] ?? item.secheading)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Secondary Heading
                  </button>
                </div>

                {/* Secondary Paragraph */}
                <div>
                  <label className="font-semibold text-gray-700">Secondary Paragraph</label>
                  <textarea
                    rows={3}
                    value={updates[`secpara_${item.id}`] ?? item.secpara}
                    onChange={(e) => handleInputChange(`secpara_${item.id}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`secpara_${item.id}`, updates[`secpara_${item.id}`] ?? item.secpara)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Secondary Paragraph
                  </button>
                </div>

                {/* Main Text */}
                <div>
                  <label className="font-semibold text-gray-700">Main Text</label>
                  <textarea
                    rows={4}
                    value={updates[`text_${item.id}`] ?? item.text}
                    onChange={(e) => handleInputChange(`text_${item.id}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`text_${item.id}`, updates[`text_${item.id}`] ?? item.text)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Main Text
                  </button>
                </div>

                {/* Keywords */}
                <div>
                  <label className="font-semibold text-gray-700">Keywords</label>
                  <input
                    type="text"
                    value={
                      updates[`keywords_${item.id}`] ??
                      (Array.isArray(item.keywords)
                        ? item.keywords.join(", ")
                        : item.keywords || "")
                    }
                    onChange={(e) => handleInputChange(`keywords_${item.id}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`keywords_${item.id}`, updates[`keywords_${item.id}`] ?? (Array.isArray(item.keywords) ? item.keywords.join(", ") : item.keywords))}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Keywords
                  </button>
                </div>
              </div>
            ))}
               </div>
             )}

             {/* MainData2 (Sub Items) Editing */}
             {selectedSubItems.length > 0 && (
               <div className="mb-8 p-4 border border-purple-200 rounded-lg bg-purple-50">
                 <h4 className="text-lg font-semibold mb-4 text-purple-800">Sub Service Content</h4>
                                  {selectedSubItems.map((item) => (
                   <div key={item.sid} className="space-y-4">
                     <h5 className="text-md font-semibold mb-2 text-purple-700">{item.promo} (Sub Item)</h5>
                
                {/* Promo */}
                <div>
                  <label className="font-semibold text-gray-700">Promo</label>
                  <input
                    type="text"
                    value={updates[`promo_${item.sid}`] ?? item.promo}
                    onChange={(e) => handleInputChange(`promo_${item.sid}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`promo_${item.sid}`, updates[`promo_${item.sid}`] ?? item.promo)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Promo
                  </button>
                </div>

                {/* Heading */}
                <div>
                  <label className="font-semibold text-gray-700">Heading</label>
                  <input
                    type="text"
                    value={updates[`heading_${item.sid}`] ?? item.heading}
                    onChange={(e) => handleInputChange(`heading_${item.sid}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`heading_${item.sid}`, updates[`heading_${item.sid}`] ?? item.heading)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Heading
                  </button>
                </div>

                {/* Secondary Heading */}
                <div>
                  <label className="font-semibold text-gray-700">Secondary Heading</label>
                  <input
                    type="text"
                    value={updates[`secheading_${item.sid}`] ?? item.secheading}
                    onChange={(e) => handleInputChange(`secheading_${item.sid}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`secheading_${item.sid}`, updates[`secheading_${item.sid}`] ?? item.secheading)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Secondary Heading
                  </button>
                </div>

                {/* Secondary Paragraph */}
                <div>
                  <label className="font-semibold text-gray-700">Secondary Paragraph</label>
                  <textarea
                    rows={3}
                    value={updates[`secpara_${item.sid}`] ?? item.secpara}
                    onChange={(e) => handleInputChange(`secpara_${item.sid}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`secpara_${item.sid}`, updates[`secpara_${item.sid}`] ?? item.secpara)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Secondary Paragraph
                  </button>
                </div>

                {/* Main Text */}
                <div>
                  <label className="font-semibold text-gray-700">Main Text</label>
                  <textarea
                    rows={4}
                    value={updates[`text_${item.sid}`] ?? item.text}
                    onChange={(e) => handleInputChange(`text_${item.sid}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`text_${item.sid}`, updates[`text_${item.sid}`] ?? item.text)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Main Text
                  </button>
                </div>

                {/* Keywords */}
                <div>
                  <label className="font-semibold text-gray-700">Keywords</label>
                  <input
                    type="text"
                    value={
                      updates[`keywords_${item.sid}`] ??
                      (Array.isArray(item.keywords)
                        ? item.keywords.join(", ")
                        : item.keywords || "")
                    }
                    onChange={(e) => handleInputChange(`keywords_${item.sid}`, e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate(`keywords_${item.sid}`, updates[`keywords_${item.sid}`] ?? (Array.isArray(item.keywords) ? item.keywords.join(", ") : item.keywords))}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Keywords
                  </button>
                </div>
                


                {/* Display IDs for reference */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Sub ID:</strong> {item.sid}</p>
                  <p className="text-sm text-gray-600"><strong>Main ID:</strong> {item.id}</p>
                </div>
              </div>
            ))}
               </div>
             )}

                           {/* No Data Message */}
              {selectedMainKey.length === 0 && selectedItems.length === 0 && selectedSubItems.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg">No data available for this section.</p>
                  <p className="text-gray-400 text-sm mt-2">Select a different item from the sidebar to edit its content.</p>
                </div>
              )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;

