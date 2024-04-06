import generateTriangleSides from "./Verteies";

// Triangle.ts
interface TriangleProperties {
  AB: number;
  AC: number;
  BC: number;
  AngleA: number;
  AngleB: number;
  AngleC: number;
  TriangleHeight: number;
  TriangleWidth: number;
  Perimeter: number,
  vertexA: { x: number; y: number };
  vertexB: { x: number; y: number };
  vertexC: { x: number; y: number };
  Area: number,
  Type: "right-angled" | 'equilateral' | 'isosceles' | 'Other'
}
class TriangleClass implements TriangleProperties {
  Type: "right-angled" | 'equilateral' | 'isosceles' | 'Other'
  vertexA: { x: number; y: number };
  vertexB: { x: number; y: number };
  vertexC: { x: number; y: number };
  TriangleHeight: number;
  TriangleWidth: number;
  Perimeter: number;
  AngleA: number;
  AngleB: number;
  AngleC: number;
  Area: number;
  AB: number;
  AC: number;
  BC: number;

  constructor(Vertice: { AB: number, AC: number, BC: number } = generateTriangleSides()) {
    this.AB = Vertice.AB;
    this.AC = Vertice.AC;
    this.BC = Vertice.BC;
    this.AngleA = this.calculateAngle(Vertice.BC, Vertice.AB, Vertice.AC);
    this.AngleB = this.calculateAngle(Vertice.AC, Vertice.AB, Vertice.BC);
    this.AngleC = this.calculateAngle(Vertice.AB, Vertice.BC, Vertice.AC);
    this.Area = this.calculateArea();
    this.Type = this.findTriangleType();
    this.vertexA = this.calculateVertexA();
    this.vertexB = this.calculateVertexB();
    this.vertexC = this.calculateVertexC();
    this.Perimeter = this.calculatePerimeter();
    this.TriangleWidth = this.calculateTriangleWidth()
    this.TriangleHeight = this.calculateTriangleHeight()
  }

  // Calculate the distance between two points
  calculateDistance(point1: { x: number; y: number }, point2: { x: number; y: number }): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return parseInt(Math.sqrt(dx * dx + dy * dy).toFixed(2));
  }
  private findTriangleType() {
    if (this.AngleA == 90 || this.AngleB == 90 || this.AngleC == 90) {
      return "right-angled"
    } else if (this.AngleA == 60 && this.AngleA == this.AngleB) {
      return 'equilateral'
    } else if (this.AngleA !== 60 && this.AngleA == this.AngleB) {
      return 'isosceles'
    } else {
      return 'Other'
    }

  }
  private calculateAngle(oppositeSide: number, adjacent1: number, adjacent2: number): number {
    const cosTheta = (adjacent1 ** 2 + adjacent2 ** 2 - oppositeSide ** 2) / (2 * adjacent1 * adjacent2);
    const radianAngle = Math.acos(cosTheta);
    const degreeAngle = (radianAngle * 180) / Math.PI;
    return degreeAngle;
  }
  private calculateTriangleHeight(): number {
    // Step 1: Calculate the semi-perimeter (s)
    const s = (this.AB + this.AC + this.BC) / 2;

    // Step 2: Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - this.AB) * (s - this.AC) * (s - this.BC));

    // Step 3: Calculate the height (h) using the area
    const height = (2 * area) / this.AB; // Height is relative to base AB
    return height;
  }
  private calculateTriangleWidth(): number {
    if (this.AngleB > 90) {
      return Math.sqrt(this.AC ** 2 - this.BC ** 2)
    }
    return this.AB

    // // Step 1: Calculate the semi-perimeter (s)
    // const s = (this.AB + this.AC + this.BC) / 2;

    // // Step 2: Calculate the area using Heron's formula
    // const area = Math.sqrt(s * (s - this.AB) * (s - this.AC) * (s - this.BC));
    // const height = this.calculateTriangleHeight();
    // const width = (2 * area) / height;
    // return width;
  }
  // Calculate the perimeter of the triangle
  private calculatePerimeter(): number {
    return this.AB + this.BC + this.BC;
  }

  // Calculate the area of the triangle using Heron's formula
  private calculateArea(): number {
    // Step 1: Calculate the semi-perimeter (s)
    const semiPerimeter = (this.AB + this.BC + this.BC) / 2;

    // Step 2: Calculate the area using Heron's formula
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.AB) * (semiPerimeter - this.AC) * (semiPerimeter - this.BC));
    return area
  }
  private calculateVertexA(): { x: number; y: number } {
    return { x: 0, y: 0 };
  }

  private calculateVertexB(): { x: number; y: number } {
    // Convert angle from degrees to radians
    const angleRadians = (0 * Math.PI) / 180;
    // Calculate Bx (x-coordinate of B)
    const Bx = this.vertexA.x + this.AB * Math.cos(angleRadians);

    // Calculate By (y-coordinate of B)
    const By = this.vertexA.y - this.AB * Math.sin(angleRadians);

    return { x: Bx, y: By };
  }

  private calculateVertexC(): { x: number; y: number } {
    // Convert angle from degrees to radians
    const angleRadians = ((this.AngleA) * Math.PI) / 180;
    // Calculate Cx (x-coordinate of B)
    const Cx = this.vertexA.x + this.AC * Math.cos(angleRadians)
    // Calculate Cy (y-coordinate of B)
    const Cy = this.vertexA.y - this.AC * Math.sin(angleRadians)

    return { x: Cx, y: Cy };
  }


  DrawTriangle(Context: CanvasRenderingContext2D) {

    Context.reset();
    Context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    Context.translate(60, Context.canvas.height - 20);

    Context.beginPath();
    Context.moveTo(this.vertexA.x, this.vertexA.y);
    Context.lineTo(this.vertexB.x, this.vertexB.y);
    Context.lineTo(this.vertexC.x, this.vertexC.y);
    Context.closePath();
    Context.strokeStyle = 'red';
    Context.lineWidth = 5;
    Context.stroke();
    // Label the vertices
    Context.fillStyle = 'white';
    Context.font = 'bold 18px Arial ';
    Context.fillText('A', this.vertexA.x - 15, this.vertexA.y + 15);
    Context.fillText('B', this.vertexB.x + 5, this.vertexB.y + 15);
    Context.fillText('C', this.vertexC.x - 5, this.vertexC.y - 10);
    // Label the size
    const AB = Number.isInteger(this.AB) ? this.AB : this.AB.toFixed(2)
    const AC = Number.isInteger(this.AC) ? this.AC : this.AC.toFixed(2)
    Context.fillText(`${AB}cm`, (this.vertexA.x + this.vertexB.x - 30) / 2, (this.vertexA.y + this.vertexB.y) / 2 + 15);
    Context.fillText(`${AC}cm`, (this.vertexA.x + this.vertexC.x) / 2 - 60, (this.vertexA.y + this.vertexC.y) / 2);
    Context.fillText(`${this.BC}cm`, (this.vertexB.x + this.vertexC.x) / 2 + 10, (this.vertexB.y + this.vertexC.y) / 2);
    // Label the size
    // Context.font = '14px Arial ';

    Context.fillText(this.AngleA.toFixed(2), this.vertexA.x + 15, this.vertexA.y - 2);
    Context.fillText(this.AngleB.toFixed(2), this.vertexB.x - 50, this.vertexB.y - 2);
    Context.fillText(this.AngleC.toFixed(2), (this.vertexA.x + 5) + (this.AC - 50) * Math.cos(((this.AngleA) * Math.PI) / 180), this.vertexA.y - (this.AC - 70) * Math.sin(((this.AngleA) * Math.PI) / 180));
  }
}


export default TriangleClass
