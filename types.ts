export type RootStackParamList = {
  Auth: undefined;
  MainApp: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  Details: { itemId: number; title: string };
};

export interface UserData {
  id: string;
  name: string;
  email: string;
} 