// function timestable() {
// let number = document.getElementById('number').value;
// let table = document.getElementById('table');
// let tableHTML = '<table><tr><th>Number = </th></tr>';

// for (let i = 1; i <= 10; i++) {
// tableHTML += `<tr><td>${number} x ${i} =</td>
// <td>${number * i}</td>
// </tr>`;
// }
// tableHTML += '</table>';
// table.innerHTML = tableHTML;
// }


// function red(){
// const changered= document.getElementById("colorred")
// changered.style.backgroundColor = 'red'
// changered.style.color ='white'

// }



function random() {
    const colors = ['red', 'blue', 'purple']
    return colors[Math.floor(Math.random() * colors.length)]
}

function colors() {
    const select = document.getElementById('color')
    const buttons = document.querySelectorAll('button')
    const choose = select.value
    buttons.forEach(button => {
        if (choose === "random") {
            button.style.backgroundColor = random()
        } else if (choose) {
            button.style.backgroundColor = choose
        } else {
            button.style.backgroundColor = '' 
        }
    })
}

