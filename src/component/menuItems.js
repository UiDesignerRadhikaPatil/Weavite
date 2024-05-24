import {  MdCancelPresentation } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { MdPeople } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiHome2Fill, RiDashboardFill, RiBook2Fill, RiCalculatorLine, RiPriceTag3Fill, RiListOrdered2  } from "react-icons/ri";


export const menuItems = [
  {
    title: "Home",
    icon: <RiHome2Fill />,
    path: "home"
  },
  {
    title: "Dashboard",
    path: "dashboard",
    icon: <RiDashboardFill />,
   
  },
  {
    title: "Loom Details",
    path: "loomdetails",
    icon: <MdCancelPresentation />,
   
  },
  {
    title: "Loom Booking",
    path: "loomBooking",
    icon: <RiBook2Fill />,
   
  },
  {
    title: "Job Work Enquiry",
    icon: <BsPersonWorkspace />,
    path: "jobwork-enquiry"
  },
  {
    title: "Live Orders",
    icon: <RiListOrdered2 />,
    path: "live-orders"
  },
  {
    title: "Cancelled Orders",
    icon: <MdCancelPresentation />,
    path: "cancelled-order"
  },
  {
    title: "Get Yarn Rates",
    icon: <RiPriceTag3Fill />,
    path: "get-yarn"
  },
  {
    title: "Calculation",
    icon: <RiCalculatorLine />,
    path: "calculation"
  },
  {
    title: "Completed Orders",
    icon: <GrCompliance />,
    path: "completed-orders"
  },
  {
    title: "Human Resource",
    icon: <MdPeople />,
    path: "human-resource"
  }
];

