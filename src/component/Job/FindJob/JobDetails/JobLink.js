import React from 'react';
import { GoCalendar } from 'react-icons/go';
import { MdLocationOn} from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobLink = ({job}) => {
    return (
        <Link to={`/jobDetails/${job._id}`}
            className="block bg-gray-50 m-2 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
            <p className='text-blue-500 text-2xl font-semibold'>{job.title}</p>
            <p className='font-xl font-bold'>{job.company}</p>
            <p className='joblink-text'>
                <MdLocationOn/> 
                <span>{job.location}</span>
            </p>
            <div className='flex justify-between'>
                <p className='joblink-text'>
                    <GoCalendar/>
                    <span>Deadline: <span className='font-bold'>{new Date(job.lastDate).toDateString()}</span></span>
                </p>
            </div>
        </Link>
    );
};

export default JobLink;