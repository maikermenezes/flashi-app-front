import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "services/api";

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
  signIn: (data: SignInData) => Promise<unknown>;
  signUp: (data: SignUpData) => Promise<unknown>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "flashi.token": token } = parseCookies();

    if (token) {
      api
        .get("/auth", { headers: { authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data.user);
        });
    } else {
      setUser(null);
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    try {
      const loginResponse = await api.post("/auth", {
        email: email,
        password: password,
      });

      const { token, user } = loginResponse.data;

      setCookie(undefined, "flashi.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      // TODO: essa parte é pra mandar o token pra toda chamada da api
      // api.defaults.headers['authorization'] = `Bearer ${token}`;

      setUser(user);
    } catch (error) {
      return error;
    }
  }

  async function signUp({ name, email, password }: SignUpData) {
    try {
      await api.post("/user", {
        name: name,
        email: email,
        password: password,
      });

      const loginResponse = await api.post("/auth", {
        email: email,
        password: password,
      });

      const { token, user } = loginResponse.data;

      setCookie(undefined, "flashi.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      // TODO: essa parte é pra mandar o token pra toda chamada da api
      // api.defaults.headers['authorization'] = `Bearer ${token}`;

      setUser(user);
    } catch (error) {
      return error;
    }
  }

  async function signOut() {
    destroyCookie(undefined, "flashi.token");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
