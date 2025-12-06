var todos = [];

// adding a todo
function addtodo() {
  var object = {
    id: prompt("enter ID of todo:"),
    title: prompt("enter title of todo:"),
    description: prompt("enter the description of todo:"),
    iscompleted: false,
  };

  todos.push(object);
  console.log(todos);
}

// mark the todo

function marktodo() {
  let flag = false;
  while (true) {
    let id = prompt("enter id of todo");

    for (let object in todos) {
      if (todos[object]["id"] === id) {
        todos[object]["iscompleted"] = true;
        flag = true;
        break;
      }
    }

    if (!flag) {
      console.log("this id is not exist in todolist: try again");
    }
    if (flag) {
      break;
    }
  }
}

//  for editing todo

function edittodo() {
  let flag = false;
  while (true) {
    let id = prompt("enter id of todo");

    for (let object in todos) {
      if (todos[object]["id"] === id) {
        todos[object] = {
           id: prompt("enter ID of todo:"),
           title: prompt("enter title of todo:"),
           description: prompt("enter the description of todo:"),
           iscompleted: false,
        }
        flag = true;
        break;
      }
    }

    if (!flag) {
      console.log("this id is not exist in todolist: try again");
    }
    if (flag) {
      break;
    }
  }
}

// list all todos

function listalltodo() {
  if(todos.length===0){
    console.log("You have no task yet:");
  }
  else{
  console.log(todos);
  }
}


//remove the todo
function removeatodo() {
  while (true) {
    let flag = false;
    var id = prompt("enter id of your todo");

    todos = todos.filter((value) => {
      if (value.id === id) {
        flag = true;
        return !value;
      } else {
        return value;
      }
    });

    if (!flag) {
      console.log("this id is not exist in todolist: try again");
    }

    if (flag) {
      break;
    }
  }
}

//starting the todoapp

while (true) {
  let work = prompt(
    "enter 1 for addtodo:\nenter 2 for marktodo:\nenter 3 for delete todo:\nenter 4 for listalltodo:\nenter 5 for editing todo:\nenter 6 to close the todo app:\n"
  );

  if (Number(work) === 6) {
    break;
  }

  switch (Number(work)) {
    case 1:
      addtodo();
      break;
    case 2:
      marktodo();
      break;
    case 3:
      removeatodo();
      break;
    case 4:
      listalltodo();
      break;
    case 5:
      edittodo();
      break;
    default:
      console.log("invalid input  try agian");
      break;
  }
}
