import { createContext, useState } from 'react';
import { getAccessTokenFromLS } from '../utils/out';

interface User {
  username: string;
  // Thêm các trường khác nếu cần, ví dụ: email, avatar, v.v.
}

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user?: User; // User vẫn có thể optional nếu chưa đăng nhập
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>; // Loại bỏ optional
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null, // Giá trị mặc định
  user: undefined,
  setUser: () => null, // Giá trị mặc định
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated);
  const [user, setUser] = useState<User | undefined>(initialAppContext.user);

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};