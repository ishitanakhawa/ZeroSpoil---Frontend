import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import LoadingPage from './pages/LoadingPage';
import DashboardNav from './components/DashboardNav';
import CustomerView from './pages/CustomerView';
import ShopOwnerView from './pages/ShopOwnerView';
import NGOView from './pages/NGOView';
import AdminAgentView from './pages/AdminAgentView';
import WhatsAppStudio from './pages/WhatsAppStudio';
import CommunityRescueFeed from './pages/CommunityRescueFeed';

// screen: 'landing' | 'login' | 'loading' | 'dashboard'
export default function App() {
  const [screen, setScreen] = useState('landing');
  const [userRole, setUserRole] = useState('Customer');
  const [activeRole, setActiveRole] = useState('Customer');
  const [activeTab, setActiveTab] = useState('Agent & Safety Rails');

  const handleLoginSuccess = (role) => {
    // Map demo role names to dashboard roles
    const roleMap = {
      'Shop Owner': 'Shop Owner',
      'NGO': 'NGO',
      'Shopper': 'Customer',
      'Admin': 'Admin',
      'Customer': 'Customer',
    };
    const mapped = roleMap[role] || 'Customer';
    setUserRole(mapped);
    setActiveRole(mapped);
    setScreen('loading');
  };

  const handleLoadingComplete = () => {
    setScreen('dashboard');
  };

  const handleReset = () => {
    setScreen('landing');
    setActiveRole('Customer');
    setActiveTab('Agent & Safety Rails');
  };

  const handleLogout = () => {
    setScreen('landing');
  };

  // Determine which view to render based on role + tab
  const renderDashboardContent = () => {
    // Non-admin roles have fixed views
    if (activeRole === 'Customer') return <CustomerView />;
    if (activeRole === 'Shop Owner') return <ShopOwnerView />;
    if (activeRole === 'NGO') return <NGOView />;

    // Admin role: tab-based
    if (activeRole === 'Admin') {
      if (activeTab === 'Agent & Safety Rails') return <AdminAgentView onReset={handleReset} />;
      if (activeTab === 'WhatsApp Vendor Studio') return <WhatsAppStudio />;
      if (activeTab === 'Community & NGO Rescue Feed') return <CommunityRescueFeed />;
    }
    return <CustomerView />;
  };

  if (screen === 'landing') {
    return <LandingPage onLogin={() => setScreen('login')} />;
  }

  if (screen === 'login') {
    return <LoginPage onLogin={handleLoginSuccess} />;
  }

  if (screen === 'loading') {
    return <LoadingPage onComplete={handleLoadingComplete} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <DashboardNav
        activeRole={activeRole}
        setActiveRole={(role) => {
          setActiveRole(role);
          setActiveTab('Agent & Safety Rails');
        }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onReset={handleReset}
        onLogout={handleLogout}
      />
      <main>
        {renderDashboardContent()}
      </main>
    </div>
  );
}
