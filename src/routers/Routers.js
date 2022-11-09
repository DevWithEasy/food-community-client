import { Route, Routes } from "react-router";
import AboutUs from "../component/AboutUs/AboutUs";
import ContactUs from "../component/ContactUs/ContactUs";
import Faq from "../component/Faq/Faq";
import Homepage from "../component/Homepage/Homepage";
import EditPost from "../component/Job/EditPost/EditPost";
import FindJob from "../component/Job/FindJob/FindJob";
import Job from "../component/Job/FindJob/JobDetails/Job";
import PostJob from "../component/Job/PostJob/PostJob";
import NotFound from "../component/NotFound/NotFound";
import FindPeople from "../component/People/FindPeople";
import PrivacyPolicy from "../component/PrivacyPolicy/PrivacyPolicy";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import ChangeEmail from "../component/User/ChangeEmailPassword/ChangeEmail";
import ChangePassword from "../component/User/ChangeEmailPassword/ChangePassword";
import LogIn from "../component/User/LogIn/LogIn";
import NewPassword from "../component/User/NewPassword/NewPassword";
import Profile from "../component/User/Profile/Profile";
import Registration from "../component/User/Registration/Registration";
import UnverifiedAccount from "../component/User/Verification/UnverifiedAccount";


const RouterManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/new_password" element={<NewPassword />} />
      <Route path="/find_people" element={<FindPeople />} />
      <Route path="/connect" element={<ContactUs />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route path="unverified_user" element={<UnverifiedAccount />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="change_password/:id" element={<ChangePassword />} />
        <Route path="change_email/:id" element={<ChangeEmail />} />
        <Route path="edit_post/:id" element={<EditPost />} />
        <Route path="post_job" element={<PostJob />} />
        <Route path="job_details/:id" element={<Job />} />
        <Route path="find_job" element={<FindJob />} />
        <Route path="find_people" element={<FindPeople />} />
      </Route>

    </Routes>
  );
};
export default RouterManager;
