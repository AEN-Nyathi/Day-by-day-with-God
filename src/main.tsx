import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from '@Context/index.tsx'
import { IconContext } from 'react-icons'


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider>
			<IconContext.Provider value={{ className: 'w-6 h-6 ' }}>
				<App />
			</IconContext.Provider>
		</Provider>
	</React.StrictMode>
);
