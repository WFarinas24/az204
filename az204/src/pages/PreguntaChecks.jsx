import * as React from "react";
import { useMemo, useState } from "react";
import * as ReactDOM from "react-dom";

import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const PreguntaChecks = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);

  const item = <Draggable id={ "draggable-item"} />;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? item : null}

      <div style={{ display: "flex" }}>
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? item : "Drop here"}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;

    setParent(over ? over.id : null);
  }
};

function Draggable({id}) {
  const { attributes, isDragging, transform, setNodeRef, listeners } =
    useDraggable({
      id,
    });

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        boxShadow: isDragging
          ? "-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
          : undefined,
      }}
      {...attributes}
      {...listeners}
    >
      Drag me
    </button>
  );
}

function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 150,
        border: "1px solid",
        margin: 20,
        borderColor: isOver ? "#4c9ffe" : "#EEE",
      }}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}
