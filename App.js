// App.js
import "./App.css";

// import Test from './Component/Test';
// import Dasbord from './Component/Dasboard/Dasbord';
import AdminSignin from "./Component/Admin/AdminSignin";
import SceheduleRota from "./Component/Admin/SceheduleRota";
import Rota from "./Component/Admin/Rota";
import Roster from "./Component/Admin/Roster";
import SubSummary from "./Component/Admin/SubSummary";
import Profile from "./Component/Admin/Profile";
import Notification from "./Component/Admin/Notification";
import Payment from "./Component/Admin/Payment";
import PaymentSystem from "./Component/Admin/PaymentSystem";
import Invioce from "./Component/Admin/Invioce";
import DriverDeduction from "./Component/Admin/DriverDeduction";
import Summary from "./Component/Admin/Summary";
import AddServices from "./Component/Admin/AddServices";
import Manchester from './Component/Admin/Manchester';
import Rochdale from './Component/Admin/Rochdale';
import Bolton from './Component/Admin/Bolton'
// osite mannager 
import OnSiteSignin from "./Component/OnSiteMannager/OnSiteSignin";
import OnSiteRota from "./Component/OnSiteMannager/OnSiteRota";
import OnSiteDriverDeduction from "./Component/OnSiteMannager/OnSiteDriverDeduction";
// import Roster from "./Component/OnSiteMannager/ros";

// osite mannager 

// super admin 
  import SuperAdminSignin from "./Component/SuperAdmin/SuperAdminSignin";
  import SuperAdminSubSummary from "./Component/SuperAdmin/SuperAdminSubSummary";
  import SuperAdminProfile from './Component/SuperAdmin/SuperAdminProfile'
  import SuperAdminNotification from './Component/SuperAdmin/SuperAdminNotification'
  import SuperAdminPayment from './Component/SuperAdmin/SuperAdminPayment'
  import SuperAdminDriverDeduction from './Component/SuperAdmin/SuperAdminDriverDeduction'
  // super admin 

  // fleet mannager 
import FleetSignin from './Component/FleetMannager/FleetManngerSignin'
import FleetModule from './Component/FleetMannager/FleetModule'
import AddToFleet from './Component/FleetMannager/AddToFleet'
  // fleet mannager 

//  real time data 
import RealTimeData from './/Component/Admin/RealTimeData'
//  real time data 

  import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
    
        <Route path="/" element={<AdminSignin />} />

        <Route path="/SceheduleRota" element={<SceheduleRota />} />
        <Route path="/Roster" element={<Roster />} />
        <Route path="/Rota" element={<Rota />} />
        <Route path="/Manchester" element={<Manchester/>} />
        <Route path="/Rochdale" element={< Rochdale/>} />
        <Route path="/Bolton" element={<Bolton/>} />
        <Route path="/subsummary" element={<SubSummary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/PaymentSystem" element={<PaymentSystem />} />
        <Route path="/Invioce" element={<Invioce />} />
        <Route path="/driverdeduction" element={<DriverDeduction />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/addservices" element={<AddServices />} />

        {/* on site  */}
        <Route path="/OnSiteSignin" element={<OnSiteSignin />} />
        <Route path="/OnSiteRota" element={<OnSiteRota />} />
        <Route path="/OnSiteDriverDeduction" element={<OnSiteDriverDeduction />} />
       
     
        {/* on site  */}

        {/* super admin  */}

      <Route path="/SuperAdminSignin" element={<SuperAdminSignin/>}/>
      <Route path="/SuperAdminSubSummary" element={<SuperAdminSubSummary />}/>
      <Route path="/SuperAdminProfile" element={<SuperAdminProfile />}/>
      <Route path="/SuperAdminNotification" element={<SuperAdminNotification />}/>
      <Route path="/SuperAdminPayment" element={<SuperAdminPayment />}/>
      <Route path="/SuperAdminDriverDeduction" element={<SuperAdminDriverDeduction />}/>
       
        {/* super admin  */}

{/* fleet Module */}
<Route path="/FleetManngerSignin" element={<FleetSignin />}/>
<Route path="/FleetModule" element={<FleetModule/>}/>
<Route path="/AddToFleet"  element={<AddToFleet />}/>

{/* fleet Module */}


{/* real time data  */}

<Route path="/RealTimeData" element={<RealTimeData/>} />
      
{/* real time data  */}
      </Routes>
    </>
  );
}

export default App;
