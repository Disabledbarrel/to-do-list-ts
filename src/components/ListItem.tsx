import React from 'react';

interface Props {
  todo: Todo;
}

export const ListItem: React.FC<Props> = ({todo}) => {
  return <li>{todo.text}</li>;
};