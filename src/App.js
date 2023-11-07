import { useState } from "react";
import ListTodo from "./components/ListTodo";
import { uid } from "uid";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      data: 'Belanja Garem Ke Warung',
      complete: false
    },
    {
      id: 2,
      data: 'Belanja Semen Ke TB',
      complete: false
    }
  ]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [inputData, setInputData] = useState("");

  function handleChange(e){
    setInputData(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    let data = [...todoList];

    if(inputData === "")
      return false;
    
    if(isUpdate.status){
      data.forEach((todolist) => {
        if(todolist.id === isUpdate.id){
          todolist.data = inputData;
        }
      });
      setIsUpdate({id: null, status:false});
      alert("Berhasil edit todolist");
    }
    else {
      data.push({id: uid(), data: inputData, complete: false});
      alert("Berhasil menambah todo list baru");
    }

    setTodoList(data);
    setInputData("");

  }

  function handleEdit(id){
    let data = [...todoList];
    let foundData = data.find((todolist) => todolist.id === id);
    setInputData(foundData.data);
    setIsUpdate({id: id, status: true});
  }

  function handleDelete(id){
    let data = [...todoList];
    let filteredData = data.filter(todolist => todolist.id !== id);

    setTodoList(filteredData);
  }

  return (
    <div>
      <h1>Todo List APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputVal" id="inputVal" value={inputData} onChange={handleChange} />
        <br/>
        <button>Submit</button>
      </form>
      <br/>
      <br/>
      <ListTodo handleDelete={handleDelete} handleEdit={handleEdit} data={todoList} />
    </div> 
  );
}

export default App;
