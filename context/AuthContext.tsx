import { useRouter, useSegments, useRootNavigationState } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a simple AuthContext
type AuthType = {
  user: any | null;
  login: (email: string) => void;
  logout: () => void;
  register: (email: string) => void;
};

const AuthContext = createContext<AuthType | null>(null);

// Hook to access AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// AuthProvider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const segments = useSegments();
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  // Basic mock auth functions
  const login = (email: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  const register = (email: string) => {
    setUser({ email });
  };

  useEffect(() => {
    if (!rootNavigationState?.key) return; // Wait until navigation state is ready

    const inAuthGroup = segments[0] === ('(auth)' as any);

    if (!user && !inAuthGroup) {
      // Redirect to login if user is not authenticated and not already in the auth group
      setTimeout(() => {
        router.replace('/(auth)/login' as any);
      }, 1);
    } else if (user && inAuthGroup) {
      // Redirect away from login page if user is authenticated
      setTimeout(() => {
        router.replace('/(tabs)' as any);
      }, 1);
    }
  }, [user, segments, rootNavigationState]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
