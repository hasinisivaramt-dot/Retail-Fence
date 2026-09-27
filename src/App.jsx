import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GetStartedPage from './pages/GetStartedPage'
import CustomerLogin from './pages/auth/CustomerLogin'
import CustomerSignup from './pages/auth/CustomerSignup'
import RetailerLogin from './pages/auth/RetailerLogin'
import RetailerSignup from './pages/auth/RetailerSignup'
import AdminLogin from './pages/auth/AdminLogin'
import RetailerDashboard from './pages/dashboards/RetailerDashboard'
import AdminDashboard from './pages/dashboards/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

import CustomerLayout from './pages/customer/CustomerLayout'
import DashboardHome from './pages/customer/DashboardHome'
import LocationGeoFence from './pages/customer/LocationGeoFence'
import NearbyStores from './pages/customer/NearbyStores'
import SmartOffers from './pages/customer/SmartOffers'
import MyCoupons from './pages/customer/MyCoupons'
import PurchaseHistory from './pages/customer/PurchaseHistory'
import LoyaltyRewards from './pages/customer/LoyaltyRewards'
import MySavings from './pages/customer/MySavings'
import ShoppingInsights from './pages/customer/ShoppingInsights'
import Favorites from './pages/customer/Favorites'
import NotificationsPage from './pages/customer/NotificationsPage'
import ProfilePage from './pages/customer/ProfilePage'
import SettingsPage from './pages/customer/SettingsPage'
import HelpSupport from './pages/customer/HelpSupport'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<GetStartedPage />} />

      <Route path="/login/customer" element={<CustomerLogin />} />
      <Route path="/signup/customer" element={<CustomerSignup />} />
      <Route path="/login/retailer" element={<RetailerLogin />} />
      <Route path="/signup/retailer" element={<RetailerSignup />} />
      <Route path="/login/admin" element={<AdminLogin />} />

      <Route
        path="/dashboard/customer"
        element={
          <ProtectedRoute role="customer">
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="location" element={<LocationGeoFence />} />
        <Route path="nearby-stores" element={<NearbyStores />} />
        <Route path="offers" element={<SmartOffers />} />
        <Route path="coupons" element={<MyCoupons />} />
        <Route path="purchases" element={<PurchaseHistory />} />
        <Route path="loyalty" element={<LoyaltyRewards />} />
        <Route path="savings" element={<MySavings />} />
        <Route path="insights" element={<ShoppingInsights />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpSupport />} />
      </Route>

      <Route
        path="/dashboard/retailer"
        element={
          <ProtectedRoute role="retailer">
            <RetailerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
