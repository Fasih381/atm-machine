import inquirer from "inquirer";
let bankbalance = 10000;
let mypin = 3811;
let pinanswer = await inquirer.prompt({
    name: "Pin",
    message: "Type Your Pin",
    type: "number",
});
if (pinanswer.Pin === mypin) {
    console.log("Your Pin is Correct !!");
    let OperationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Select one of the following Opeartor",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (OperationAns.Operation === "Withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the Amount",
                type: "list",
                choices: ["1000", "5000", "10000", "CustomAmount"]
            }
        ]);
        if (amountans.amount === "CustomAmount") {
            let customamountans = await inquirer.prompt([
                {
                    name: "customamount",
                    message: "Enter Your Amount",
                    type: "number"
                }
            ]);
            // customamountans.customamount === amountans.amount
            if (customamountans.customamount > bankbalance) {
                console.log("Insufficient balance");
            }
            else {
                bankbalance -= customamountans.customamount;
                console.log("Withdrawal Sucessfull...!");
                console.log("Your remaining Balance is $", { bankbalance });
            }
        }
        ;
        if (amountans.amount <= bankbalance) {
            bankbalance -= amountans.amount;
            console.log("Your Remaining Balance is" + bankbalance);
        }
        else if (amountans.amount >= bankbalance) {
            console.log("Your Balance is Insufficient");
        }
    }
    else if (OperationAns.Operation === "Check Balance") {
        console.log("Your Balance is" + bankbalance);
    }
    ;
}
else {
    console.log("Incorrect Pin"),
        console.log("For Checker Correct Pin is 3811");
}
;
