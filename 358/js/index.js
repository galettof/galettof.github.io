// total number of standards
let tot = 49;
// change max value for input fields
{
    // variable defined with let is local to {} block
    let inputVal = document.getElementsByClassName("inputEvals");
    for (let i=0; i < inputVal.length; i++) {
	inputVal[i].setAttribute('max', tot);
    }
}

// letter grades in order
let letters = ['A','A-','B+','B','B-','C+','C','D'];

// nested array of min evals
let thresholds = [
    [0, 0, tot - Math.ceil(tot*0.8), Math.ceil(tot*0.8)],
    [0, 0, tot - Math.ceil(tot*0.4), Math.ceil(tot*0.4)],
    [0, 0, tot],
    [0, tot - Math.ceil(tot*0.66), Math.ceil(tot*0.66)],
    [0, tot - Math.ceil(tot*0.33), Math.ceil(tot*0.33)],
    [0, tot],
    [tot - Math.ceil(tot*0.75), Math.ceil(tot*0.75)],
    [tot - Math.ceil(tot*0.5), Math.ceil(tot*0.5)]
];

// create array of eval changes
function evalChanges(myEvals) {
    var len, changesTable = [], changes, dupes = [];
    for (var i=0; i < letters.length; i++) {
	// temporary place for changes
	changes = [];
	// permanent place for changes
	changesTable[i] = [];
	// record length of evaluations for letter grade
	len = thresholds[i].length;
	// subtract evals from thresholds
	for (var j=0; j < len; j++) {
	    changes[j] = thresholds[i][j] - myEvals[j];
	}
	// subtract later evals from last positive threshold
	for (var j=len; j < myEvals.length; j++) {
	    changes[len-1] -= myEvals[j];
	}
	// last change negative suggests worse evals, correct
	if (changes[len-1] <= 0) {
	    changes[len-2] += changes.pop();
	}
	// record row of changes
	for (var j=0; j < changes.length; j++) {
	    changesTable[i][j] = changes[j];
	}
	// add letter in front
	changesTable[i].unshift(letters[i]);
	// find and record duplicates
	if (i>0) {
	    let same = true;
	    for (var j=0; j < changes.length; j++) {
		if (changesTable[i-1][j+1] != changes[j]) {
		    same = false;
		    break;
		}
	    }
	    if (same == true) {
		dupes.unshift(i);
	    }
	}
    }
    // remove duplicates
    for (var i=0; i < dupes.length; i++) {
	changesTable.splice(dupes[i],1);
    }
    // return table of changes
    return changesTable;
}

// create html table of grades
function updateTableHTML(myArray) {
    // variables for HTML table head, body, row, cell
    var tableHead = document.getElementById("gradesTableHead"),
	tableBody = document.getElementById("gradesTableBody"),
        newRow, newCell;
    // Reset the table
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";
    // Build the new table head
    tableHead.innerHTML = "<tr><th></th><th>L</th><th>S</th><th>M</th><th>E</th></tr>";
    // Build the new table body
    for (var i=0; i < myArray.length; i++) {
	// create new row and insert in table body
        newRow = document.createElement("tr");
        tableBody.appendChild(newRow);
	// create new cell and insert in row
        for (var j=0; j < myArray[i].length; j++) {
            newCell = document.createElement("td");
            newCell.textContent = myArray[i][j];
            newRow.appendChild(newCell);
        }
    }
}

// button press code
function buttonPress() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementsByClassName("inputEvals");
    // convert input from HTML ObjectCollection to array
    let inputEvalsArray = [];
    for (var i=0; i < inputVal.length; i++) {
	inputEvalsArray[i] = Number(inputVal[i].value);
    }
    // validate input
    // the HTML input type already restricts to numbers
    // check input is integer in correct range
    let sum = 0;
    for (var i=0; i < inputEvalsArray.length; i++) {
	let x = inputEvalsArray[i];
	if (x<0 || x>tot || Math.floor(x) != x) {
	    alert('Enter integers between 0 and ' + tot + ' included.');
	    return null;
	}
	sum += x;
    }
    if (sum>tot) {
	    alert('Values entered should add up to ' + tot + ' or less.');
	    return null;
    }
    // compute and print number of missing standards
    let taken = 0;
    for (var i=0; i < inputEvalsArray.length; i++) {
	taken += inputEvalsArray[i];
    }
    let missing = tot - taken;
    document.getElementById("missingStatement").innerHTML = "Assuming a total of " + tot + " standards, you are missing " + missing + " standards.";
    // print table instructions
    document.getElementById("tableInstructions").innerHTML = "The table below shows how to improve your standards evaluations to achieve a certain grade. A negative number under an evaluation letter (L, S, M, E) means you need to reduce the number of standards with that evaluation by at least that amount. Similarly, a positive number means you need to increase the number of standards with that evaluation by at least that amount.";
    // produce table of changes
    let myChanges = evalChanges(inputEvalsArray);
    // update HTML table with changes
    updateTableHTML(myChanges);
}


// testing code
console.log(thresholds);
//let myEvals = [0,11,20,14];
//console.log(myEvals);
//let myChanges = evalChanges(myEvals);
//updateTableHTML(myChanges);
