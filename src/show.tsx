import useAppData from "./assets/data"
import Navbar from './header';
import Footer from './footer';
import "./button.css"
import { useSearchParams } from 'react-router-dom';

function Show() {
    const {data,loading}=useAppData()
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    
    if(loading) {
        return (
            <div>
                <section className='sticky top-5 z-50'><Navbar/></section>
                <div className="flex justify-center items-center min-h-screen">
                    <p>Loading data...</p>
                </div>
                <Footer></Footer>
            </div>
        )
    }

    // Find the item from maindata
    const mainItem = data.maindata.find(item => item.id === parseInt(id || '0'));
    
    // Find sub-items from maindata2
    const subItems = data.maindata2.filter(subItem => subItem.id === parseInt(id || '0'));
    
    // If not found in maindata, check if it's a sub-item
    const subItem = data.maindata2.find(subItem => subItem.sid === parseInt(id || '0'));

    return (
        <div>
            <section className='sticky top-5 z-50'><Navbar/></section>
            
            <div className="container mx-auto px-4 py-8">
                {mainItem ? (
                    <div>
                        <h1 className="text-3xl font-bold mb-6">{mainItem.promo}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {subItems.map((subItem) => (
                                <div key={subItem.sid} className="border rounded-lg p-6 shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">{subItem.promo}</h2>
                                    <p className="text-gray-600 mb-4">{subItem.text || 'No description available'}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">{subItem.heading || 'Contact for pricing'}</span>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : subItem ? (
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">{subItem.promo}</h1>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <p className="text-gray-600 mb-6">{subItem.text || 'No description available'}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">{subItem.heading || 'Contact for pricing'}</span>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold mb-4">Item Not Found</h1>
                        <p className="text-gray-600">The requested item could not be found.</p>
                        <button 
                            onClick={() => window.history.back()} 
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Go Back
                        </button>
                    </div>
                )}
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default Show
