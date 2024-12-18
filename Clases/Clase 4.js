const crypto = require('crypto');

class UserManager {
    static users = []; // Static property to store users

    constructor() {
        // No need to initialize this.users since we're using static users
    }

    addUser(user) {
        if (!user.name || !user.lastName || !user.username || !user.password) {
            console.log("Incomplete user");
            return;
        }

        const { name, lastName, username, password } = user; // Destructuring
        const hashedPassword = this.hashPassword(password); // Encrypt the password
        
        // Add the user to the static users array
        UserManager.users.push({
            name,
            lastName,
            username,
            password: hashedPassword,
        });

        console.log(`User ${username} added successfully.`);
    }

    hashPassword(password) {
        const hash = crypto.createHash('sha256'); // Create hash
        hash.update(password);
        return hash.digest('hex');
    }

    getUsers() {
        return UserManager.users;
    }

    validUser(username, password) {
        const users = this.getUsers();

        const user = users.find((u) => u.username === username);

        if (!user) {
            console.log("User doesn't exist");
            return false;
        }

        const hashedPassword = this.hashPassword(password);

        if (user.password === hashedPassword) {
            console.log("Logged in successfully");
            return true;
        } else {
            console.log("Incorrect password");
            return false;
        }
    }
}

const userManager = new UserManager();
userManager.addUser({
    name: "Bini",
    lastName: "Ruiz",
    username: "binzia.rz",
    password: "babyme2424",
});

userManager.validUser("binzia.rz", "babyme2424"); // Should log "Logged in successfully"
userManager.validUser("binzia.rz", "babyme"); // Should log "Incorrect password"
userManager.validUser("bini", "babyme");

/** npm
 * 
 * npm install nodemon -g Hacer dependencia global
 */
