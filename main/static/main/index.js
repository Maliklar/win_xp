// document.getElementById('file-explorer').addEventListener('mousedown', function(event){
//     // console.log(event.clientX);
//     // let mouse_initX = event.clientX;
//     // let mouse_initY = event.clientY;
//     // let window_initX = document.getElementById('file-explorer').offsetLeft;
//     // let window_initY = document.getElementById('file-explorer').offsetTop;
    
    

//     if(event.type == "mousedown"){
//         document.getElementById('file-explorer').addEventListener('mousemove', e =>{
//             let xMovement = mouse_initX - e.clientX;
//             document.getElementById('file-explorer').style.left = (window_initX - xMovement)+"px";
            
//             console.log(xMovement);
//             let yMovement = mouse_initY - e.clientY;
//             document.getElementById('file-explorer').style.top = (window_initY - yMovement)+"px";
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", () => {

    let down = false;
    let mouse_initX, mouse_initY, window_initX, window_initY;
    $('#file-explorer').on('mousedown mouseup mousemove', e =>{
        
        
        if(e.type == "mousedown"){
            console.log("mouse is down");
            mouse_initX = e.clientX;
            mouse_initY = e.clientY;
            window_initX = document.getElementById('file-explorer').offsetLeft;
            window_initY = document.getElementById('file-explorer').offsetTop;  

            down = true;

        }
        if(e.type == "mousemove" && down){
            console.log("mouse is down and moving");
                let xMovement = mouse_initX - e.clientX;
                document.getElementById('file-explorer').style.left = (window_initX - xMovement)+"px";
            
                // console.log(xMovement);
                let yMovement = mouse_initY - e.clientY;
                document.getElementById('file-explorer').style.top = (window_initY - yMovement)+"px"
        }
        if(e.type == "mouseup"){
            down = false;
        }
    });

    $(document).click(function(event){
        if(event.target.id != "start-button"){
        if(startMenuVisibility){
        document.getElementById('start-menu').style.display = "none";
        startMenuVisibility = !startMenuVisibility;
    }

        }
    });


});
let startMenuVisibility = false;
function startButton(){
    if(startMenuVisibility){
        document.getElementById('start-menu').style.display = "none";
        startMenuVisibility = !startMenuVisibility;
    }
    else{
        document.getElementById('start-menu').style.display = "block";
        startMenuVisibility = !startMenuVisibility;
    }
}