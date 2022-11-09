import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJob } from '../../../../utils/JobHandler';
import HtmlView from '../../../others/HtmlView';

const Job = () => {
    const [job,setJob] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        getJob(id,setJob)
    },[id])
    const {title,company,vacancy,salary,location,workPlace,employeeStatus,jobContext,experience,education,additional,others,contact,lastDate} = job
    return (
        <div className='bg-blue-100 p-2'>
            <div className='p-2 bg-white rounded-lg space-y-2'>
                <p>{title}</p>
                <p>{company}</p>
                <p>{vacancy}</p>
                <p>{salary}</p>
                <p>{location}</p>
                <p>{workPlace}</p>
                <p>{employeeStatus}</p>
                <HtmlView html={jobContext}/>
                <HtmlView html={experience}/>
                <HtmlView html={education}/>
                <HtmlView html={additional}/>
                <HtmlView html={others}/>
                <HtmlView html={contact}/>
                <p>{new Date(lastDate).toDateString()}</p>

            </div>
        </div>
    );
};

export default Job;