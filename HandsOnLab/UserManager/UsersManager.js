const fs = require('fs')

class usersManager{
    static users = []

    constructor(path){
        this.path = path
    }

    async createUser(user){
        if (!user.name || !user.lastName || !user.age || !user.course) return console.log("Incompleted user");
        
        const newUser = {
            name: user.name,
            lastName: user.lastName,
            age: user.age,
            course: user.course
        }

        const users = await this.getUsers()

        users.push(newUser)

        await fs.promises.writeFile(this.path, JSON.stringify(users), 'utf-8')
    }

    async getUsers(){
        try {
            let result = await fs.promises.readFile(this.path, 'utf-8') 
            const users = JSON.parse(result) 
            
            return users
        } catch (error) {
            return []
        }
    }
}

const test = async () => {
    const userManager = new usersManager('./users.json');
    
    await userManager.createUser({
        name: 'Fernando',
        lastName: 'Giraudo',
        age: 33,
        course: 'Backend'
    });

    await userManager.createUser({
        name: 'Sergio',
        lastName: 'Sosa',
        age: 28,
        course: 'React'
    });

    const users = await userManager.getUsers();
    console.log(users);
};

test();
