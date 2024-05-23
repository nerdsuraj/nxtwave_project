import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
// import sideimage from '../assets/nxtwaveadd.png';

const AddResourceItem = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [iconUrl, setIconUrl] = useState('');
    const [tag, setTag] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && link && description && tag) {
            axios.post('https://media-content.ccbp.in/website/react-assignment/add_resource.json', {
                name,
                link,
                description,
                tag,
            })
                .then(response => {
                    console.log(response.data);
                    toast.success('Resource added successfully!');
                })
                .catch(error => {
                    toast.error('Failed to add resource!');
                });
        } else {
            toast.error('All fields are required!');
        }
    };

    return (
        <div>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    {/* Form Section */}
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="w-75">
                            <div className="mb-4">
                                <Link to="/">Users</Link> / Add New Item
                            </div>
                            <h2 className="mb-3">Item Details</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Item Title"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="Link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="Icon URL"
                                        value={iconUrl}
                                        onChange={(e) => setIconUrl(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tag Name"
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Description"
                                        rows="3"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 p-0" style={{
                        height: '90vh',
                        width: '100%',
                        maxWidth: '600px',
                        background: 'url(https://i.ibb.co/v1Hp5ws/nxtwaveadd.png) center center / cover no-repeat',
                        margin: 'auto',
                        display: 'block'
                    }}>
                    </div>
                </div>
                <ToastContainer position="bottom-center" />
            </div>
        </div>

    );
};

export default AddResourceItem;
