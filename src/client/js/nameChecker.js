function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        console.log("Welcome, Captain!")
    }
    else{
        console.log("Sorry")
    }
}

export { checkForName }
