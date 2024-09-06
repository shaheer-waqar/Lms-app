import { PiStudentFill,PiExam } from "react-icons/pi";
import { GiTeacher,GiNotebook } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";






export const LinksData = [
    {
        label:"Student",
        icons:<PiStudentFill/>,
        links:[
            {
                name:"student registration",
                path:"/register-student",
            },
            {
                name:"student list",
                path:"/student-list",
            }
        ],
    },
    {
        label:"Teachers",
        icons:<GiTeacher/>,
        links:[
            {
                name:"teacher registration",
                path:"/register-teacher",
            },
            {
                name:"teacher List",
                path:"/teacher-list",
            }
        ],
    },
    {
        label:"Subjects",
        icons:<GiNotebook/>,
        links:[
            {
                name:"add subject",
                path:"/add-subject",
            },
            {
                name:"subjects list",
                path:"/subjects-list",
            }
        ],
    },
    {
        label:"Syllabus",
        icons:<SlBookOpen/>,
        links:[
            {
                name:"Syllabus Form",
                path:"/syllabus-form",
            },
            {
                name:"Syllabus list",
                path:"/syllabus-list",
            }
        ],
    },
    {
        label:"School",
        icons:<FaSchool/>,
        links:[
            {
                name:"teacher registration",
                path:"/register-teacher",
            },
            {
                name:"student registration",
                path:"/register-student",
            }
        ],
    },
    {
        label:"Class",
        icons:<PiStudentFill/>,
        links:[
            {
                name:"Class Form",
                path:"/class-form",
            },
            {
                name:"Classes list",
                path:"/class-list",
            }
        ],
    },
    {
        label:"Fee",
        icons:<FaMoneyCheckDollar/>,
        links:[
            {
                name:"Fee Structure",
                path:"/fee-structure",
            },
            {
                name:"Fee Voucher",
                path:"/fee-voucher",
            },
            {
                name:"Fee Submission",
                path:"/fee-submission",
            }
        ],
    },
    {
        label:"Admission",
        icons:<PiStudentFill/>,
        links:[
            {
                name:"Admission Form",
                path:"/class-form",
            },
        ],
    },
    {
        label:"Exam",
        icons:<PiExam/>,
        links:[
            {
                name:"Exam  Schedule",
                path:"/exam-schedule",
            },
            // {
            //     name:"Exam  Result",
            //     path:"/exam-result",
            // },
        ],
    },

]
