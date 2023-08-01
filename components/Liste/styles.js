import styled from "styled-components";
import { BiCheckbox } from "react-icons/bi";

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

//BiCheckbox
const Checkbox = styled(BiCheckbox)`
  font-size: 28px;
  color: pink;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const MainButtonStyle = styled.button`
  border-radius: 50px;
  width: 30px;
  height: 30px;
  text-decoration: none;
  button-style: none;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;
export { TodoItem, TodoList, Checkbox, MainButtonStyle, ButtonDiv };
