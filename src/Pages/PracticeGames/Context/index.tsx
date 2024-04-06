import React, { createContext, useMemo, useReducer } from 'react';

import reducer from './Reducers';
import GamesState from './GameState';

const GamesContext = createContext<GamesStoreType | undefined>(undefined);

const GameProvider: React.FC<ContextProps> = ({ children }) => {
	// const [store] = useState(new GamesState());
	const store = useMemo(() => new GamesState(), []);
	const [state, dispatch] = useReducer(reducer, store);
	return (
		<GamesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GamesContext.Provider>
	);
};

export { GamesContext, GameProvider };
