export function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomInt(min: number, max: number) {
  return Math.floor(randomFloat(min, max));
}

export function randomPick(items: any[]) {
  return items[randomInt(0, items.length)];
}

export * from "./randomF";
