import './App.css';

function App() {
  function submit(event) {
    event.preventDefault();
    const taskname = document.getElementById('name').value;
    const table = document.getElementById('tablelistplanned');
    const newrow = table.insertRow(table.length);

    const cell1 = newrow.insertCell(0);
    cell1.innerHTML = taskname;
    const cell2 = newrow.insertCell(1)
    cell2.innerHTML = `<p style="color:blue" onClick="if(confirm('Click ok to change task status')){
    if (this.style.color=='blue') {
      this.innerHTML = 'In-progress';
      this.style.color ='orange';
    }else {
          this.innerHTML = 'Done';
          this.style.color ='green'
    }}">Planned</p>`;
    const cell3 = newrow.insertCell(2)
    cell3.innerHTML = `<p style="color:red" onClick="if(confirm('Click ok to delete task')){
    const row = this.parentElement.parentElement;
    document.getElementById('tablelistplanned')
    .deleteRow(row.rowIndex)}">X</p>`;
  }

  return (
    <div className="App">
      {/* <button onClick={submit} title='click here to add tasks'>Add Task</button> */}
      <form onSubmit={submit} class="styledform" autocomplete="off">
        <div>
          <input type="text" id="name" placeholder='Add a task' required ></input>
        </div>
      </form>
      <div id="container">
        <div className='container'>
          <table id="tablelistplanned" class="box" width="100%">
            <tr>
              <th>Tasks</th>
              <th><small>Status</small></th>
              <th><small>Remove</small></th>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
