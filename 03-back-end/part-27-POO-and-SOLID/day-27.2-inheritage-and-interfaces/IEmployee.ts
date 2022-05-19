export default interface IEmployee {
  startWork(): number;
  finishWork(): void;
  lunchTime(food: string): void;
}