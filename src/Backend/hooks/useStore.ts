import { Context } from '@Context/index';
import { GamesContext } from '@Pages/PracticeGames/Context';
import { useContext } from 'react';

export const useStore = () => useContext(Context) as StoreType;
export const useGameStore = () => useContext(GamesContext) as GamesStoreType;
