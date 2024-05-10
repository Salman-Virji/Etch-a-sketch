const container = document.querySelector("#container");
const btnContainer = document.querySelector("#btnContainer")





let setRows = 16;
let setColumns = 16;
let changeColumns = document.querySelectorAll("column");
const clearBtn = document.createElement("btn");
const sizeBtn = document.createElement("btn");

sizeBtn.textContent="Change size";
clearBtn.textContent="Reset Grid";
btnContainer.appendChild(clearBtn);
btnContainer.appendChild(sizeBtn);
function createGrid(setRows,setColumns){
    for (i = 0; i < setRows; i++) {
        const row = document.createElement("row");
        
        container.appendChild(row);

       
        for (j = 0; j < setColumns; j++) {
          const column = document.createElement("column");
          //column.textContent = "hi";
          row.appendChild(column);

          column.addEventListener('mousemove', () => {
            column.style.backgroundColor = "black";
          });
          clearBtn.addEventListener('click', () =>{
            column.style.backgroundColor ="white";
          });
        }
      }
      
      

}



function deleteGrid(){
    container.replaceChildren();
    
}

function gridSize(setColumns,setRows){
    sizeBtn.addEventListener('click', () => {
        let size = prompt("Enter size in this format '16x16'" ,"16x16");
        
        
        const myArr = size.split("x");
        setRows = myArr[0];
        setColumns= myArr[1];
        console.log("row", setRows , "columns" , setColumns);
        deleteGrid();
        createGrid(setColumns,setRows);

    });

   
}

gridSize();
createGrid(setRows,setColumns);
