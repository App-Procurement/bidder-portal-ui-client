//prelogin routes
import HomePage from "../pages/PreLogin/HomePage";
import TypeOfTender from "../pages/PreLogin/Tender";
import TenderDetail from "../pages/PreLogin/TenderDetail";
import AdvancedSearch from "../pages/PreLogin/AdvanceSearch";
import TenderSearchBy from "../pages/PreLogin/TenderSearchBy";
import TenderStatusList from "../pages/PreLogin/TenderStatusList";
import Login from "../pages/PreLogin/Login";
// postlogin routes
import Dashboard from "../pages/PostLogin/Dashboard";
import TenderDetails from "../pages/PostLogin/TenderDetails";
import TenderStatus from "../pages/PostLogin/TenderStatus";
import TenderByClassification from "../pages/PostLogin/TenderByClassification";
import CorrigendumDetails from "../pages/PostLogin/CorrigendumDetails";
import AdvancedTender from "../pages/PostLogin/AdvancedSearch";
import CancelledRetendered from "../pages/PostLogin/CancelledRetendered";
import TendersInArchive from "../pages/PostLogin/TendersInArchive";
import Enrollment from "../pages/PostLogin/Enrollment";
import BidderEnrollment from "../pages/PreLogin/BidderEnrollment";
import TopCategories from "../pages/PreLogin/TopCategories";
import ActiveCorrigendum from "../pages/PreLogin/ActiveCorrigendums";
// import HomePage from "../pages/HomePage"

const routesPages = {
  preLogin: [
    { path: "/", exact: true, name: "Home Page", element: HomePage },
    {
      path: "/tender-search",
      exact: true,
      name: "Tender",
      element: TypeOfTender,
    },
    {
      path: "/login",
      exact: true,
      name: "Login",
      element: Login,
    },
    {
      path: "/search",
      exact: true,
      name: "Advanced Search",
      element: AdvancedSearch,
    },
    {
      path: "/tender-details/:type/:id",
      exact: true,
      name: "Tender Details",
      element: TenderDetail,
    },
    {
      path: "/bidder-enrollment",
      exact: true,
      name: "Bidder Enrollment",
      element: BidderEnrollment,
    },
    {
      path: "/top-categories",
      exact: true,
      name: "Top Categories",
      element: TopCategories,
    },
    {
      path: "/active-corrigendum",
      exact: true,
      name: "Active Corrigendum",
      element: ActiveCorrigendum,
    },
    {
      path: "/tender-search/:type",
      exact: true,
      name: "Tender Search By",
      element: TenderSearchBy,
    },
    {
      path: "/tender-status-list",
      exact: true,
      name: "Tender Status List",
      element: TenderStatusList,
    },
  ],
  postLogin: [
    { path: "/", exact: true, name: "Dashboard", element: Dashboard },
    {
      path: "/tender-status",
      exact: true,
      name: "TenderStatus",
      element: TenderStatus,
    },
    {
      path: "/tender-details",
      exact: true,
      name: "TenderDetails",
      element: TenderDetails,
    },
    {
      path: "/tender-by-classification",
      exact: true,
      name: "TenderByClassification",
      element: TenderByClassification,
    },
    {
      path: "/corrigendum-details",
      exact: true,
      name: "CorrigendumDetails",
      element: CorrigendumDetails,
    },
    {
      path: "/advanced-tender-search",
      exact: true,
      name: "AdvancedTender",
      element: AdvancedTender,
    },
    {
      path: "/cancelled-retendered",
      exact: true,
      name: "CancelledRetendered",
      element: CancelledRetendered,
    },
    {
      path: "/tenders-in-archive",
      exact: true,
      name: "TendersInArchive",
      element: TendersInArchive,
    },
    {
      path: "/enrollment",
      exact: true,
      name: "Enrollment",
      element: Enrollment,
    },
  ],
};

export default routesPages;
