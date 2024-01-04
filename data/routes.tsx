import { BsFillPostcardFill } from "react-icons/bs";
import { MdHome, MdLocalPostOffice, MdPerson } from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  ,
  {
    name: "Seek Help",
    layout: "/dashboard",
    icon: <MdLocalPostOffice className="h-6 w-6" />,
    path: "help",
  },
  {
    name: "Profile",
    layout: "/dashboard",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Post",
    layout: "/dashboard",
    path: "post",
    icon: <BsFillPostcardFill className="h-6 w-6" />,
  },
];

export default routes;
