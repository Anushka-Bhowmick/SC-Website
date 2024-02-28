import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
    useDocTitle('CSBS');

    const teamMembers = [
        {
            name: "John Doe",
            position: "Software Engineer",
            github: "https://github.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_MWSTBam7iu0u5hQXhikxUgxmBUJlMgXDneBXZD7vg&s" // Add image URL here
        },
        {
            name: "Jane Smith",
            position: "UI/UX Designer",
            github: "https://github.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            imageUrl: "https://t4.ftcdn.net/jpg/05/65/03/07/360_F_565030780_MJFjXUq0AtPgowlwkNjBOZ44fBtRnWMF.jpg" // Add image URL here
        },
        {
            name: "Jane Smith",
            position: "UI/UX Designer",
            github: "https://github.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            imageUrl: "https://t4.ftcdn.net/jpg/05/65/03/07/360_F_565030780_MJFjXUq0AtPgowlwkNjBOZ44fBtRnWMF.jpg" // Add image URL here
        },{
            name: "Jane Smith",
            position: "UI/UX Designer",
            github: "https://github.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            imageUrl: "https://t4.ftcdn.net/jpg/05/65/03/07/360_F_565030780_MJFjXUq0AtPgowlwkNjBOZ44fBtRnWMF.jpg" // Add image URL here
        },{
            name: "Jane Smith",
            position: "UI/UX Designer",
            github: "https://github.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            imageUrl: "https://t4.ftcdn.net/jpg/05/65/03/07/360_F_565030780_MJFjXUq0AtPgowlwkNjBOZ44fBtRnWMF.jpg" // Add image URL here
        },{
            name: "Jane Smith",
            position: "UI/UX Designer",
            github: "https://github.com/janesmith",
            linkedin: "https://linkedin.com/in/janesmith",
            imageUrl: "https://t4.ftcdn.net/jpg/05/65/03/07/360_F_565030780_MJFjXUq0AtPgowlwkNjBOZ44fBtRnWMF.jpg" // Add image URL here
        },
        // Add more team members as needed
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 contact-container">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Meet the Team</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="glass-card">
                                <div className="text-center mb-4">
                                    <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                    <h2 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h2>
                                    <p className="text-gray-500 mb-2">{member.position}</p>
                                </div>
                                <div className="flex justify-center">
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-900 hover:text-gray-700">
                                        <FaGithub className="text-lg" />
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-gray-700">
                                        <FaLinkedin className="text-lg" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
