import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=>job.id === idInt)
    console.log(job)

    return (
        <div>
            <h2>Job Details of:</h2>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className='text-4xl'>Details coming here</h2>
                </div>
                <div className='border'>
                    <h2 className="text-2xl">Side Yhins</h2>
                    <button className='btn btn-primary'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;