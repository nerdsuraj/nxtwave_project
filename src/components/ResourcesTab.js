import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ResourceCard from './ResourceCard';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResourcesTab = () => {
    const [resources, setResources] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('resources');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
            .then(response => {
                console.log(response.data);
                setResources(response.data);
            })
            .catch(error => {
                console.error('Error fetching resources:', error);
            });
    }, []);

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('resources');
        } else if (location.pathname === '/requests') {
            setActiveTab('requests');
        } else if (location.pathname === '/users') {
            setActiveTab('users');
        }
    }, [location.pathname]);

    const filteredResources = resources.filter(resource => {
        if (activeTab === 'requests') {
            return resource.tag === 'request' && resource.title && resource.title.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (activeTab === 'users') {
            return resource.tag === 'user' && resource.title && resource.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return resource.title && resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Calculate number of pages
    const pageCount = Math.ceil(filteredResources.length / itemsPerPage);

    // Calculate the index of the first and last items on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredResources.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <button className={`btn ${activeTab === 'resources' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('resources')}>
                            Resources
                        </button>
                        <button className={`btn ${activeTab === 'requests' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setActiveTab('requests')}>
                            Requests
                        </button>
                        <button className={`btn ${activeTab === 'users' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('users')}>
                            Users
                        </button>
                    </div>
                </div>
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div className="row">
                    {currentItems.map(resource => (
                        <div className="col-md-4 mb-4" key={resource.id}>
                            <ResourceCard resource={resource} />
                        </div>
                    ))}
                </div>
                <nav>
                    <div className="d-flex justify-content-center">
                        <ul className='pagination'>
                            {Array.from({ length: pageCount }, (_, i) => (
                                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <a onClick={() => paginate(i + 1)} href="#!" className='page-link'>
                                        {i + 1}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default ResourcesTab;
