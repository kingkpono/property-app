'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase'; 
import Listings from '../components/Listings';
import ListingDetail from '../pages/property/[id]';

import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !user) {
    return <p>Please <a href="/auth/login">log in </a> or <a href="/auth/signup">sign up</a> to view listings</p>;
  }

  return (
    <div>
      <Navbar />
      <Listings />

    </div>
  );
};

export default HomePage;

