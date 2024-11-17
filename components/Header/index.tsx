'use client'

import dynamic from 'next/dynamic';
import HeaderClient from "./HeaderClient";

// Dynamically import AuthSection with no SSR
const AuthSection = dynamic(() => import('./AuthSection'), {
  ssr: false,
  loading: () => <div className="h-9 w-[100px]" /> // Optional loading placeholder
});

const Header = () => {
  return (
    <HeaderClient>
      <AuthSection />
    </HeaderClient>
  );
};

export default Header;
