import { Auth } from "../components/auth/Auth";

export const AuthPage = () => {
  return (
    <main className="w-full h-screen flex 2xl:justify-between mx-auto p-5 py-10 sm:py-5">
      <Auth />
      <div className="w-1/2  h-full auth-image rounded-xl lg:flex hidden" />
    </main>
  );
};
