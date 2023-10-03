// components/DraggableItem.js
import { useDrag } from "react-dnd";

const DraggableItem = ({ name }: any) => {
  const [, ref] = useDrag({
    type: "item", // The type of the item (used to identify the draggable)
    item: { name }, // Data associated with the item
  });

  return <div ref={ref}>{name}</div>;
};

export default DraggableItem;
