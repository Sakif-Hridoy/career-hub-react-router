import { useEffect, useState } from 'react';
import Job from '../Job/Job'


const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);

    const [dataLength,setDatalength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div className=''>
           <div className='text-center'>
           <h2 className='text-5xl '>Featured Jobs:{jobs.length}</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>

            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={()=>setDatalength(jobs.length)}className='btn btn-primary'>Show All Jobs</button>
            </div>

        </div>
    );
};

FeaturedJobs.propTypes = {
    
};

export default FeaturedJobs;