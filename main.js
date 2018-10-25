/* ADD BOARD NAME*/
document.getElementById('addJBoard').addEventListener('click' ,function () {
  var value = document.getElementById('boardName').value;

  if (value) addBoard(value);

});

document.getElementById('boardName').addEventListener('keypress' ,function (ev) {
  if (ev.keyCode == 13) {
  var value = document.getElementById('boardName').value;
  if (value) addBoard(value);
  }
});
/*DELETE BOARD*/
function removeBoard() {
  var item = this.parentNode;
  var parent = this.parentNode.parentNode;
  parent.removeChild(item);
}
/*ADD BOARD*/
function addBoard(text) {
  var list = document.getElementById('board');

  var jBoardName = document.createElement('input');
  jBoardName.setAttribute('type', 'text');
  jBoardName.setAttribute('value', text);
  jBoardName.classList.add('jBoardName');

  var titleHolder = document.createElement('div');
  titleHolder.classList.add('titleHolder');

  var li = document.createElement('li');
  li.classList.add('boardc');

  var line = document.createElement('div');
  line.classList.add('line');

  var container = document.createElement('div');
  container.classList.add('container');
  container.id = "container";

  var addTaskHolder = document.createElement('div');
  addTaskHolder.classList.add('addTaskHolder');

  var addTask = document.createElement('button');
  addTask.classList.add('AddTaskButton');

  var tndHolder = document.createElement('div');
  tndHolder.classList.add('tndHolder');
  tndHolder.id = "tndHolder";

  var taskName = document.createElement('input');
  taskName.setAttribute('type', 'text');
  taskName.placeholder = "Add Task...";
  taskName.id = "taskName";

  var taskDescription = document.createElement('input');
  taskDescription.setAttribute('type', 'text');
  taskDescription.placeholder = "Add Description...";
  taskDescription.id = "taskDescription";

  var closeBoard = document.createElement('button');
  closeBoard.classList.add('closeBoardButton');

  var AddTaskButtonName = document.createTextNode('Add new task');

  var x = document.createTextNode('✗');





  list.appendChild(li);
  addTask.appendChild(AddTaskButtonName);
  li.appendChild(closeBoard);
  closeBoard.appendChild(x);
  li.appendChild(titleHolder);
  titleHolder.appendChild(jBoardName);
  titleHolder.appendChild(line);
  titleHolder.appendChild(addTaskHolder);
  addTaskHolder.appendChild(addTask);
  addTaskHolder.appendChild(tndHolder);
  tndHolder.appendChild(taskName);
  tndHolder.appendChild(taskDescription);
  li.appendChild(container);

  list.insertBefore(li, list.childNodes[0]);


/*ADD TASK NAME AND DESCRIPTION*/
  taskName.addEventListener('keypress' , function (taskName) {
        if (taskName.keyCode == 13) {
          var name = this.value;
          var parent = this.parentNode;
          var des = parent.lastChild.value;
          if (name || des) addTasking(name , des);

        }
  });

  taskDescription.addEventListener('keypress' , function (taskDescription) {
    if (taskDescription.keyCode == 13) {
      var des = this.value;
      var parent = this.parentNode;
      var name = parent.firstChild.value;
      if (name || des) addTasking(name , des);

    }
});

  document.getElementById('boardName').value = "";

  closeBoard.addEventListener('click', removeBoard);

  addTask.addEventListener('click', dropMenu);


/*CHECKED TASK*/
  function chekedTask() {
    var parent = this.parentNode;
    var neighbor = parent.previousSibling;
    var inpD = neighbor.lastChild;
    var inpN = neighbor.firstChild;

    inpD.classList.toggle('tskNameC');
    inpN.classList.toggle('tskDescriptionC');
  }
/*DELETE TASK*/
  function removeTask() {
    var parent = this.parentNode.parentNode.parentNode;
    var item = this.parentNode.parentNode
    parent.removeChild(item);
  }

/*ADD TASK*/
  function addTasking(name, des) {


    var task = document.createElement('div');
    task.classList.add('task');
    task.idd = "taskk";

    var inputsHolder = document.createElement('div');
    inputsHolder.classList.add('inputsHolder');
    inputsHolder.id = "inputsHolder";

    var buttonsHolder = document.createElement('div')
    buttonsHolder.classList.add('buttonsHolder');
    buttonsHolder.id = "buttonsHolder";

    var tskName = document.createElement('input');
    tskName.setAttribute('type', 'text');
    tskName.setAttribute('value', name);
    tskName.classList.add('tskName');
    tskName.id = "tskName";

    var tskLine = document.createElement('div');
    tskLine.classList.add('tskLine');

    var tskDescription = document.createElement('input');
    tskDescription.setAttribute('type', 'text');
    tskDescription.setAttribute('value', des);
    tskDescription.classList.add('tskDescription');
    tskDescription.id = "tskDescription";

    var tskClose = document.createElement('button');
    tskClose.classList.add('tskClose');

    var tskButtonsLine = document.createElement('div');
    tskButtonsLine.classList.add('tskButtonsLine');

    var tskChecked = document.createElement('button');
    tskChecked.classList.add('tskChecked');
    tskChecked.id = "tskChecked";

    var closeSymbol = document.createTextNode('☒');
    var checkedSymbol = document.createTextNode('☑');

    container.appendChild(task);
    task.appendChild(inputsHolder);
    task.appendChild(buttonsHolder);
    inputsHolder.appendChild(tskName);
    inputsHolder.appendChild(tskLine);
    inputsHolder.appendChild(tskDescription);
    buttonsHolder.appendChild(tskClose);
    buttonsHolder.appendChild(tskButtonsLine);
    buttonsHolder.appendChild(tskChecked);
    tskClose.appendChild(closeSymbol);
    tskChecked.appendChild(checkedSymbol);

    tskChecked.addEventListener('click', chekedTask);
    tskClose.addEventListener('click', removeTask);
    container.insertBefore(task, container.childNodes[0]);


    var parent = task.parentNode;
    var neighbor = parent.previousSibling;
    var lastChil = neighbor.lastChild;
    var tndd = lastChil.lastChild;
    var inpD = tndd.lastChild;
    var inpN = tndd.firstChild;
    inpD.value = "";
    inpN.value = "";



  }
}

/*DROP MENU FOR ADDTASK BUTTON*/
function dropMenu() {

    var parent = this.parentNode;
    var child = parent.lastChild;

  child.classList.toggle("tndHolderS");
}
