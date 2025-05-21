export type BaggageItem = {
  id: number;
  type: "adult" | "infant" | "child";
  departure: "outbound" | "return";
  weight: number;
  price: number;
};

export enum BaggageRate {
  adult = 20,
  child = 10,
  infant = 5,
}
