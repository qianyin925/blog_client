import React, { useMemo } from 'react';
import Store from './store';
import { useStore as useGlobalStore } from '@store';
const StoreContext = React.createContext(null);

// 导出 hook 使用 hook 方法
export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};

// 导出 context.Provider
export default props => {
  const globalStore = useGlobalStore();
  const store = useMemo(() => (new Store(globalStore)), [globalStore]);
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};