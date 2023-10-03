// components/DroppableTarget.js
import { useDrop } from "react-dnd";

const DroppableTarget = () => {
  const [, ref] = useDrop({
    accept: "item", // The type of item this target accepts
    drop: (item: any) => {
      // Handle the dropped item here
      console.log(`Dropped ${item.name}`);
    },
  });

  return (
    <div ref={ref} style={{ border: "1px solid black", padding: "10px" }}>
      Drop here
    </div>
  );
};

export default DroppableTarget;
