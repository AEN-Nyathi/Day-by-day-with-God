import { useGameStore } from '@Backend/hooks/useStore';
import ArthmeticSettings from './ArthmeticSettings';
import MissingNumberSettings from './MissingNumberSettings';
import FractionsSettings from './FractionsSettings';
import ExponentSettings from './ExponentSettings';

export default function SettingsNode() {
	const { GameName } = useGameStore();
	switch (GameName) {
		case 'Arithmetic': {
			return <ArthmeticSettings />;
		}
		case 'MissingNumber': {
			return <MissingNumberSettings />;
		}
		case 'Fractions': {
			return <FractionsSettings />;
		}
		case 'Exponents': {
			return <ExponentSettings />;
		}
	}
	return null;
}
