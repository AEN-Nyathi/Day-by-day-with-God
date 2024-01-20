import React, { createContext, useEffect, useReducer, useState } from 'react';

import reducer from './Reducers';
import AppState from '@Context/AppState';

const Context = createContext<StoreType | undefined>(undefined);

const Provider: React.FC<ContextProps> = ({ children }) => {

	const [Store, setStore] = useState(new AppState());

	useEffect(() => {
		(async () => {
			try {
				const getStore = await import('@Backend/IndexedDB/getStore.ts');
				return setStore(await getStore.default('State') as AppState)
			} catch (error) {
				console.error('Error fetching initial state:', error);
			}
		})()

		return () => {

		}

	}, [])

	const [state, dispatch] = useReducer(reducer, Store);

	return (
		<Context.Provider value={{ ...state, dispatch }}>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
