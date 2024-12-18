import Card from "@/components/Card";

type Color = "red" | "blue" | "yellow" | "green" | "black";
type Card = {
  value: number | string;
  color: Color;
};
const numbers: Card[] = [
  {
    value: "+2",
    color: "yellow",
  },
  {
    value: "+4",
    color: "black",
  },
  {
    value: 0,
    color: "blue",
  },
  {
    value: "><",
    color: "red",
  },
  {
    value: "",
    color: "black",
  },
  {
    value: "9",
    color: "green",
  }
];

export default function Home() {
  return (
    <div className="p-3">
      <h1>UNO GAME</h1>
      <div className="flex gap-4 flex-wrap">
        {numbers.map((card) => (
          <Card key={card.value} value={card.value} color={card.color} />
        ))}
      </div>
      {/* <Card number={2}/> */}
    </div>
  );
}
