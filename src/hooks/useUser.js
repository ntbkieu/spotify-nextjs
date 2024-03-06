import React, { useEffect, useState, createContext, useContext, useCallback } from 'react';
import { useUser as useSupaUser, useSessionContext } from '@supabase/auth-helpers-react';

const UserContext = createContext(undefined);

const MyUserContextProvider = (props) => {
  const { session, isLoading: isLoadingUser, supabaseClient: supabase } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [subscription, setSubscription] = useState(null);

  const getUserDetails = useCallback(() => supabase.from('users').select('*').single(), [supabase]);
  const getSubscription = useCallback(() =>
    supabase.from('subscriptions').select('*, prices(*, products(*))').in('status', ['trialing', 'active']).single(), [supabase]);

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsloadingData(true);

      Promise.allSettled([getUserDetails(), getSubscription()]).then((results) => {
        const userDetailsPromise = results[0];
        const subscriptionPromise = results[1];

        if (userDetailsPromise.status === 'fulfilled') setUserDetails(userDetailsPromise.value.data);
        if (subscriptionPromise.status === 'fulfilled') setSubscription(subscriptionPromise.value.data);

        setIsloadingData(false);
      });
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [user, isLoadingUser, getUserDetails, getSubscription, isLoadingData, userDetails, subscription]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };

  return <UserContext.Provider value={value} {...props} />;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};

export { MyUserContextProvider, useUser };
