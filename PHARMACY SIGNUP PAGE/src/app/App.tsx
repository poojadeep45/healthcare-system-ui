import { useState } from 'react';
import { PharmacyRegistrationForm } from './components/PharmacyRegistrationForm';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F6F8' }}>
      <PharmacyRegistrationForm />
    </div>
  );
}
