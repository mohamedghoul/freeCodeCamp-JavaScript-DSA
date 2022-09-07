function checkCashRegister(price, cash, cid) {
    // Calculate total cash in drawer using helper function
    let totalCid = calculateTotalCid(cid)

    // Find the change that needs to be given to the customer
    let changeDue = (cash - price)

    // Check if there are enough funds to give the customer their full change and return INSUFFICIENT_FUNDS if that's not the case
    if (totalCid < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    // Otherwise, check if the total cash in drawer is the same as the change due and return CLOSED if that is the case
    if (totalCid === changeDue.toFixed(2)) {
        return { status: "CLOSED", change: cid }
    }
    // Otherwise, calculate the change and return OPEN
    if (totalCid > changeDue) {
        // Calculate change using helper function. Returns total change and the new changeDue value in an object
        let changeObj = calculateTotalChange(changeDue, cid)
        changeDue = changeObj.changeDue
        let change = changeObj.change
        // Check if there is any change that is still due. If there is any, we return INSUFFICIENT_FUNDS instead of OPEN
        if (changeDue > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        // Otherwise, we return OPEN with the change
        else return { status: "OPEN", change: change };
    }
}

function calculateTotalCid(cid) {
    let totalCid = 0;
    for (let element of cid) {
        totalCid = totalCid + element[1]
    }
    return totalCid.toFixed(2)
}

function calculateTotalChange(changeDue, cid) {
    // Create a table (2D array) containing all the units and their values
    const units = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }

    // Create an empty array where the change will be appended
    let change = []

    // Reverse cid array to sort it from highest to lowest
    cid = cid.reverse();

    // Iterate through all the elements of the sorted cid array
    for (let element of cid) {
        // [0] is the name of the unit, while [1] is the value
        let tempChange = [element[0], 0];
        // While the change due is greater than the value of the unit you are currently iterating through and the amount in drawer for that unit is greater than 0
        while (changeDue >= units[element[0]] && element[1] > 0) {
            // Add the unit value for the unit you are currently iterating through to the temporary change array and update the cid and changeDue accordingly
            tempChange[1] = tempChange[1] + units[element[0]];
            element[1] = element[1] - units[element[0]];
            changeDue = (changeDue - units[element[0]]).toFixed(2);
        }
        // If the change is greater than 0, push it to the change array
        if (tempChange[1] > 0) {
            change.push(tempChange);
        }
    }
    return { change: change, changeDue: changeDue }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
