import {
	HTMLAttributes,
	LabelHTMLAttributes,
	ReactNode,
	SVGProps,
} from 'react';
import { IconType } from 'react-icons';

export {};
declare global {
	interface containerProps extends HTMLAttributes<HTMLElement> {
		Icon: IconType;
		title: string;
	}

	interface ContextProps {
		children: ReactNode;
	}

	interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
		title: string;
		Icon: IconType;
	}

	interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
		icon?: ReactNode;
	}

	interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
		Icon: IconType;
		title: string;
		errors?: boolean;
	}

	interface LoadingProps {
		title: string;
		Icon: IconType;
		className?: string;
	}

	interface LogoProps extends SVGProps<SVGSVGElement> {
		width: string;
		height: string;
	}

	interface PersonProps {
		person: UserTypes;
		children?: ReactNode;
	}
}
