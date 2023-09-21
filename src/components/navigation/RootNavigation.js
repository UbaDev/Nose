
import AppNavigation from "./AppNavigation";
import AuthScreen from "../../screen/Auth/AuthScreen";

export default function RootNavigation() {
  const user = null;
  return user ? <AppNavigation /> : <AuthScreen />;
}