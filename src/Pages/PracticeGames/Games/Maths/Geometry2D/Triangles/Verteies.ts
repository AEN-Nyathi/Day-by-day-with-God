import RandomNumber from "../../Functions/RandomNumber";

function calculateTriangleHeight(AB: number, AC: number, BC: number): number {
  // Step 1: Calculate the semi-perimeter (s)
  const s = (AB + AC + BC) / 2;

  // Step 2: Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - AB) * (s - AC) * (s - BC));

  // Step 3: Calculate the height (h) using the area
  const height = (2 * area) / AB; // Height is relative to base AB
  return height;
}
function calculateTriangleWidth(AB: number, AC: number, BC: number): number {
  const s = (AB + AC + BC) / 2;

  // Step 2: Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - AB) * (s - AC) * (s - BC));
  const height = (2 * area) / AB;
  const width = (2 * area) / height;
  return width;
}

export default function generateTriangleSides(): {
  AB: number;
  AC: number;
  BC: number;
} {
  console.log('generateTriangleSides')
  // Define the range for side AB
  const minAB: number = 250;
  const maxAB: number = window.innerWidth - 280;

  // Define the range for side AC
  const minAC: number = 250;
  const maxAC: number = Math.sqrt(window.innerWidth ** 2 + 400 ** 2) - 280;

  // Define the range for side BC
  const minBC: number = 250;
  const maxBC: number = window.innerWidth - 280;

  // Generate random side lengths for a triangle
  let AB: number = RandomNumber((maxAB - minAB), minAB);
  let AC: number = RandomNumber((maxAC - minAC), minAC);
  let BC: number = RandomNumber((maxBC - minBC), minBC);

  // isosceles
  if (Math.abs(AC - BC) < 50) {
    console.log('isosceles')
    const EquilSides = Math.floor(Math.random() * (400 - 250)) + 250;
    AC = EquilSides;
    BC = EquilSides;
  }
  // equilateral triangle
  if (Math.abs(AC - AB) < 50 && Math.abs(AC - BC) < 50) {
    console.log('equilateral')
    const EquilSides = Math.floor(Math.random() * (window.innerWidth - 280)) + 250;
    AB = EquilSides
    AC = EquilSides
    BC = EquilSides
  }
  // right-angled triangle
 
  if (Math.abs(BC - Math.sqrt(AB ** 2 + AC ** 2)) < 50 && AC < BC) {
    console.log('right-angled BC')
    BC = Math.sqrt(AB ** 2 + AC ** 2);
  }
  if (Math.abs(AC - Math.sqrt(AB ** 2 + BC ** 2)) < 15 && AC > BC) {
    console.log('right-angled AC')
    AC = Math.sqrt(AB ** 2 + BC ** 2);
  }

  if (BC > Math.sqrt(AB ** 2 + AC ** 2) && AC < BC) {
    return generateTriangleSides();
  }
  // Check if triangle width exceeds window.innerWidth - 100
  const width = calculateTriangleWidth(AB, AC, BC)
  if (width > window.innerWidth - 100) {
    return generateTriangleSides();
  }
  // Check if height exceeds 380
  const height = calculateTriangleHeight(AB, AC, BC);
  if (height > 400 || isNaN(height) || height < 100) {
    return generateTriangleSides();
  }

  return { AB, AC, BC };

}
