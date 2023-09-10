import React from "react";
// コンポーネントの読み込み
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// CSSはApp.cssに記載
// https://www.npmjs.com/package/react-beautiful-dnd
const DragDrop = () => {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="chars">
          {(provided) => (
            <div
              className="todoList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Draggable draggableId="todo0" index={0}>
                {(provided) => (
                  <div
                    className="todo"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    料理
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="todo1" index={1}>
                {(provided) => (
                  <div
                    className="todo"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    掃除
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="todo2" index={2}>
                {(provided) => (
                  <div
                    className="todo"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    買い物
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="todo3" index={3}>
                {(provided) => (
                  <div
                    className="todo"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    洗濯
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DragDrop;
