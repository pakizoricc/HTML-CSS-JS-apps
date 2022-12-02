let count = 0 
let countEl = document.getElementById("count-id")
let saveEl = document.getElementById("save-el")
console.log(countEl)

function increment() {
    count = count + 1
    countEl.textContent = count /*count is equaled to number represented in HTML*/
}

function save() {
    saveEl.textContent += " " + count + " - "
    countEl.textContent = 0
    count = 0 /* when people entered in any station, then we reset count to 0 to repeat this again*/
}
