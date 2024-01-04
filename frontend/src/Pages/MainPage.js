import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

const MainPage = ()=>{
  // const navigate = useNavigation();

  return (
    <>
      <MainNavigation />
      {/* {navigate.state==='loading' && <div>Loading....</div>} */}
      <Outlet />
    </>
  )
};

export default MainPage;