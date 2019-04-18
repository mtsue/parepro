import React from "react";

export type Props = {
  id: number;
  todo: string;
};
type ExternalProps = {
  deleteTodo: (id: number) => void;
  selectDeleteIds: (id: number) => void;
};

const List: React.FC<Props & ExternalProps> = ({
  id,
  todo,
  deleteTodo,
  selectDeleteIds
}) => {
  const handleClick = () => {
    deleteTodo(id);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    isChecked && selectDeleteIds(id);
  };

  return (
    <li>
      <div>
        <input type="checkbox" onChange={handleChange} />
        <span>{todo}</span>
        <button onClick={handleClick}>x</button>
      </div>
    </li>
  );
};

export default List;
