"use client";

import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
} from "react";

type User = {
  name: string;
  last_name: string;
};

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const userContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Ali",
    last_name: "mohammadi",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
