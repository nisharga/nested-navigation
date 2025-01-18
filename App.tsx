import React from "react";
import { AuthProvider } from "./AuthContext";
import { RootNavigator } from "./navigation";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
