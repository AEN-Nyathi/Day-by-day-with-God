import React from 'react';
import AppState from './AppState';
export { };
declare global {
	type ThemeTypes = {
		Color: string;
		Transparency: number;
		Mode: 'light' | 'dark';
		HexColor: string;
	};

	type LoadingType = {
		state: boolean;
		message: string;
		progress: string;
	};

	type ErrorType = {
		state: boolean;
		message: string;
	};





	type StoreType = AppState & {
		dispatch: React.Dispatch<ActionTypes>;
	};

	type ActionTypes =
		| { type: 'INITIALIZE'; data: AppState }
		| { type: keyof AppState; data: AppState[keyof AppState] }

}
