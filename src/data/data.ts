import React from "react";
import { AiFillFileText } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import {
  //PiBinocularsFill,
  PiBuildingsFill,
  //PiCalculatorFill,
  PiCalendarBlankFill,
  PiCarDuotone,
  PiCarProfileDuotone,
  PiChartLineFill,
  // PiChartLineUpFill,
  // PiChatCenteredFill,
  // PiChatCircleFill,
  // PiCheck,
  PiCheckCircleFill,
  PiCheckSquareDuotone,
  PiCoinFill,
  PiDesktopDuotone,
  // PiDesktopFill,
  // PiDeviceMobileFill,
  PiEnvelopeFill,
  PiFileArchiveDuotone,
  PiFileFill,
  PiFileMagnifyingGlassDuotone,
  PiFilePlusFill,
  PiFileTextFill,
  PiGearFill,
  PiHandCoinsFill,
  PiHandshakeFill,
  PiHeadphonesFill,
  PiHeartbeatFill,
  PiLightbulbFilamentFill,
  PiMapPinFill,
  PiMoneyFill,
  // PiNotePencilBold,
  // PiNumberSquareThreeDuotone,
  // PiPaletteFill,
  PiPhoneCallBold,
  PiPhoneCallDuotone,
  PiPhoneCallFill,
  PiRocketLaunchFill,
  PiSealCheckFill,
  PiStarFill,
  PiTimerFill,
  PiToothFill,
  PiUserFill,
  PiUserGearFill,
  PiUserPlusFill,
  PiUsersThreeFill,
  PiWalletFill,
  PiWebhooksLogoFill,
  PiWhatsappLogo,
  //PiWhatsappLogoBold,
  PiWindowsLogoFill,
} from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";

//import whyMotorpediaCard1 from "/images/whyAccoupayCard_1.png";
import whyMotorpediaCard2 from "/images/noc.jpg";
import whyMotorpediaCard3 from "/images/cars12.jpg";
import whyMotorpediaCard4 from "/images/img2.jpg";
// import whyMotorpediaCard5 from "/images/whyAccoupayCard_5.png";
// import whyMotorpediaCard6 from "/images/whyAccoupayCard_6.png";

import testimonial1 from "/images/testimonial1.png";
import testimonial2 from "/images/testimonial2.png";
import testimonial3 from "/images/testimonial3.png";
import testimonial4 from "/images/testimonial4.png";
import testimonial5 from "/images/testimonial5.png";
import testimonial6 from "/images/testimonial6.png";
import testimonial7 from "/images/testimonial7.png";
import testimonial8 from "/images/testimonial8.png";

import blogImg1 from "/images/blogImg1.png";
import blogImg2 from "/images/blogImg2.png";
import blogImg3 from "/images/blogImg3.png";

import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiKite } from "react-icons/gi";
// import { HiCurrencyDollar } from "react-icons/hi2";
import { SlPlane } from "react-icons/sl";

import caseStudyImg1 from "/images/case_study_img1.png";
import caseStudyImg2 from "/images/case_study_img2.png";
import caseStudyImg3 from "/images/case_study_img3.png";
import caseStudyImg4 from "/images/case_study_img4.png";
import caseStudyImg5 from "/images/case_study_img5.png";
import caseStudyImg6 from "/images/case_study_img6.png";

import teamPic1 from "/images/team_image1.png";
import teamPic2 from "/images/team_image2.png";
import teamPic3 from "/images/team_image3.png";
import teamPic4 from "/images/team_image4.png";
import teamPic5 from "/images/team_image5.png";
import teamPic6 from "/images/team_image6.png";

// import productImg1 from "/images/produc_Img1.png";
// import productImg2 from "/images/produc_Img2.png";
// import productImg3 from "/images/produc_Img3.png";
// import productImg4 from "/images/produc_Img4.png";
// import productImg5 from "/images/produc_Img5.png";
// import productImg6 from "/images/produc_Img6.png";

import blogPageImg1 from "/images/blog_img1.png";
import blogPageImg2 from "/images/blog_img2.png";
import blogPageImg3 from "/images/blog_img3.png";
import blogPageImg4 from "/images/blog_img4.png";
import blogPageImg5 from "/images/blog_img5.png";
import blogPageImg6 from "/images/blog_img6.png";

import recentPostImg1 from "/images/recent_post_img1.png";
import recentPostImg3 from "/images/recent_post_img3.png";
import recentPostImg4 from "/images/recent_post_img4.png";
// import { TbMapPinSearch } from "react-icons/tb";
import {
  // SiPicardsurgeles,
  SiPivotaltracker,
  SiPrivateinternetaccess,
} from "react-icons/si";

export const headerMenu = [
  {
    id: uuidv4(),
    name: "Home",
    link: "/",
    isSubmenu: false,
  },
  {
    id: uuidv4(),
    name: "About Us",
    link: "/about",
    isSubmenu: false,
  },

  // {
  //   id: uuidv4(),
  //   name: "Contact Us",
  //   link: "/contact",
  //   isSubmenu: false,
  // },
  {
    id: uuidv4(),
    name: "Services",
    isSubmenu: true,
    submenu: [
      {
        id: uuidv4(),
        name: "All Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "DigitalizePro Services",
        link: "/services/DigitalizePro",
      },
      {
        id: uuidv4(),
        name: "RTO Services",
        link: "/services/RTO",
      },
      {
        id: uuidv4(),
        name: "Sale Enablement Services",
        link: "/services/saleEnablement",
      },
      // {
      //   id: uuidv4(),
      //   name: "Real State Services",
      //   link: "/services/real-state-services",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Healthcare Services",
      //   link: "/services/healthcare-services",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Dentist Services",
      //   link: "/services/dentist-services",
      // },
    ],
  },
  // {
  //   id: uuidv4(),
  //   name: "Shop",
  //   isSubmenu: true,
  //   submenu: [
  //     {
  //       id: uuidv4(),
  //       name: "Shop Page",
  //       link: "/shop",
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Shop Details",
  //       link: "/shop/shop-details",
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Cart",
  //       link: "/cart",
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Checkout",
  //       link: "/checkout",
  //     },
  //   ],
  // },

  // {
  //   id: uuidv4(),
  //   name: "Blog",
  //   isSubmenu: true,
  //   submenu: [
  //     {
  //       id: uuidv4(),
  //       name: "Blog Page",
  //       link: "/blog",
  //     },

  //     {
  //       id: uuidv4(),
  //       name: "Blog Details",
  //       link: "/blog-details",
  //     },
  //   ],
  // },

  {
    id: uuidv4(),
    name: "More",
    isSubmenu: true,
    submenu: [
      // {
      //   id: uuidv4(),
      //   name: "Appointment",
      //   link: "/appointment",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Case Study",
      //   link: "/case-study",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Case Study Detials",
      //   link: "/case-study/case-study-details",
      // },
      {
        id: uuidv4(),
        name: "Our Team",
        link: "/team",
      },
      // {
      //   id: uuidv4(),
      //   name: "Team Details",
      //   link: "/team/team-details",
      // },
      // {
      //   id: uuidv4(),
      //   name: "About",
      //   link: "/about",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Pricing",
      //   link: "/pricing",
      // },
      {
        id: uuidv4(),
        name: "FAQ Page",
        link: "/faq",
      },
      // {
      //   id: uuidv4(),
      //   name: "Login",
      //   link: "/login",
      // },
      // {
      //   id: uuidv4(),
      //   name: "Register",
      //   link: "/register",
      // },
      {
        id: uuidv4(),
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: uuidv4(),
        name: "Terms & Conditions",
        link: "/terms-conditions",
      },
      // {
      //   id: uuidv4(),
      //   name: "Error",
      //   link: "/error",
      // },
    ],
  },
];

export const socialLinks = [
  {
    id: uuidv4(),
    name: "Facebook",
    link: "#",
    icon: React.createElement(FaFacebookF),
  },
  {
    id: uuidv4(),
    name: "Twitter",
    link: "#",
    icon: React.createElement(FaXTwitter),
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    link: "#",
    icon: React.createElement(FaLinkedinIn),
  },
  {
    id: uuidv4(),
    name: "Instagram",
    link: "#",
    icon: React.createElement(FaInstagram),
  },
];

export const footerLinks = [
  {
    id: uuidv4(),
    name: "Resources",
    links: [
      {
        id: uuidv4(),
        name: "Home",
        link: "/",
      },
      {
        id: uuidv4(),
        name: "About",
        link: "/about",
      },

      {
        id: uuidv4(),
        name: "Blog",
        link: "/blog",
      },
      {
        id: uuidv4(),
        name: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Services",
    links: [
      {
        id: uuidv4(),
        name: "All Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "DigitalizePro Services",
        link: "/services/DigitalizePro",
      },
      {
        id: uuidv4(),
        name: "RTO Services",
        link: "/services/RTO",
      },
      {
        id: uuidv4(),
        name: "Sale Enablement Services",
        link: "/services/saleEnablement",
      },
      // {
      //   id: uuidv4(),
      //   name: "Dentist Services",
      //   link: "/services/dentist-services",
      // },
    ],
  },
];

export const getInTouch = [
  {
    id: uuidv4(),
    name: "Get In Touch",
    links: [
      {
        id: uuidv4(),
        name: "themotorpedia@gmail.com",
        link: "mailto:themotorpedia@gmail.com",
        isLink: true,
        icon: React.createElement(MdOutlineEmail),
      },
      {
        id: uuidv4(),
        name: "+91 99999-61887",
        isLink: true,
        link: "tel:+91 99999-61887",
        icon: React.createElement(PiPhoneCallBold),
      },
      {
        id: uuidv4(),
        name: "TR24, 3rd Floor, JMD Empire Square Mall, MG Road, Gurugram, Haryana, India - 122001",
        isLink: false,
        icon: React.createElement(MdOutlineLocationOn),
      },
    ],
  },
];

export const teamContactDetails = [
  {
    id: uuidv4(),
    name: "themotorpedia@gmail.com",
    link: "themotorpedia@gmail.com",
    icon: React.createElement(PiEnvelopeFill),
  },
  {
    id: uuidv4(),
    name: "+91 99999-61887",
    link: "tel:+91 99999-61887",
    icon: React.createElement(PiPhoneCallFill),
  },
  {
    id: uuidv4(),
    name: "TR24, 3rd Floor, JMD Empire Square Mall, MG Road, Gurugram, Haryana, India - 122001",
    link: "",
    icon: React.createElement(PiMapPinFill),
  },
];

export const solutionsFeatures = [
  {
    id: uuidv4(),
    name: "RTO Services",
    icon: React.createElement(AiFillFileText),
  },
  {
    id: uuidv4(),
    name: "Digitalization",
    icon: React.createElement(PiLightbulbFilamentFill),
  },
  {
    id: uuidv4(),
    name: "Procurement Solution",
    icon: React.createElement(PiHandCoinsFill),
  },

  {
    id: uuidv4(),
    name: "Sale Enablement",
    icon: React.createElement(PiRocketLaunchFill),
  },
];

export const featuresCard = [
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "RTO Assistance Network",
    desc: "Unorganized agent network catering to different RTO related needs.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    name: "Vendor Multiplicity",
    desc: "Leads to multiple vendors and often requires large, dedicated teams to efficiently manage them effectively",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserGearFill),
    name: "Uncertainty",
    desc: "The disorganized agent network leads to reliance on numerous vendors and lacks visibility on task completion dates",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserPlusFill),
    name: "Complexity",
    desc: "In addition, the absence of standardized billing procedures compliant with GST regulations adds further complexity",
  },
];

export const stepByStepCard = [
  {
    id: uuidv4(),
    title: "Native Dealership with limited horizon",
    desc: "The basic need of survival is evolution, but this quote doesn't feel apt when it comes to car dealerships. Nowadays too may dealerships follow native and prokaryotic practices with limited resources.",
    icon: React.createElement(PiFilePlusFill),
  },
  {
    id: uuidv4(),
    title: "Integrate Motorpedia's Tools",
    desc: "With Motorpedia Tool's integration, one can boost their performance using their hassle free services and dealer driven approach to help them grow!",
    icon: React.createElement(PiUserFill),
  },
  {
    id: uuidv4(),
    title: "Enhanced and easy dealing with more interactions",
    desc: "Retention rate and customer satisfaction increases after Motorpedia's Tools integration. The dealer find hassle free transfers and revolutionary services.",
    icon: React.createElement(PiHandCoinsFill),
  },
];

export const whyMotorpediaCard = [
  {
    id: uuidv4(),
    img: "/images/img1.jpeg",
    title: "Basic Ownership Transfer",
    des: "Ownership Transfer of your pre-owned vehicle within 3 days of opening with our trustworthy contacts.",
  },
  {
    id: uuidv4(),
    img: whyMotorpediaCard2,
    title: "Interstate NOC Issuance",
    des: "NOC Issuance for customers opting for it to engage them in stress free document approval.",
  },
  {
    id: uuidv4(),
    img: whyMotorpediaCard3,
    title: "Vehicle Permit Changes",
    des: "Permits for customers opting for it to engage them in stress free document approval.",
  },
  {
    id: uuidv4(),
    img: whyMotorpediaCard4,
    title: "Hypothecation Addition",
    des: "Navigate the financial landscape of automotive journey with our expert advisory services.",
  },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard1,
  //   title: "Fancy Number Booking",
  //   des: "Hire or relocate team member with in house visa support",
  // },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard2,
  //   title: "Challan Clearance",
  //   des: "Hire or relocate team member with in house visa support",
  // },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard3,
  //   title: "Insurance Transfer & Endorsement",
  //   des: "Hire or relocate team member with in house visa support",
  // },
  // {
  //   id: uuidv4(),
  //   img: whyMotorpediaCard4,
  //   title: "Scrap Vehicle Deregistration",
  //   des: "Hire or relocate team member with in house visa support",
  // },
];

export const faqs = [
  {
    id: uuidv4(),
    question: "What services does Motorpedia offer?",
    answer:
      "Motorpedia offers a comprehensive suite of services, including Ownership Transfer, Challan CLearance, VIP Numbers, Digitalization of Showrooms, and many more.",
  },
  {
    id: uuidv4(),
    question: "How does time does ownership transfer take?",
    answer:
      "Usually we try to do it in 24 hours but we take 24-48 hours as the window for the same.",
  },
  {
    id: uuidv4(),
    question: "Can Motorpedia handle interstate transfers?",
    answer: "Yes! We currently are active in UP, Haryana and Delhi.",
  },
  {
    id: uuidv4(),
    question: "How quickly can services be initiated?",
    answer: "As soon as you wish to!",
  },
  {
    id: uuidv4(),
    question: "How do I get in touch with Motorpedia's?",
    answer:
      "You can either write to us at themotorpedia@gmail.com or can even see us at TR24, JMD Empire Square, MG Road, Gurgaon-122001",
  },
];

export const testimonials = [
  {
    id: uuidv4(),
    img: testimonial1,
    name: "Ashok Shukla",
    designation: "Small Business Owner",
    review:
      "Outstanding service! Motorpedia RTO Services impressed me with their professionalism and expertise.",
  },
  {
    id: uuidv4(),
    img: testimonial2,
    name: "Priyanshu Kumar",
    designation: "HR Manager",
    review:
      "Impeccable service! Motorpedia   Affordable solutions, top-quality results.Highly recommended for all automotive needs.",
  },
  {
    id: uuidv4(),
    img: testimonial3,
    name: "Vinay Patel",
    designation: "Finance Director",
    review:
      "Remarkable service! Motorpedia showcased unparalleled professionalism and expertise. They're my go-to for all automotive needs. ",
  },
  {
    id: uuidv4(),
    img: testimonial4,
    name: "Vinit Sharma",
    designation: "CEO, Tech Innovations",
    review:
      "Their affordable rates and superior service quality make them my preferred option for all automotive needs. ",
  },
  {
    id: uuidv4(),
    img: testimonial5,
    name: "Lav Kush",
    designation: "Restaurant Owner",
    review:
      "Highly impressed and satisfied with their commitment to excellence. My go-to choice for all car servicing needs",
  },
  {
    id: uuidv4(),
    img: testimonial6,
    name: "Parveen Shekhawat",
    designation: "CEO, Tech Innovations",
    review:
      "Their cost-effective solutions and impeccable service quality make them my top recommendation for automotive needs.",
  },
  {
    id: uuidv4(),
    img: testimonial7,
    name: "Jiya Arya ",
    designation: "Product Manager",
    review:
      "Absolutely thrilled with the service! Motorpedia showed unmatched professionalism and expertise",
  },
  {
    id: uuidv4(),
    img: testimonial8,
    name: "Shreya Sharma",
    designation: "CFO, Solutions",
    review:
      " With their affordable solutions and top-notch service quality, they've earned my trust. I highly recommend them for reliable car assistance",
  },
];

export const pricing = [
  {
    id: uuidv4(),
    icon: React.createElement(GiKite),
    planName: "Basic Plan",
    desc: "Hire employees in 100+ countries where you don't have entities",
    isPopular: false,
    monthlyPrice: "10",
    features: [
      "Accurate and Timely",
      "Basic Financial Records",
      "Starting at $X per month",
    ],
  },
  {
    id: uuidv4(),
    icon: React.createElement(SlPlane),
    planName: "Standard Plan",
    desc: "All packages come with [mention any additional benefits, features, ",
    isPopular: true,
    monthlyPrice: "20",
    features: ["Payroll Processing", "Full Bookkeeping", "Tax Preparation"],
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsFillRocketTakeoffFill),
    planName: "Premium Plan",
    desc: "Explore our case studies to see how businesses like yours have benefited",
    isPopular: false,
    monthlyPrice: "40",
    features: ["Full Bookkeeping", "Tax Preparation", "Financial Advisory"],
  },
];

export const blogSection = [
  {
    id: uuidv4(),
    date: "Jan 15",
    title: "Streamlining Year-End Financial Reporting",
    img: blogImg1,
    desc: "Explore essential factors to consider when selecting payroll processing services. From compliance expertise ",
    category: "Taxation",
  },
  {
    id: uuidv4(),
    date: "Jan 16",
    title: "Best Practices for Employee Expense Management",
    img: blogImg2,
    desc: "Discover how technology is reshaping modern accounting practices. From automation to cloud-based solutions,",
    category: "Processing",
  },
  {
    id: uuidv4(),
    date: "Jan 1",
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogImg3,
    desc: "Identify and prevent common accounting mistakes with our insightful guide. Learn practical strategies.",
    category: "Taxation",
  },
];

export const contactCard = [
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiBinocularsFill),
  //   title: "Compare Motorpedia",
  //   desc: "Explore how Motorpedia stands out. Check our comparison.",
  //   linkText: "Compare Motorpedia",
  // },
  {
    id: uuidv4(),
    icon: React.createElement(PiDesktopDuotone),
    title: "Explore The Demo",
    desc: "Curious about our services? Request a demo to experience firsthand",
    linkText: "See Demo",
    linkto: "/contact",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiPhoneCallDuotone),
    title: "Give Us a Ring ",
    desc: "Monday through Friday from 11AM - 7PM IST ",
    linkText: "Call Us",
    linkto: "/contact",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWhatsappLogo),
    title: "Chat with us",
    desc: "Looking for answers? Chat with us and clear all your doubts",
    linkText: "Ping Us",
    linkto: "https://wa.me/9999961887",
  },
];

export const integrationsCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Best Payment Integrations",
    description:
      "With our best in class payment integrations, we strive to deliver best work at minimal cost.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(SiPrivateinternetaccess),
    title: "Online Brand Recognition",
    description:
      "With online recognition of your brand, you'll take the step ahead of everyone.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Most Integration Services",
    description:
      "We provide a huge pool of services ranging from ownership transfer to VIP numbers, you just name it!",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Time Efficient Solution",
    description:
      "Our hardworking team and trustworthy contact work timelssly to deliver the solution in least possible time so that you get to spent some more minutes enjoying your ride.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Best Customer Relationship",
    description:
      "Our testimonials are our laurels.With best in class Customer Support, we'd never let you down!",
  },
];

export const storyData = [
  {
    id: uuidv4(),
    title: "Who We Are",
    desc: "Motorpedia has been at the forefront of delivering innovative financial solutions. Our journey began with a vision to simplify financial processes for businesses of all sizes. Today, we stand proud as a trusted partner, ",
  },
  {
    id: uuidv4(),
    title: "Our Mission",
    desc: "Motorpedia is on a mission to empower businesses by providing reliable, efficient, and innovative financial services. We strive to be your go-to partner for all your accounting and payroll needs, enabling you to focus on what you do best.",
  },
  {
    id: uuidv4(),
    title: "Expert Team",
    desc: "Our team of experienced professionals brings a wealth of knowledge to every client interaction. From payroll processing to financial advisory, we have the expertise to guide your business.",
  },
];

export const ourValues = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Integrity",
    desc: "We are transparent and do the right thing for the right reason",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCheckCircleFill),
    title: "Accountability",
    desc: "We take ownership of outcomes and deliver on our commitments",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Diversity",
    desc: "We seek and leverage differences and unique perspectives",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Customer Centricity",
    desc: "We start with the customer in everything we do",
  },
];

export const awardsData = [
  {
    id: uuidv4(),
    name: "Awwwards SOTD",
    desc: "FOR DISPLAY 2022",
  },
  {
    id: uuidv4(),
    name: "Wix.com",
    desc: "INTERVIEW 2021",
  },
  {
    id: uuidv4(),
    name: "CSS Awards",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Muzli",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Awwwards",
    desc: "FOR MUTEZA 2019",
  },
  {
    id: uuidv4(),
    name: "Chapters Studio",
    desc: "FOR DISPLAY 2018",
  },
];

export const coreServices = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "DigitalizePro Services",
    link: "/services/DigitalizePro",
    desc: "Unlock the power of digital transformation with DigitalizePro Services. Elevate your online presence and streamline operations for maximum efficiency",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "RTO Services",
    link: "/services/RTO",
    desc: "Unorganized agent network catering to different RTO related needs. From Vehicle Regsitration to ownership transfer, we've got it all.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiFileFill),
    title: "Sale Enablement",
    link: "/services/saleEnablement",
    desc: "With our hassle free Sale Enablement Service you'll find ease in exploring Finance options, Insurance, Inventory Funding and many more.",
  },
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiBuildingsFill),
  //   title: "Real Estate Services",
  //   link: "/services/real-state-services",
  //   desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  // },
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiHeartbeatFill),
  //   title: "Healthcare Services",
  //   desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  //   link: "/services/healthcare-services",
  // },
  // {
  //   id: uuidv4(),
  //   icon: React.createElement(PiToothFill),
  //   title: "Dentist Services",
  //   link: "/services/dentist-services",
  //   desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  // },
];

export const whatWeDo = [
  {
    id: uuidv4(),
    title: "Target Audience Identification",
    desc: "Pinpoint your ideal customer base through thorough market analysis and demographic research, ensuring precise targeting for effective lead generation",
  },
  {
    id: uuidv4(),
    title: "Engaging Content Creation",
    desc: "Craft compelling and relevant content tailored to your audience's needs and preferences, capturing their attention and encouraging them to take action",
  },
  {
    id: uuidv4(),
    title: "Multi-Channel Promotion",
    desc: "Utilize a variety of digital channels such as social media, email marketing, SEO, and PPC advertising to reach potential leads wherever they may be online",
  },
  {
    id: uuidv4(),
    title: "Data-Driven Optimization",
    desc: "Continuously analyze and refine your lead generation strategies based on real-time data insights, maximizing efficiency and ROI for sustainable business growth",
  },
];

export const accountingServices = [
  {
    id: uuidv4(),
    title: "Ownership Transfer",
    desc: "Ownership Transfer of your pre-owned vehicle within 3 days of opening with our trustworthy contacts.",
    icon: React.createElement(PiCarDuotone),
  },
  {
    id: uuidv4(),
    title: "Vehicle Regsitration",
    desc: "From registring your vehicle or buying your new vehicle, Motorpedia provides hassle free path.",
    icon: React.createElement(PiFileTextFill),
  },
  {
    id: uuidv4(),
    title: "Challan Clearance and Fancy Numbers",
    desc: "Challan Clearance and Fancy Numbers for our customers at the earliest convience. ",
    icon: React.createElement(PiMoneyFill),
  },
  {
    id: uuidv4(),
    title: "NOC Issuance",
    desc: "NOC Issuance for customers opting for it to engage them in stress free document approval.",
    icon: React.createElement(PiFileArchiveDuotone),
  },
];

export const neverWorry = [
  {
    id: uuidv4(),
    title: "Hypothecation Addition",
    desc: "We resolve issues and offer advice quickly.",
    icon: React.createElement(PiFilePlusFill),
  },

  {
    id: uuidv4(),
    title: "HSPR Booking",
    desc: "We proactiveily work in the domain of HSPR Booking",
    icon: React.createElement(PiCheckSquareDuotone),
  },
  {
    id: uuidv4(),
    title: "Vehicle Fitness and Tracking Device Fitment",
    desc: "Your one stop place for fitness certificate and Tracking device fitment.",
    icon: React.createElement(SiPivotaltracker),
  },
  {
    id: uuidv4(),
    title: "Prompt Renewal Services",
    desc: "Efficient renewal solutions.",
    icon: React.createElement(PiCarProfileDuotone),
  },
];

export const accountantFeatures = [
  {
    id: uuidv4(),
    title: "Receipt and Clearance Certificate",
    desc: "Upon successful verification, customers receive a receipt of payment and a clearance certificate stating that all outstanding challans have been cleared.",
  },
  {
    id: uuidv4(),
    title: "Identification of Outstanding Challans",
    desc: "The first step is to identify any outstanding challans (traffic violation tickets) associated with the vehicle or the driver.",
  },
  {
    id: uuidv4(),
    title: "Verification",
    desc: " After payment is made, the RTO or motorworks service center verifies the clearance of the challans by checking with the respective authorities or online portals.",
  },
];

export const taxationFeatures = [
  {
    id: uuidv4(),
    title: "Tax Preparation and Filing",
    desc: "Ensure a seamless tax season with our expert tax preparation services. We handle all necessary documentation and filing requirements,",
    icon: React.createElement(PiCoinFill),
  },
  {
    id: uuidv4(),
    title: "Strategic Tax Planning",
    desc: "Plan for the future with our strategic tax planning services. We help optimize your financial decisions to maximize savings and minimize potential risks.",
    icon: React.createElement(PiHandCoinsFill),
  },
  {
    id: uuidv4(),
    title: "Compliance Assurance",
    desc: "Stay compliant with ever-changing tax regulations. Our team stays abreast of updates, ensuring your business adheres to all relevant tax laws",
    icon: React.createElement(PiSealCheckFill),
  },
  {
    id: uuidv4(),
    title: "Audit Support",
    desc: "In the event of an audit, our experienced team provides support, helping you navigate the process efficiently and effectively.",
    icon: React.createElement(PiHeadphonesFill),
  },
];

export const whtaWeDoTaxationData = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Expert Tax Professionals",
    desc: "Our team of tax professionals brings extensive knowledge and expertise to handle various tax scenarios.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Personalized Consultations",
    desc: "We understand that every business is unique. Our personalized consultations ensure that our tax services.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiLightbulbFilamentFill),
    title: "Strategic Advice",
    desc: "Beyond compliance, we offer strategic advice to help you make informed financial decisions that benefit your business.",
  },
];

export const realStateFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiBuildingsFill),
    title: "Property Management",
    desc: "Effortlessly manage your properties with our professional property management services. From tenant relations to maintenance, ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Investment Analysis",
    desc: "Make informed investment decisions with our detailed investment analysis. Our experts assess potential properties and provide insights to guide",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Real Estate Transactions",
    desc: "Navigate real estate transactions with confidence. Our team facilitates smooth buying, selling, or leasing processes,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Lease Administration",
    desc: "Streamline lease management with our lease administration services. We handle documentation, renewals,",
  },
];

export const servicesFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Commissions Made Easy",
    desc: "Whether admin or agent, employee or contractor, run unlimited payrolls for your team in just a few clicks.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Time-Saving Workflows",
    desc: "Employees can access earnings, check their paystubs, and add expenses, at the office or on the go.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiStarFill),
    title: "Worry-free work",
    desc: "Never stress about late or incorrect payments again. With Gusto, payroll is accurate, efficient.",
  },
];

export const healthCareFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Payroll for Healthcare Professionals",
    desc: "Efficient payroll processing tailored to the unique needs of healthcare professionals. Ensure accurate and timely compensation",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiGearFill),
    title: "Compliance Management",
    desc: "Stay compliant with ever-evolving healthcare regulations. Our services include compliance management to ensure your practice",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeartbeatFill),
    title: "Financial Advisory for Healthcare Practices",
    desc: "Navigate the financial landscape of automotive journey with our expert advisory services. From budgeting to strategic planning.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Healthcare Consulting",
    desc: "Receive personalized consulting services to address the unique challenges of your healthcare practice.",
  },
];

export const manageHealthItems = [
  {
    id: uuidv4(),
    icon: React.createElement(PiFileMagnifyingGlassDuotone),
    title: "Legal Clearance",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Compliance Verification",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWalletFill),
    title: "Documentation",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiChartLineFill),
    title: "Vehicle History Check",
  },
];

export const dentistSectionFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Targeted Advertising",
    desc: " Reach potential car buyers precisely where they are, leveraging advanced targeting tools to maximize exposure and engagement.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Compelling Content Creation",
    desc: "Captivate audiences with visually stunning imagery, informative videos, and persuasive copywriting, enticing them to explore your inventory further.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Search Engine Optimization (SEO)",
    desc: "Enhance your website's visibility on search engines, ensuring that your car listings rank prominently for relevant search queries.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Social Media Engagement",
    desc: " Leverage the power of social media platforms to build brand awareness, engage with potential buyers, and showcase your inventory in an interactive and appealing manner",
  },
];

export const whyCooseUs = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Dental Industry Expertise",
    desc: "Our team understands the specific needs and challenges of the dental industry, providing tailored solutions.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeadphonesFill),
    title: "Financial Support",
    desc: "Beyond payroll, we offer a range of financial services to support the overall health of your dental practice.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWebhooksLogoFill),
    title: "Technology Integration",
    desc: "Stay ahead with technology-driven solutions that enhance efficiency and compliance in the dental care sector.",
  },
];

export const caseStudies = [
  {
    id: uuidv4(),
    img: caseStudyImg1,
    name: "Tax Compliance Simple",
  },
  {
    id: uuidv4(),
    img: caseStudyImg2,
    name: "Automated Payroll Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg3,
    name: "A Payroll Case Study",
  },
  {
    id: uuidv4(),
    img: caseStudyImg4,
    name: "Payroll Income Business",
  },
  {
    id: uuidv4(),
    img: caseStudyImg5,
    name: "Accounting Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg6,
    name: "Payroll Outsourcing Center",
  },
];

export const teamList = [
  {
    id: uuidv4(),
    name: "Bess Collins",
    designation: "Web Designer",
    img: teamPic1,
  },
  {
    id: uuidv4(),
    name: "Micheal James",
    designation: "Accountant",
    img: teamPic2,
  },
  {
    id: uuidv4(),
    name: "Dean Obrien",
    designation: "Tax Specialist",
    img: teamPic3,
  },
  {
    id: uuidv4(),
    name: "Maggie Clark",
    designation: "Manager",
    img: teamPic4,
  },
  {
    id: uuidv4(),
    name: "Rosalie Chapman",
    designation: "Product Manager",
    img: teamPic5,
  },
  {
    id: uuidv4(),
    name: "Verna Gutierrez",
    designation: "CEO, Motorpedia",
    img: teamPic6,
  },
];

export const caseStudySidebar = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    name: "Client",
    desc: "David Warner",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCalendarBlankFill),
    name: "Date",
    desc: "15 - January - 2024",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWindowsLogoFill),
    name: "Category",
    desc: "DigitalizePro",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Location",
    desc: "Garuda, 99 INA",
  },
];

export const teamSkills = [
  {
    id: uuidv4(),
    name: "Web Design",
    percentage: 70,
  },
  {
    id: uuidv4(),
    name: "Mobile App Design",
    percentage: 80,
  },
  {
    id: uuidv4(),
    name: "UI/UX Design",
    percentage: 85,
  },
];

export const shopPage = [
  {
    id: uuidv4(),
    img: "",
    name: "",
    price: "",
  },
  //   {
  //     id: uuidv4(),
  //     img: productImg2,
  //     name: "Online Courses",
  //     price: "637",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg3,
  //     name: "Payroll Processing Tools",
  //     price: "948",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg4,
  //     name: "Educational Resources",
  //     price: "402",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg5,
  //     name: "Templates and Forms",
  //     price: "782",
  //   },
  //   {
  //     id: uuidv4(),
  //     img: productImg6,
  //     name: "Tax Compliance",
  //     price: "573",
  //   },
];

export const blogList = [
  {
    id: uuidv4(),
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogPageImg1,
    date: "Jan 15",
    tag: "Accounting",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Best Practices for Employee Expense Management",
    img: blogPageImg2,
    date: "Jan 16",
    tag: "Payroll Processing",
    desc: "Explore comprehensive strategies to fortify data security in your accounting operations. ",
  },
  {
    id: uuidv4(),
    title: "Payroll Outsourcing vs. In-House Processing",
    img: blogPageImg3,
    date: "Jan 14",
    tag: "Remote Work",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Streamlining Year-End Financial Reporting",
    img: blogPageImg4,
    date: "Jan 19",
    tag: "Software",
    desc: "Uncover the pros and cons of payroll outsourcing and in-house processing. Delve into cost considerations,",
  },
  {
    id: uuidv4(),
    title: "Ensuring Data Security in Your Accounting Practices",
    img: blogPageImg5,
    date: "Jan 25",
    tag: "Taxation",
    desc: "Discover expert strategies for optimizing employee expense management.",
  },
  {
    id: uuidv4(),
    title: "The Impact of Remote Work on Payroll Processing.",
    img: blogPageImg6,
    date: "Jan 13",
    tag: "Planning",
    desc: "Embark on a journey through the transformative growth of cloud-based accounting solutions.",
  },
];

export const blogCategories = [
  {
    id: uuidv4(),
    name: "Accounting",
    count: "6",
  },
  {
    id: uuidv4(),
    name: "Business",
    count: "4",
  },
  {
    id: uuidv4(),
    name: "Finance",
    count: "8",
  },
  {
    id: uuidv4(),
    name: "Invest",
    count: "3",
  },
  {
    id: uuidv4(),
    name: "DigitalizePro",
    count: "2",
  },
  {
    id: uuidv4(),
    name: "Taxation",
    count: "5",
  },
];

export const recentPost = [
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 15",
    title: "Learn About Payroll Processing Essentials",
  },
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 10",
    title: "Financial Management Strategies People Use",
  },
  {
    id: uuidv4(),
    img: recentPostImg3,
    date: "December 8",
    title: "Recent Industry News and Updates",
  },
  {
    id: uuidv4(),
    img: recentPostImg4,
    date: "December 20",
    title: "Innovations in Accounting Software",
  },
];

export const contactPageCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiEnvelopeFill),
    name: "Write to Us",
    linkText: "themotorpedia@gmail.com",
    link: "mailto:themotorpedia@gmail.com",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiPhoneCallFill),
    name: "Contact Us",
    linkText: "+91 99999-61887",
    link: "tel:+91 99999-61887",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Visit Our Office",
    address:
      "TR24, 3rd Floor, JMD Empire Square Mall, MG Road, Gurugram, Haryana, India - 122001",
  },
];

export const blogTags = [
  {
    id: uuidv4(),
    name: "Payroll",
  },
  {
    id: uuidv4(),
    name: "Software",
  },
  {
    id: uuidv4(),
    name: "RTO",
  },
  {
    id: uuidv4(),
    name: "Solutions",
  },
  {
    id: uuidv4(),
    name: "Planning",
  },
  {
    id: uuidv4(),
    name: "Finance",
  },
  {
    id: uuidv4(),
    name: "Tax",
  },
];
