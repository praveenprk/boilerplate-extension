import { LocalStorageCache, useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useState, useEffect } from 'react';
import TokenCTA from '../../components/CTA/TokenCTA';
import Profile from '../../components/Profile/Profile';
import { extractRefreshToken } from '../../helpers/extractorHelpers';
import { setTokenToLocalStorage } from '../../helpers/localStorageHelpers';
import Header from '../../partials/Header';
import { Routes, Route } from "react-router-dom";
import './intro.css';

const Intro = () => {

  const [refreshToken, setRefreshToken] = useState(null);

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
  } = useAuth0();
  

  useEffect(() => {
    
    const finalRefreshToken = extractRefreshToken(LocalStorageCache)
    setTokenToLocalStorage('refresh_token',finalRefreshToken)
    setRefreshToken(finalRefreshToken);
    
    return () =>  {
      setRefreshToken(null);
    }

  },[isAuthenticated])

  return (
    <>
    {error ? <span>{error.message}</span> : ''}
    {isLoading ? <h1>Loading...</h1> : ''}
    <Header />
    <br />
    </>
  );
};

export default Intro;
