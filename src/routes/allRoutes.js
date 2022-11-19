import React from "react"
import { Redirect } from "react-router-dom"

// // Pages Component
import Chat from "../pages/Chat/Chat"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import AdminHome from "../pages/AdminHome/index"
import StockHolderAdminHome from "../pages/StockHolderHome/index"

import StockHolderPost from "../pages/StockHolderPost/PostList/index"
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
import Event from "../pages/Event/index"



// Pages Calendar
import Calendar from "../pages/Calendar/index"

// //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index"
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail"
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index"
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index"
import EcommerceCart from "../pages/Ecommerce/EcommerceCart"
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout"
import EcommerceShops from "../pages/Ecommerce/EcommerceShops/index"
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct"

//Email
import EmailInbox from "../pages/Email/email-inbox"
import EmailRead from "../pages/Email/email-read"
import EmailBasicTemplte from "../pages/Email/email-basic-templte"
import EmailAlertTemplte from "../pages/Email/email-template-alert"
import EmailTemplateBilling from "../pages/Email/email-template-billing"

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list"
import InvoiceDetail from "../pages/Invoices/invoices-detail"

//Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid"
import ContactsList from "../pages/Contacts/ContactList/contacts-list"
import ContactsProfile from "../pages/Contacts/ContactsProfile/contacts-profile"

//Pages
import PagesStarter from "../pages/Utility/pages-starter"
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import PagesTimeline from "../pages/Utility/pages-timeline"
import PagesFaqs from "../pages/Utility/pages-faqs"
import PagesPricing from "../pages/Utility/pages-pricing"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

//Ui
import UiAlert from "../pages/Ui/UiAlert"
import UiButtons from "../pages/Ui/UiButtons"
import UiCards from "../pages/Ui/UiCards"
import UiCarousel from "../pages/Ui/UiCarousel"
import UiColors from "../pages/Ui/UiColors"
import UiDropdown from "../pages/Ui/UiDropdown"
import UiGeneral from "../pages/Ui/UiGeneral"
import UiGrid from "../pages/Ui/UiGrid"
import UiImages from "../pages/Ui/UiImages"
import UiLightbox from "../pages/Ui/UiLightbox"
import UiModal from "../pages/Ui/UiModal"
import UiOffcanvas from "../pages/Ui/UiOffcanvas"
import UiProgressbar from "../pages/Ui/UiProgressbar"
import UiPlaceholders from "../pages/Ui/UiPlaceholders"
import UiSweetAlert from "../pages/Ui/UiSweetAlert"
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions"
import UiTypography from "../pages/Ui/UiTypography"
import UiToasts from "../pages/Ui/UiToasts"
import UiVideo from "../pages/Ui/UiVideo"
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout"
import UiRating from "../pages/Ui/UiRating"
import UiRangeSlider from "../pages/Ui/UiRangeSlider"
import UiNotifications from "../pages/Ui/ui-notifications"
import UiImageCropper from "../pages/Ui/ui-image-cropper"

// Forms
import BasicElements from "../pages/Forms/BasicElements"
import FormLayouts from "../pages/Forms/FormLayouts"
import FormAdvanced from "../pages/Forms/FormAdvanced"
import FormEditors from "../pages/Forms/FormEditors"
import FormValidations from "../pages/Forms/FormValidations"
import FormMask from "../pages/Forms/FormMask"
import FormRepeater from "../pages/Forms/FormRepeater"
import FormUpload from "../pages/Forms/FormUpload"
import FormWizard from "../pages/Forms/FormWizard"
import FormXeditable from "../pages/Forms/FormXeditable"

//Tables
import BasicTables from "../pages/Tables/BasicTables"
import DatatableTables from "../pages/Tables/DatatableTables"
import ResponsiveTables from "../pages/Tables/ResponsiveTables"
import EditableTables from "../pages/Tables/EditableTables"

// Charts
import ChartApex from "../pages/Charts/Apexcharts"
import ChartjsChart from "../pages/Charts/ChartjsChart"
import EChart from "../pages/Charts/EChart"
import SparklineChart from "../pages/Charts/SparklineChart"
import ChartsKnob from "../pages/Charts/charts-knob"

//Icons

import IconUnicons from "../pages/Icons/IconUnicons"
import IconBoxicons from "../pages/Icons/IconBoxicons"
import IconDripicons from "../pages/Icons/IconDripicons"
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
import IconFontawesome from "../pages/Icons/IconFontawesome"

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle"
import MapsVector from "../pages/Maps/MapsVector"
import MapsLeaflet from "../pages/Maps/MapsLeaflet"

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
  { path: "/event", component: Event },

  { path: "/calendar", component: Calendar },

  //chat
  { path: "/chat", component: Chat },

  //Ecommerce
  { path: "/ecommerce-products", component: EcommerceProducts },
  { path: "/ecommerce-product-detail", component: EcommerceProductDetail },
  { path: "/ecommerce-products/:id", component: EcommerceProductDetail },
  { path: "/ecommerce-orders", component: EcommerceOrders },
  { path: "/ecommerce-customers", component: EcommerceCustomers },
  { path: "/ecommerce-cart", component: EcommerceCart },
  { path: "/ecommerce-checkout", component: EcommerceCheckout },
  { path: "/ecommerce-shops", component: EcommerceShops },
  { path: "/ecommerce-add-product", component: EcommerceAddProduct },

  //Email
  { path: "/email-inbox", component: EmailInbox },
  { path: "/email-read", component: EmailRead },
  { path: "/email-template-basic", component: EmailBasicTemplte },
  { path: "/email-template-alert", component: EmailAlertTemplte },
  { path: "/email-template-billing", component: EmailTemplateBilling },

  //Invoices
  { path: "/invoices-list", component: InvoicesList },
  { path: "/invoices-detail", component: InvoiceDetail },
  { path: "/invoices-detail/:id", component: InvoiceDetail },

  // Contacts
  { path: "/contacts-grid", component: ContactsGrid },
  { path: "/contacts-list", component: ContactsList },
  { path: "/contacts-profile", component: ContactsProfile },

  //Utility
  { path: "/pages-starter", component: PagesStarter },
  { path: "/pages-timeline", component: PagesTimeline },
  { path: "/pages-faqs", component: PagesFaqs },
  { path: "/pages-pricing", component: PagesPricing },

  // Ui
  { path: "/ui-alerts", component: UiAlert },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-colors", component: UiColors },
  { path: "/ui-dropdowns", component: UiDropdown },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-lightbox", component: UiLightbox },
  { path: "/ui-modals", component: UiModal },
  { path: "/ui-offcanvas", component: UiOffcanvas },
  { path: "/ui-progressbars", component: UiProgressbar },
  { path: "/ui-placeholders", component: UiPlaceholders },
  { path: "/ui-sweet-alert", component: UiSweetAlert },
  { path: "/ui-tabs-accordions", component: UiTabsAccordions },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-toasts", component: UiToasts },
  { path: "/ui-video", component: UiVideo },
  { path: "/ui-session-timeout", component: UiSessionTimeout },
  { path: "/ui-rating", component: UiRating },
  { path: "/ui-rangeslider", component: UiRangeSlider },
  { path: "/ui-notifications", component: UiNotifications },
  { path: "/ui-image-cropper", component: UiImageCropper },

  // Forms
  { path: "/basic-elements", component: BasicElements },
  { path: "/form-layouts", component: FormLayouts },
  { path: "/form-advanced", component: FormAdvanced },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-mask", component: FormMask },
  { path: "/form-repeater", component: FormRepeater },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-wizard", component: FormWizard },
  { path: "/form-validation", component: FormValidations },
  { path: "/form-xeditable", component: FormXeditable },

  // Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-responsive", component: ResponsiveTables },
  { path: "/tables-editable", component: EditableTables },

  //Charts
  { path: "/apex-charts", component: ChartApex },
  { path: "/chartjs-charts", component: ChartjsChart },
  { path: "/e-charts", component: EChart },
  { path: "/sparkline-charts", component: SparklineChart },
  { path: "/charts-knob", component: ChartsKnob },

  // Icons
  { path: "/icons-unicons", component: IconUnicons },
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-fontawesome", component: IconFontawesome },

  // Maps
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-vector", component: MapsVector },
  { path: "/maps-leaflet", component: MapsLeaflet },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    // component: () => <Redirect to="/dashboard" />
    component: () => <Redirect to="/admin" />
  },
];
// note the route is vice versa

const StakeHolderRoutes = [
  { path: "/admin", component: AdminHome },
  { path: "/admin-posts", component: StockHolderPost },
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