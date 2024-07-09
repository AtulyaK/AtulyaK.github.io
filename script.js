// const submit = document.getElementById("submit");
// function getData() {
//     const url = 'contact.json';
//     fetch(url)
//     .then((rep) => rep.json())
//     .then((data) => {
//         console.log(data);
//         alert(data);
//     })
// }
// const url = ""
// function sendContact() {
//     Request({

//     }) 
// }

const url_recieve = "https://script.google.com/macros/s/AKfycbwYSnb-gZIHLKp6QMTKq6UPjliS9ddyB4OrOcOpCvTk4XQA0Wv2PcLdgeDM1iQJdT3_MQ/exec";
const btn = document.querySelector(".display_data");
const output = document.getElementById("loc");
function wrapper () {
    btn.onclick = (e) => {
        fetch(url_recieve)
        .then(rec => rec.json())
        .then(data => {
            console.log(data);
            const headings = data[0];
            const rows = data.slice(1);
            console.log(headings);
            console.log(rows);
            outputData(headings,rows);
        })
    }
}
function outputData(headings, rows) {
    const tabl = maker('table', output, 'table');
    const heading = maker('tr', tabl, 'row');
    headings.forEach(element => {
        const el = maker('th', heading, 'th');
        el.textContent = element;
    });
    rows.forEach(element => {
        const r = maker('tr', tabl, 'row');
        rows.forEach( col => {
            const el = maker('td',r,'td');
            el.textContent = col;
        });
    });
}

function maker(t,parent,c) {
    const el = document.createElement(t);
    el.classList.add(c);
    return parent.appendChild(el);
}
document.addEventListener('DOMContentLoaded',wrapper);