import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import axios from "axios";

type User = {
  id: string;
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "flashi.token": token } = parseCookies();

    if (token) {
      // TODO: chamar o endpoint recoverUserInfo (com GET)
      // TODO: para tal, só precisa passar o token no header "authorization"
      // .then(response => {
      //   setUser(response.data.user)
      // })
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    // TODO: chamar o endpoint login (com POST)
    // TODO: para tal, só precisa passar o email e o password no body
    // const { token, user } = await <função de login>

    setCookie(undefined, "flashi.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    // TODO: essa parte é pra mandar o token pra toda chamada da api
    // api.defaults.headers['authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push("/dashboard");
  }

  async function signUp({ email, password }: SignUpData) {
    // TODO: chamar o endpoint de users (POST)

    // TODO: chamar o endpoint login (com POST)
    // TODO: para tal, só precisa passar o email e o password no body
    // const { token, user } = await <função de login>

    setCookie(undefined, "flashi.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    // TODO: essa parte é pra mandar o token pra toda chamada da api
    // api.defaults.headers['authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
