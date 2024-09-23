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
  const sizeDiffirence = 100

  // isosceles
  if (Math.abs(AC - AB) < sizeDiffirence) {
    AC = AB
  }
  if (Math.abs(AC - BC) < sizeDiffirence) {
    AC = BC
  }
  if (Math.abs(AB - BC) < sizeDiffirence) {
    AB = BC
  }
  // equilateral triangle
  if (Math.abs(AC - AB) < sizeDiffirence && Math.abs(AC - BC) < sizeDiffirence && Math.abs(AB - BC) < sizeDiffirence) {
    // const EquilSides = Math.floor(Math.random() * (window.innerWidth - 280)) + 250;
    AC = AB
    BC = AB
  }
  // right-angled triangle 
  if (Math.abs(BC - Math.sqrt(AB ** 2 + AC ** 2)) < sizeDiffirence) {
    BC = Math.sqrt(AB ** 2 + AC ** 2);
  }
  if (Math.abs(AC - Math.sqrt(AB ** 2 + BC ** 2)) < sizeDiffirence) {
    AC = Math.sqrt(AB ** 2 + BC ** 2);
  }
  if (Math.abs(AB - Math.sqrt(AC ** 2 + BC ** 2)) < sizeDiffirence) {
    AB = Math.sqrt(AC ** 2 + BC ** 2);
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
