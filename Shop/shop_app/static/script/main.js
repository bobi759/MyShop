// function getAllTodos(url) {
//     $.ajax({
//         url: url,
//         type: "GET",
//         dataType: "json",
//         success: (data) => {
//             const todoList = $("#todoList");
//             todoList.empty();
//
//             (data.context).forEach(todo => {
//                 const todoHTMLElement = `
//           <li>
//             <p>Task: ${todo.task}</p>
//             <p>Completed?: ${todo.completed}</p>
//           </li>`
//                 todoList.append(todoHTMLElement);
//             });
//         },
//         error: (error) => {
//             console.log(error);
//         }
//     });
// }

async function getNumber() {
    let response = await fetch('/temp/', {
        method: 'get',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
        }
    })
    let data = await response.json()
    let newLine = document.createElement("li")
    newLine.innerText = data.number
    document.querySelector("ul").appendChild(newLine)
    console.log(await data)
}
