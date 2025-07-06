import { useState } from "react";
import useAppData from "../assets/data";
import { Link } from "react-router-dom";

function Admin() {
  const [tag, setTag] = useState<number>(111);
  const { data, loading } = useAppData();

  const [updates, setUpdates] = useState<{ [key: string]: string }>({});

  if (loading) return <p className="text-center text-white">Loading data...</p>;

  const selectedMainKey = data.mainkey.filter((item) => item.id === tag);
  const selectedSubItems = data.maindata2.filter((item) => item.id === tag);

  const handleInputChange = (field: string, value: string) => {
    setUpdates((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = (field: string, value: string) => {
    console.log(`Updating ${field} to:`, value);
    // Here you'd typically send data to your backend
  };

  return (
    <div className="w-screen h-screen p-1 bg-black flex gap-1 text-black">
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
        <div className="w-full h-1/4 bg-white rounded-sm p-4 overflow-y-auto">
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
        <div className="w-full h-3/4 bg-white rounded-sm p-4 overflow-y-auto">
          {selectedMainKey.length > 0 ? (
            selectedMainKey.map((item) => (
              <div key={item.id} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="font-semibold text-gray-700">Title</label>
                  <input
                    type="text"
                    value={updates.title ?? item.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate("title", updates.title ?? item.title)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Title
                  </button>
                </div>

                {/* Description */}
                <div>
                  <label className="font-semibold text-gray-700">Description</label>
                  <textarea
                    rows={3}
                    value={updates.description ?? item.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => handleUpdate("description", updates.description ?? item.description)}
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Description
                  </button>
                </div>

                {/* Keywords */}
                <div>
                  <label className="font-semibold text-gray-700">Keywords</label>
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
                    className="mt-1 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Update Keywords
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No data available for this section.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Admin;

