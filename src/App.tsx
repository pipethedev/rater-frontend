import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Layout from './components/Layout/Layout'
import RequiredRoute from './components/RequiredRoute'
import Dashboard from './pages/Dashboard'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Price from './pages/Price'
import Privacy from './pages/Privacy'
// import './App.css'
const App = () => {
  return (
    <Routes>
      <Route index element={ <Home />}  />
      <Route path='price' element={ <Price />}  />
      <Route path='faq' element={ <Faq />}  />
      <Route path='privacy' element={ <Privacy />}  />
      <Route path='privacy' element={ <Privacy />}  />

      <Route element={<RequiredRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/wallet" element={<Dashboard />} /> */}
              {/* <Route path="/loan-type" element={<LoanType />} />
              <Route path="/staff-loan" element={<StaffLoan />} />
              <Route path="/fastcash-loan" element={<FastcashLoan />} />
              <Route path="/loan-application" element={<LoanApplication />} />
              <Route path="/employment-record" element={<EmploymentRecord />} />

              <Route path="/fedpay-loan" element={<FedPayLoan />} />
              <Route path="/fedpay-loan-application" element={<FedPayLoanApplication />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/account" element={<Account />} />
              <Route path="/debit-card" element={<DebitCard />} />
              <Route path="/beneficiaries" element={<Beneficiaries />} /> */}
            </Route>
          </Route>
          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App





// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
