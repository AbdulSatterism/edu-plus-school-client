import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutPages from "../pages/AboutPages/AboutPages";
import FacultyALl from "../pages/FacultyPages/FacultyALl";
import News from "../pages/Home/FeatureNews/News";
import NoticeTable from "../pages/NoticeTable/NoticeTable";
import AdmissionTopics from "../pages/AdmissionsRelated/AdmissionTopics/AdmissionTopics";
import Academics from "../pages/AcademicRelated/Academics/Academics";
import Enroll from "../pages/AdmissionsRelated/EnrollPage/Enroll";
import Login from "../pages/Shared/Login/Login";
import Signup from "../pages/Shared/Signup/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import StudentProfile from "../pages/Dashboard/StudentProfile/StudentProfile";
import ClassRoutine from "../pages/Dashboard/ClassRoutine/ClassRoutine";
import ClassBooks from "../pages/Dashboard/ClassBooks/ClassBooks";
import AllUsers from "../pages/Dashboard/AdminPanel/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AllStudents from "../pages/Dashboard/AdminPanel/AllStudents/AllStudents";
import PaymentInfo from "../pages/Dashboard/Payment/PaymentInfo";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutPages></AboutPages>
            },
            {
                path: '/faculty',
                element: <FacultyALl></FacultyALl>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/notice',
                element: <NoticeTable></NoticeTable>
            },
            {
                path: '/admission',
                element: <AdmissionTopics></AdmissionTopics>
            },
            {
                path: '/academic',
                element: <Academics></Academics>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/enroll/:id',
                element: <PrivateRoute>
                    <Enroll></Enroll>
                </PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://edu-plus-school-server.onrender.com/class/${params?.id}`)
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            //admin part
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'allStudents',
                element: <AdminRoute><AllStudents></AllStudents> </AdminRoute>
            },

            // student part
            {
                path: 'studentProfile',
                element: <StudentProfile></StudentProfile>,
            },
            {
                path: 'classRoutine',
                element: <ClassRoutine></ClassRoutine>,
            },
            {
                path: 'books',
                element: <ClassBooks></ClassBooks>
            },
            {
                path: 'paymentInfo',
                element: <PaymentInfo></PaymentInfo>
            }

        ]
    }
]);

export default router;