import './App.css'

const greetings = (user) => {
  return (
    <div>
      Welcome {user}!
    </div>
  )
}

const studentsNames = [
  {name: "Pancho", grade: 7},
  {name: "Pepe", grade: 8},
  {name: "Pipo", grade: 6},
  {name: "ElJose", grade: 3},
];
let numbStudents = 0;

const listNames = (students) => {
   numbStudents = students.length
  if(students.length === 0) {
    return "There's no students in this class"
    } else {
      const liNames = students.map((data,index) => {
      return <li key={index}> {data.name} </li>
      })
    return <ul>{liNames}</ul> 
      }
}

/* const tableStudents = (object) => {
  const element1 = object.map((data, index) => {
    return (
      <tr key={index}>
        <th>{data.name}</th>
        <td>{data.grade}</td>
      </tr>
    );
  });
  return (
    <table>
      <caption>Students</caption>
      <th>Name</th>
      <th>Grade</th>
      {element1}
    </table>
  );
}; */

function app () {
  return (
    <>
    {" "}
    <div>{greetings("Toni")}</div>
    <div>{listNames(studentsNames)}</div>
    <div>There are { numbStudents } students in this class</div>
    </>
  )
}

export default app;