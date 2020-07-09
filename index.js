window.onload = () => {
    let who = ["a", "b", "c"];
    
let randomWho = Math.floor (Math.random()*3);
    document.querySelector ("#excuse").innerHTML = `Hello ${who[randomWho]}`;
}
