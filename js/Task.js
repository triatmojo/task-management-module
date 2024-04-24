// file ini digunakan untuk mengurus bussiness logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc

class Task {

    constructor() {
        this.tasks = this.getTasks()
    }
    
    getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || []
    }

    saveTask(taskData) {
        const newTaskData = {
            id: Date.now(),
            isCompleted: false,
            createdAt: '25-04-2024',
            ...taskData
        }

        this.tasks.push(newTaskData)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))

        return {
            success: true
        }
    }

    completeTask(taskId) {
        console.log(taskId)
        const index = this.tasks.findIndex(task => task.id === taskId)

        if(index !== -1) {
            this.tasks[index].isCompleted = true
            this.updateLocalStorage()
        }
    }

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
} 