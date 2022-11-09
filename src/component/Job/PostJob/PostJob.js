
import { useState } from "react";
import { postJob } from "../../../utils/JobHandler";
import EditorView from "../../others/Editor";
import InputView from "../../others/InputView";

const PostJob = () => {
  const [jobContext,setJobContext] = useState('')
  const [education,setEducation] = useState('')
  const [experience,setExperience] = useState('')
  const [additional,setAdditional] = useState('')
  const [others,setOthers] = useState('')
  const [contact,setContact] = useState('')

  const [post,setPost] = useState({
    title: '',
    company : '',
    location : '',
    vacancy : '',
    salary : '',
    employeeStatus : '',
    workPlace : '',
    lastDate : ''
  })

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };


  const data = ({...post,jobContext,education,experience,additional,others,contact})
  return <div className="bg-blue-100 p-2">
    <div className="bg-white px-2 pb-4 rounded-lg">
      <p className="px-2 pb-2">
      <span className="">Creat a Job post:</span><br />
      <span className="text-xs text-red-500">Please fill the all blank with correct information.</span>
      </p>
      <form className="space-y-2" onSubmit={(e)=>postJob(e,data)}>

        <InputView title="Title or Designation"
                  name="title"
                  placeholder="e.g. Factory Manager"
                  handleChange={handleChange}
        />
        <InputView title="Organization Name"
                  name="company"
                  placeholder="e.g. S&B Nice Food Vally Ltd"
                  handleChange={handleChange}
        />
        <InputView title="Organization Location"
                  name="location"
                  placeholder="e.g . Muhammad Ali Bazar,Feni Sadar Feni"
                  handleChange={handleChange}
        />
        <InputView title="Total Vacancy"
                  name="vacancy"
                  placeholder="e.g. 3"
                  handleChange={handleChange}
        />
        <InputView title="Salary ammount"
                  name="salary"
                  placeholder="e.g. 20000 or Negotiable"
                  handleChange={handleChange}
        />

        <div className="bg-gray-100 rounded">
          <label htmlFor="employeeStatus" className="p-1 text-sm">Employee Status : </label>
          <select name="employeeStatus" className="input" onChange={handleChange}>
            <option value="">Select status...</option>
            <option value="Fulltime">Full Time</option>
            <option value="Halftime">Half Time</option>
            <option value="Parttime">Part Time</option>
          </select>
        </div>
        <div className="bg-gray-100 rounded">
          <label htmlFor="workPlace" className="p-1 text-sm">Work Place : </label>
          <select name="workPlace" className="input" onChange={handleChange}>
            <option value="">Select place...</option>
            <option value="Work at office">Work at office</option>
            <option value="Work at field">Work at field</option>
            <option value="Work at anywhere">Work at anywhere</option>
          </select>
        </div>
          <EditorView setValue={setJobContext} label='Job Context' placeholder='Please enter here job contaxt'/>
          <EditorView setValue={setEducation} label='Education Requirment' placeholder='Please enter here Education Requirment'/>
          <EditorView setValue={setExperience} label='Experience Requirment' placeholder='Please enter here Experience Requirment'/>
          <EditorView setValue={setAdditional} label='Additional Requirment' placeholder='Please enter here Additional Requirment'/>
          <EditorView setValue={setOthers} label='Others Requirment' placeholder='Please enter here Others Requirment'/>
          <EditorView setValue={setContact} label='Contacts' placeholder='Please enter here email,phone,address'/>
        <div className="bg-gray-100 rounded">
          <label htmlFor="title" className="block pl-1 py-1 text-sm">Last Date : </label>
          <input
              type="date"
              name="lastDate"
              className="input"
              onChange={handleChange}
              required
          />
        </div>

        <input type="submit" value="Submit" className="mt-4 px-10 py-2 bg-blue-500 text-white rounded cursor-pointer"/>
      </form>
    </div>
  </div>;
};
export default PostJob;
