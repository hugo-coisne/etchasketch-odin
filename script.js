
const body = document.querySelector("body");
const button = document.createElement("button");
let big = document.createElement("div");
let size = 16;


function grid(n) {
    for (let i = 0; i < n; i++) {
        const small = document.createElement('div');
        small.classList = "column";
        for (let j = 0; j < n; j++) {
            const tiny = document.createElement("div");
            tiny.classList = "square";
            tiny.addEventListener('mouseover', function (e) {
                this.classList.add("black");
            })
            small.appendChild(tiny);
        }
        big.appendChild(small);
    }
}


function setGrid(n) {
    big.innerHTML = "";
    console.log(big.children);
    if (n <= 100 && n >= 0) {
        grid(n);
    } else {
        setGrid(size);
        setGrid(prompt("Please choose a grid size between 0 and 100"));
    }
    big.id = "big";
    body.appendChild(big);
}

button.innerText = "Select a grid size";
button.addEventListener('click', () => {
    console.log("button clicked!");
    console.log(big.children);
    setGrid(prompt("Please choose a grid size between 0 and 100"));
});
body.appendChild(button);

setGrid(size);


