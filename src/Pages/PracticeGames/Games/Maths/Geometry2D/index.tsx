import { useEffect, useRef, useState } from 'react';
import TriangleClass from './Triangles/Triangle';

export default function Geometry() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	// const [Rerender, setRerender] = useState(false);
	const [Triangle, setTriangle] = useState(new TriangleClass());
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		// const {AB, AC,BC} = Verteies()

		// const myTriangle = new TriangleClass();
		console.log('Triangle:', Triangle, Math.floor(Triangle.Perimeter));

		const Context = canvas.getContext('2d');
		if (!Context) return;

		Triangle.DrawTriangle(Context);
	}, [Triangle]);
	return (
		<main>
			Geometry
			<button onClick={() => setTriangle(new TriangleClass())}>Another Triangle</button>
			<h2>{Triangle.Type}</h2>
			<article>
				<canvas
					className='bg-primary rounded-lg '
					ref={canvasRef}
					width={Triangle.TriangleWidth + 130}
					height={Triangle.TriangleHeight + 50}
				/>
			</article>
		</main>
	);
}
