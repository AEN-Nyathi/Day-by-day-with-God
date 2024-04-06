export default function RandomNumber(RandomNumber: number, StartFrom: number = 0) {
  return Math.floor(Math.random() * RandomNumber) + StartFrom;
}