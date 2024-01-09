import { BsFillPostcardFill } from "react-icons/bs";
import { MdHome, MdPerson } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "LEVEL 1",
    layout: "/dashboard",
    icon: <FaBook className="h-6 w-6" />,
    path: "level-one",
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/catelog' },
    //   { title: '', path: '/catelog' },
    //   { title: 'coming soon', path: '/catelog' },
    // ],
  },
  {
    name: "LEVEL 2",
    layout: "/dashboard",
    icon: <FaBook className="h-6 w-6" />,
    path: "level-two",
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/catelog' },
    //   { title: '', path: '/catelog' },
    //   { title: 'coming soon', path: '/catelog' },
    // ],
  },
  {
    name: "LEVEL 3",
    layout: "/dashboard",
    icon: <FaBook className="h-6 w-6" />,
    path: "level-three",
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/catelog' },
    //   { title: '', path: '/catelog' },
    //   { title: 'coming soon', path: '/catelog' },
    // ],
  },
  {
    name: "LEVEL 4",
    layout: "/dashboard",
    icon: <FaBook className="h-6 w-6" />,
    path: "level-four",
    // submenu: true,
    // subMenuItems: [
    //   { title: 'All', path: '/catelog' },
    //   { title: '', path: '/catelog' },
    //   { title: 'coming soon', path: '/catelog' },
    // ],
  },
];

export default routes;
