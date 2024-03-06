const bcrypt = require('bcrypt')

// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(10);  // this method returns a promise with the generated, which can be resolved or discarded
//     const hash = await bcrypt.hash(pw, salt);

//     console.log(salt);  // print the salt
//     console.log(hash);  // print the hashed password
// }

// alternate approach of hasing in one step
const hashPassword = async(pw) => {
    const hash = await bcrypt.hash(pw, 12); // this will directly return hashed password (prefixed with the salt)
    console.log(hash)
}

const logIn = async (plainTextPw, hashedPw) => {
    const result = await bcrypt.compare(plainTextPw, hashedPw);

    if(result) {
        console.log("Logged you in! Successful Match!");
    }
    else {
        console.log("Incorrect credentials!");
    }
}

// Run this only first
// hashPassword('monkey'); // $2b$12$ujLeYsckDNezVu3BICafkuB/hMP7y1zOxyXLOBEbKDGuu2OHKaXFS

// Run it later
logIn('monkey', '$2b$12$ujLeYsckDNezVu3BICafkuB/hMP7y1zOxyXLOBEbKDGuu2OHKaXFS')