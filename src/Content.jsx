import { BicyclesIndex } from "./BicyclesIndex";

export function Content() {
  const bicycles = [{ name: "kids bike", color: "green", price: 16 }];
}
return (
  <div>
    <BicyclesIndex bicycles={bicycles} />
  </div>
);
