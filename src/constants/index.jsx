import { FaCity, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  project1,
  project2,
  project3,
  project4,
  service1,
  service2,
  service3,
  service4,
} from "@/assets/images";

export const navLinks = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "services",
  },
  {
    id: 2,
    name: "projetcs",
  },
  {
    id: 3,
    name: "pages",
    pageLinks: [
      {
        id: 0,
        title: "about us",
        href: "about-us",
      },
      {
        id: 1,
        title: "faqs",
        href: "faqs",
      },
    ],
  },
  {
    id: 4,
    name: "infos",
  },
  {
    id: 5,
    name: "contact",
  },
];

export const services = [
  {
    id: 0,
    icon: service1,
    descr: "Discover More on Latest SEO Trends",
  },
  {
    id: 1,
    icon: service2,
    descr: "Real-Time Big Data Analysis",
  },
  {
    id: 2,
    icon: service3,
    descr: "Precise Data Analysis & Prediction",
  },
  {
    id: 3,
    icon: service4,
    descr: "SEO Marketing & Social Media",
  },
];
export const projects = [
  {
    id: 0,
    icon: project1,
    descr: "Discover More on Latest SEO Trends",
  },
  {
    id: 1,
    icon: project2,
    descr: "Real-Time Big Data Analysis",
  },
  {
    id: 2,
    icon: project3,
    descr: "Precise Data Analysis & Prediction",
  },
  {
    id: 3,
    icon: project4,
    descr: "SEO Marketing & Social Media",
  },
];
export const offers = [
  {
    id: 0,
    title: "Marketing",
    percentg: "90%",
  },
  {
    id: 1,
    title: "Ditigal Media",
    percentg: "55%",
  },
  {
    id: 2,
    title: "Social Media Managing",
    percentg: "70%",
  },
];

export const dataInputs = [
  {
    id: 0,
    type: "text",
    name: "Name",
    placeholder: "Your Name",
  },
  {
    id: 1,
    type: "text",
    name: "Surname",
    placeholder: "Your Surname",
  },
  {
    id: 2,
    type: "email",
    name: "E-mail",
    placeholder: "Your E-mail",
  },
  {
    id: 3,
    type: "text",
    name: "Subject",
    placeholder: "Your Subject",
  },
];
export const dataContant = [
  {
    id: 0,
    icon: <FaPhone />,
    text: "+963-940043810",
  },
  {
    id: 1,
    icon: <FaEnvelope />,
    text: `
    saeedaltoutsy@gmail.com`,
  },
  {
    id: 3,
    icon: <FaCity />,
    text: `Al-arab Stree | Douma - Rif Damascus - Syria`,
  },
];
