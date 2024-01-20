import { Context } from '@Context/index';
import { useContext } from 'react';

export const useStore = () => useContext(Context) as StoreType;
