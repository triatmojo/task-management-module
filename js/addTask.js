document.addEventListener('DOMContentLoaded', () => {

    // step 1 => 24 Agustus 2024
    const now = new Date()
    // const indonesianDay = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    // const indonesianMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    // const day = indonesianDay[now.getDay()]
    // const month = indonesianMonth[now.getMonth()]

    // step 2 => 24-04-2024
    const years = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')

    const taskForm = document.getElementById('taskForm')
    const taskManager = new Task()

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: `${day}-${month}-${years}` 
        }

        const result = taskManager.saveTask(taskData)

        if(result.success) {
            alert('berhasil tersimpan')
            window.location.href = '../tasks.html'
        } else {
            console.log('proses simpan data gagal')
        }
    })
})