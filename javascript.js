//variables
const gridContainer = document.getElementById('grid-container');
const createBtnSmall = document.getElementById('create-button-small');
const createBtnMedium = document.getElementById('create-button-medium');
const createBtnBig = document.getElementById('create-button-big');
const clearBtn = document.getElementById('clear-button');
const changeColorBlue = document.getElementById('color-blue');
const changeColorRed = document.getElementById('color-red');
const changeColorGreen = document.getElementById('color-green');
const Eraser = document.getElementById('button-eraser');

//default grid creation
function defaultGrid () {
  for (let j = 0; j < 265; j++) {
      const square = document.createElement('div');
      square.classList.add('grid-content');
      gridContainer.appendChild(square);
    }
  }

   defaultGrid(265);
   
   
//small grid creation 
createBtnSmall.addEventListener('click', function() {
  deleteGrid ();
  creatingGrid ();

  const allDivs = document.querySelectorAll('.grid-content');
allDivs.forEach((div) => {
  div.addEventListener('mouseover', (event) => {
    div.style.backgroundColor = 'white';
  });
})
});

//medium grid creation
createBtnMedium.addEventListener('click', function() {
  deleteGrid ();
  creatingGrid ();
  const allDivs = document.querySelectorAll('.grid-content');
allDivs.forEach((div) => {
  div.addEventListener('mouseover', (event) => {
    div.style.backgroundColor = 'white';
  });
})
});

//big grid creation
createBtnBig.addEventListener('click', function() {
  deleteGrid ();
  creatingGrid ();
  const allDivs = document.querySelectorAll('.grid-content');
allDivs.forEach((div) => {
  div.addEventListener('mouseover', (event) => {
    div.style.backgroundColor = 'white';
  });
})
});

//Clear grid event 
clearBtn.addEventListener('click', function() {
  clearGrid();
});

//clear grid function
function clearGrid () {
  const grid = document.querySelectorAll('.grid-content');
  grid.forEach(grid => {
    if (grid.style.backgroundColor !== "white") {
      grid.style.backgroundColor = "white";
    }
  })
}

//this function takes user input and base on button creates small, medium, big grids
function creatingGrid () {
  let userInput = prompt("Pick grid");
  if (userInput > 100) {
    console.log('ERROR');
  } for (let i = 0; i < userInput; i++) {
      for (let j = 0; j < userInput; j++) {
      const square = document.createElement('div');
      square.classList.add('grid-content');
      gridContainer.appendChild(square);
    }
  }
   }

   //delete grid
function deleteGrid() {
  const allDivs = document.querySelectorAll('.grid-content');
  allDivs.forEach(div => {
    div.remove();
  });
}
  
  //event listener for changing color to blue
    changeColorBlue.addEventListener('click', function() {
      const allDivs = document.querySelectorAll('.grid-content');
      allDivs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
          div.style.backgroundColor = 'blue';
        });
      })
    });
  
  //event listener for changing color to red
    changeColorRed.addEventListener('click', function() {
      const allDivs = document.querySelectorAll('.grid-content');
      allDivs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
          div.style.backgroundColor = 'red';
        });
      })
    });
  
  //event listener for changing color to green
    changeColorGreen.addEventListener('click', function() {
      const allDivs = document.querySelectorAll('.grid-content');
      allDivs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
          div.style.backgroundColor = 'green';
        });
      })
    });

	//event listener for changing color to act as eraser
    Eraser.addEventListener('click', function() {
      const allDivs = document.querySelectorAll('.grid-content');
      allDivs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
          div.style.backgroundColor = 'white';
        });
      })
    });
