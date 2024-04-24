// file ini digunakan untuk mengurus bussiness logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc

class User {

    constructor() {
        this.users = this.getUsers() || []
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData
        } 

        this.users.push(newUser)
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = "../signin.html"
        return {
            success: true
        }
    }

    signInUser(usernameByInput) {

        // proses pemeriksaan data username pada localstorage
        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());
        
        if(userExists) {
            // proses pengembalian data ke signin.js controller
            return {
                success: true,
                username
            }
        } else {
            return {
                success: false,
                message: 'Data tidak ditemukan'
            }
        } 
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || []
    }
}