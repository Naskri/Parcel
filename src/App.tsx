import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { LoginForm } from './features/Authentication/Forms/LoginForm/LoginForm'
import { RegisterForm } from './features/Authentication/Forms/RegisterForm/RegisterForm'
import { UnlockApp } from './features/Authentication/Forms/UnlockApp/UnlockApp'
import { UpdatePIN } from './features/Authentication/Forms/UpdatePIN/UpdatePIN'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ProtectedRoute } from './features/UI/ProtectedRoute/ProtectedRoute'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { MainNavigation } from './pages/MainNavigation/MainNavigation'
import { Time } from './pages/Time/Time'
import { Warehouse } from './pages/Warehouse/Warehouse'
import { Packages } from './pages/Packages/Packages'

import { Map } from './pages/Map/Map'
import { NewPackage } from './pages/NewPackage/NewPackage'
import { NewAddressPoint } from './pages/NewAddressPoint/NewAddressPoint'
import { PackagesContextProvider } from './features/Packages/PackagesContext/PackagesContext'
import { PlanWork } from './pages/PlanWork/PlanWork'
import { AddressInformations } from './pages/AddressInformations/AddressInformations'
import { Work } from './pages/Work/Work'
import { Delivery } from './pages/Delivery/Delivery'
import { Search } from './pages/Search/Search'
import { SendPackages } from './pages/SendPackages/SendPackages'
import { DeliveryIntro } from './pages/Delivery/DeliveryIntro/DeliveryIntro'
import { DeliveryChoice } from './pages/Delivery/DeliveryChoice/DeliveryChoice'
import { DeliveryNotSuccesful } from './pages/Delivery/DeliveryNotSuccesful/DeliveryNotSuccesful'
import { DeliverySuccesful } from './pages/Delivery/DeliverySuccesful/DeliverySuccesful'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="pin" element={<UnlockApp />} />
          <Route path="pin/update" element={<UpdatePIN />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <PackagesContextProvider>
                  <Dashboard />
                </PackagesContextProvider>
              </ProtectedRoute>
            }
          >
            <Route path="" element={<MainNavigation />} />
            <Route path="time" element={<Time />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route path="warehouse/packages" element={<Packages />} />
            <Route path="warehouse/packages/new" element={<NewAddressPoint />} />
            <Route path="warehouse/packages/:id" element={<NewPackage />} />
            <Route path="warehouse/packages/new/map" element={<Map />} />
            <Route path="warehouse/work" element={<PlanWork />} />
            <Route path="modify" element={<PlanWork />} />
            <Route path="address/:id" element={<AddressInformations />} />
            <Route path="address/:id/delivery" element={<Delivery />} />
            <Route path="address/:id/delivery/:packId" element={<DeliveryIntro />} />
            <Route path="address/:id/delivery/:packId/choice" element={<DeliveryChoice />} />
            <Route
              path="address/:id/delivery/:packId/choice/wrong"
              element={<DeliveryNotSuccesful />}
            />
            <Route
              path="address/:id/delivery/:packId/choice/correct"
              element={<DeliverySuccesful />}
            />
            <Route path="work" element={<Work />} />
            <Route path="search" element={<Search />} />
            <Route path="send/:id" element={<SendPackages />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}
