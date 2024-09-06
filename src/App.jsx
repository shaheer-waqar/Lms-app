import { ClassForm, ClassList, Home, Login,  PageNotFound,  SignUp, StudentForm, StudentList, SubjectForm, SubjectList, SyllabusForm, SyllabusList, TeacherForm, TeacherList } from './AllPages';
import './App.css'
import CusSidBar from './components/CusSidBar';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import FeeStructure from './pages/feePages/FeeStructure';
import FeeVoucher from './pages/feePages/FeeVoucher';
import ExamSchedule from './pages/Exam/ExamSchedule';
import AuthProtected from './pages/authentication/AuthProtected';
import FeeSubmission from './pages/feePages/FeeSubmission';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ProtectedRoute Components={CusSidBar}/>}>

       <Route path='/' element={<Home/>}/>

       <Route path='/register-student' element={<StudentForm/>}/>
       <Route path='/student-list' element={<StudentList/>}/>

       <Route path='/register-teacher' element={<TeacherForm/>}/>
       <Route path='/teacher-list' element={<TeacherList/>}/>

       <Route path='/add-subject' element={<SubjectForm />}/>
       <Route path='/subjects-list' element={<SubjectList/>}/>

       <Route path='/syllabus-form' element={<SyllabusForm />}/>
       <Route path='/syllabus-list' element={< SyllabusList />}/>

       <Route path='/class-form' element={<ClassForm/>}/>
       <Route path='/class-list' element={<ClassList/>}/>

       <Route path='/fee-structure' element={<FeeStructure/>}/>
       <Route path='/fee-voucher' element={<FeeVoucher/>}/>

       <Route path='/exam-schedule' element={<ExamSchedule/>}/>
       <Route path='/fee-voucher' element={<FeeVoucher/>}/>
       <Route path='/fee-submission' element={<FeeSubmission/>}/>
       
      </Route>
      <Route element={<AuthProtected/>}>
       <Route path='/sign-up' element={<SignUp/>}/>
       <Route path='/login' element={<Login/>}/>
      </Route>
       <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>

  )
}

export default App
