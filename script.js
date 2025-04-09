function addTask(){
    let input = document.getElementById('textInput')
    let taskText = input.value.trim()
    if(taskText === '') return

    let li = document.createElement('li')
    li.textContent = taskText

    li.addEventListener('click', function(){
        li.classList.toggle('completed')
        updateCounter()
    })

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = '🗑️'
    deleteBtn.addEventListener('click', function(){
        li.remove()
        updateCounter()
    })

    li.appendChild(deleteBtn)
    document.querySelector(".taskList").appendChild(li)
    input.value = ''
    updateCounter()

    li.addEventListener('dblclick', function(){
        let newText = prompt("Edit Task", li.textContent)
        if(newText) li.textContent = newText
        li.appendChild(deleteBtn)
    })
}

function updateCounter(){
    let totalTask = document.querySelectorAll(".taskList li").length
    let completedTask = document.querySelectorAll('.taskList .completed').length

    let taskCount = document.querySelector('#taskCounter')
    taskCount.textContent = `${totalTask} task, ${completedTask} completed`
}

document.getElementById('textInput').addEventListener('keypress', function(e){
    if(e.key === "Enter") addTask();
})

document.getElementById('darkmodeToggle').addEventListener('change' , function(){
    document.body.classList.toggle("dark-mode")
})