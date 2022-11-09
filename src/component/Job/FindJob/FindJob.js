import { useEffect, useState } from "react";
import { getAllJob } from "../../../utils/JobHandler";
import Loading from "../../others/Loading";
import JobLink from "./JobDetails/JobLink";

const FindJob = () => {
  const [jobs,setJobs]=useState([])
  useEffect(() => {
    getAllJob(setJobs)
  }, []);

  return <>
    {
      jobs.length>0 ?
      jobs.map((job,index)=><JobLink key={index} job={job}/>)
      :
      <Loading/>
    }
  </>;
};
export default FindJob;
