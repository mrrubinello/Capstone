import styled from "styled-components";
import { BiCheckbox } from "react-icons/bi";

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

//BiCheckbox
const Checkbox = styled(BiCheckbox)`
  font-size: 24px;
  color: pink;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;
export { TodoItem, TodoList, Checkbox };
