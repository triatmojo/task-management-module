// file ini untuk penghubung antara UI HTML dan model user 

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm')
    const userManager = new User()

    userForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const usernameByInput = document.getElementById('username').value
        
        const result = userManager.signInUser(usernameByInput)

        if(result.success) {
            localStorage.setItem('userLogged', usernameByInput);
            return window.location.href = '../tasks.html'
        } else {
            alert('Username tidak ditemukan')
        }
    })
})