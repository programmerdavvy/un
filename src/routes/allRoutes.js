import React from "react"
import { Redirect } from "react-router-dom"

// // Pages Component

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import AdminHome from "../pages/AdminHome/index"
import StockHolderAdminHome from "../pages/StockHolderHome/index"

import StockHolderPost from "../pages/StockHolderPost/PostList/index"
import AdminPost from "../pages/SuperAdmin/PostList/index"

import AdminViewPost from "../pages/StockHolderPost/ViewPost/viewPost";
import AdminViewIncident from "../pages/StockHolderPost/ViewIncident/viewIncident";

import StakeHolderPostList from '../pages/SuperAdmin/StakeHolderPostList/index'
import StockHolderAddPost from "../pages/StockHolderPost/NewPost/index"
import StockHolderAddIncident from '../pages/StockHolderPost/NewIncident/index'
import StackHolderDocument from '../pages/StakeHolderDocument/index'
import StockHolderCategoryList from '../pages/StockHolderPost/CategoryList/index'
import StockHolderIncidentCategoryList from '../pages/SuperAdmin/IncidentCategoryList/index'

import StakeHolderReportedIncident from '../pages/StockHolderPost/ReportedIncident/index'
import SuperAdminIndividualSubmission from "../pages/SuperAdmin/IndividualIncident/index"
import SuperAdminOrganizationSubmission from "../pages/SuperAdmin/OrganizationSubmission/IndividualIncident/index"
import SuperAdminStatus from '../pages/SuperAdmin/Status/index'
import SuperAdminStakeHolder from '../pages/SuperAdmin/AdminStakeHolder/index'
import SuperAdminAddStakeHolder from '../pages/SuperAdmin/AddStakeHolder/index'
import SuperAdminOrganization from '../pages/SuperAdmin/Organization/index'
import SuperAdminEvent from '../pages/SuperAdmin/Event/index'
import SuperAdminNewEvent from '../pages/SuperAdmin/NewEvent/index'
import SuperAdminEventCategory from '../pages/SuperAdmin/EventCategory/index'
import SuperAminGallery from '../pages/SuperAdmin/Gallery/index'
import SuperAminAddGallery from "../pages/SuperAdmin/NewGallery/index"
import SuperAminGalleryCategory from '../pages/SuperAdmin/GalleryCategory/index'

import SuperAminVideoCategory from '../pages/SuperAdmin/VideoCategory/index'
import SuperAminAddVideoGallery from "../pages/SuperAdmin/NewVideo/index"
import SuperAminVideoGallery from '../pages/SuperAdmin/Video/index'
import SuperAminComment from '../pages/SuperAdmin/Comment/index'

import Home from "../pages/Home/index"
import About from "../pages/About/index"
import News from "../pages/News/index"
import NewsPage from "../pages/NewsPage/index"
import Footprints from "../pages/Footprints/index"
import Dangers from "../pages/Dangers/index"
import Index from "../pages/Index/index"
import Podcast from "../pages/Podcasts/index"
import ContactUs from "../pages/ContactUs/index"
import Resources from "../pages/Resources/index"
import Video from "../pages/Video/index"
import Picture from "../pages/Picture/index"
import ReportIncident from "../pages/ReportIncident/index"
import Track from "../pages/Track/index"


//Pages
import PagesStarter from "../pages/Utility/pages-starter"
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import PagesTimeline from "../pages/Utility/pages-timeline"
import PagesFaqs from "../pages/Utility/pages-faqs"
import PagesPricing from "../pages/Utility/pages-pricing"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

// Charts


//Icons

import IconUnicons from "../pages/Icons/IconUnicons"
import IconBoxicons from "../pages/Icons/IconBoxicons"
import IconDripicons from "../pages/Icons/IconDripicons"
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
import IconFontawesome from "../pages/Icons/IconFontawesome"


// Authentication related pages
import Login from "../pages/Authentication/Login"
import AdminLogin from "../pages/Authentication/AdminLogin"
import StakeHolderLogin from "../pages/Authentication/StakeholderLogin"

import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import AdminForgetPwd from "../pages/Authentication/AdminForgetPassword" 
import StakeholderForgetPwd from "../pages/Authentication/StakeholderForgetPassword"


//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Register1 from "../pages/AuthenticationInner/Register"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // superadmin route
  { path: "/home", component: Home },

  { path: "/about", component: About },
  { path: "/news", component: News },
  { path: "/news/:id/:title", component: NewsPage },
  { path: "/footprints", component: Footprints },
  { path: "/dangers", component: Dangers },
  { path: "/index", component: Index },
  { path: "/podcasts", component: Podcast },
  { path: "/contact-us", component: ContactUs },
  { path: "/resources", component: Resources },
  { path: "/videos", component: Video },
  { path: "/pictures", component: Picture },
  { path: "/report-incident", component: ReportIncident },
  { path: "/track", component: Track },

  //Utility
  { path: "/pages-starter", component: PagesStarter },
  { path: "/pages-timeline", component: PagesTimeline },
  { path: "/pages-faqs", component: PagesFaqs },
  { path: "/pages-pricing", component: PagesPricing },



  // Icons
  { path: "/icons-unicons", component: IconUnicons },
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-fontawesome", component: IconFontawesome }, 

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    // component: () => <Redirect to="/dashboard" />
    component: () => <Redirect to="/home" />
  },
];
// note the route is vice versa

const StakeHolderRoutes = [
  { path: "/admin", component: AdminHome },
  { path: "/admin-posts", component: AdminPost },
  { path: "/admin-edit-post/:id", component: StockHolderAddPost },
  { path: "/admin-view-post/:id", component: AdminViewPost },
  { path: "/admin-view-incident/:id", component: AdminViewIncident },

  { path: "/admin-new-post", component: StockHolderAddPost },
  { path: "/admin-new-incident", component: StockHolderAddIncident },
  { path: "/admin-categories", component: StockHolderCategoryList },
  { path: "/admin-incident-categories", component: StockHolderIncidentCategoryList },


  { path: "/individual-submission", component: SuperAdminIndividualSubmission },
  { path: "/organization-submission", component: SuperAdminOrganizationSubmission },
  { path: "/admin-status", component: SuperAdminStatus },
  { path: "/admin-stakeholder", component: SuperAdminStakeHolder },
  { path: "/stakeholder-post", component: StakeHolderPostList },


  { path: "/new-stakeholder", component: SuperAdminAddStakeHolder },
  { path: "/organization", component: SuperAdminOrganization },
  { path: "/events", component: SuperAdminEvent },

  { path: "/new-event", component: SuperAdminNewEvent },
  { path: "/event-category", component: SuperAdminEventCategory },
  { path: "/admin-gallery", component: SuperAminGallery },
  { path: "/new-gallery", component: SuperAminAddGallery },
  { path: "/gallery-category", component: SuperAminGalleryCategory },

  { path: "/admin-video", component: SuperAminVideoGallery },
  { path: "/new-video", component: SuperAminAddVideoGallery },
  { path: "/video-category", component: SuperAminVideoCategory },
  { path: "/admin-comments", component: SuperAminComment },
]
const superAdminRoutes = [
  { path: "/stakeholder", component: StockHolderAdminHome },
  { path: "/stakeholder-documents", component: StackHolderDocument },
  { path: "/posts", component: StockHolderPost },
  { path: "/edit-post/:id", component: StockHolderAddPost },
  { path: "/new-post", component: StockHolderAddPost },
  { path: "/new-incident", component: StockHolderAddIncident },
  { path: "/reported-incident", component: StakeHolderReportedIncident },
  { path: "/stakeholder-view-post/:id", component: AdminViewPost },
  { path: "/stakeholder-view-incident/:id", component: AdminViewIncident },

  { path: "/categories", component: StockHolderCategoryList },
]
const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/admin-login", component: AdminLogin },
  { path: "/stakeholder-login", component: StakeHolderLogin },

  { path: "/forgot-password", component: ForgetPwd },
  { path: "/admin-forgot-password", component: AdminForgetPwd },
  { path: "/stakeholder-forgot-password", component: StakeholderForgetPwd },

  { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-register", component: Register1 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/auth-lock-screen", component: LockScreen },
]

export { userRoutes, superAdminRoutes, StakeHolderRoutes, authRoutes }