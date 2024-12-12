import React from "react";
import TopNav from "../components/topNav/TopNav";
import { useAuth } from "../contexts/AuthContext";
import LeftNav from "../components/leftNav/LeftNav";

export default function Layout({ children }) {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <TopNav />
      <LeftNav />
      {children}
    </>
  );
}
