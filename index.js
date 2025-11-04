console.log("This is External JavaScript");
// while loop 

// Intialization

// while(condition){}

for(let i = 0 ; i<5 ; i++){
    stars = ""
    for(let j = 0 ; j< 5 - i ; j++){
        stars += " "
    }
    for(let k = 0 ; k <= i ; k++){
        stars += "* "
    }
    console.log(stars)
}



for (let i = 0; i < 5; i++) {
    let pattern = "";
    // Print spaces
    for (let j = 0; j<5- i; j++) {
        pattern += "  ";
    }
    // Print stars
    for (let k = 0; k<=i; k++) {
        pattern += "* ";
    }
    console.log(pattern);
}
