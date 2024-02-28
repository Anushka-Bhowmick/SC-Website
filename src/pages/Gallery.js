import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';


const DemoProduct = (props) => {
    useDocTitle('CSBS');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img src="event_image_url_1" alt="Event 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                            <h3 className="text-lg font-semibold mb-2">Event 1</h3>
                            <p className="text-sm text-gray-600">Description of Event 1</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img src="event_image_url_2" alt="Event 2" className="w-full h-48 object-cover mb-4 rounded-md" />
                            <h3 className="text-lg font-semibold mb-2">Event 2</h3>
                            <p className="text-sm text-gray-600">Description of Event 2</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img src="event_image_url_3" alt="Event 3" className="w-full h-48 object-cover mb-4 rounded-md" />
                            <h3 className="text-lg font-semibold mb-2">Event 3</h3>
                            <p className="text-sm text-gray-600">Description of Event 3</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img src="event_image_url_4" alt="Event 4" className="w-full h-48 object-cover mb-4 rounded-md" />
                            <h3 className="text-lg font-semibold mb-2">Event 4</h3>
                            <p className="text-sm text-gray-600">Description of Event 4</p>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DemoProduct;
