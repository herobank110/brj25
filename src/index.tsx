import React from "react"
import {createRoot} from "react-dom/client";
const container = document.getElementById("hud");
const root = createRoot(container);
root.render(<div>Hello world</div>);

import "./index1"



// import { onPlayerJoin, insertCoin, isHost, myPlayer } from "playroomkit";

// async function init(event){
//     await insertCoin();
//     onPlayerJoin((player) => {
//         console.log("Player joined", player);
//     });
//     loop()
// }
// function loop(){
//     if(isHost()){
//         console.log("I am the host");
//     }
//     console.log("My player is", myPlayer());
//     requestAnimationFrame(loop);
// }