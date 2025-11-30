function inputFunc() {
    const input = document.getElementById("write");
    console.log(input.value);
    // alert("You typed: " + input.value);
    const username = input.value
const greetUser = document.querySelector("h1")
greetUser.textContent="Hello,"+ username
}

// event listener must be OUTSIDE the function
document.getElementById("btn").addEventListener("click", inputFunc);
const redbox=document.getElementById("box1")
redbox.addEventListener("click",()=>{
    redbox.style.backgroundColor="red"
})
const colors={
    box1:"red",
    box2:"blue",
    box3:"green",
    box4:"yellow",
};
const boxes = document.querySelectorAll(".container div");

boxes.forEach(box => {
    let flag = false;

    box.addEventListener("click", () => {
        if (!flag) {
            box.style.backgroundColor = colors[box.id];
            flag = true;
        } else {
            box.style.backgroundColor = "transparent";
            flag = false;
        }
    });
});

