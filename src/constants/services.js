import React from "react";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at leo sodales, luctus est faucibus, mattis magna. In commodo sollicitudin ex, non lobortis augue facilisis id.`,
  },
  {
    id: 2,
    icon: <FaPaintBrush className="service-icon" />,
    title: "Web Design",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at leo sodales, luctus est faucibus, mattis magna. In commodo sollicitudin ex, non lobortis augue facilisis id.`,
  },
  {
    id: 3,
    icon: <GiMagnifyingGlass className="service-icon" />,
    title: "SEO Optimization",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at leo sodales, luctus est faucibus, mattis magna. In commodo sollicitudin ex, non lobortis augue facilisis id.`,
  },
]
