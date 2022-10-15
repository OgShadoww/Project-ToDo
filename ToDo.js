// create class for ToDo
class ToDo {
    // create constructor
    constructor (selector) {
        // create main element
        this.todo = document.querySelector(selector)
        this.input = this.todo.querySelector('.todo__add__task__input')
        this.menu = this.todo.querySelector('.todo__menu')
        this.addToDo = this.todo.querySelector('.todo__add__task__button')
        this.btnClearTasks = this.todo.querySelector('.todo__clear')
        this.menuItem = this.menu.querySelector('.todo__menu__item')
        // call main event
        this.event()
    }

    // add main method 
    event() {
        // event for add task 
        this.todo.addEventListener('click', (e) => {
            // check target of click
            if(e.target === this.addToDo) {
                this.createTask()
            }
            if(e.target === this.btnClearTasks) {
                this.clearTask()
            }
        })

        // event for add new task when click "Enter"
        this.input.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') { 
                this.createTask()
            }
        })
    }
    // method for create task
    createTask() {
        // create element in variable
        let item = document.createElement('div'),
            btnDelete = document.createElement('button'),
            btnFinish = document.createElement('button'),
            itemTitle = document.createElement('div')

        // add class for all element
        item.classList.add('todo__menu__item')
        btnDelete.classList.add('todo__menu__item__delete')
        btnDelete.classList.add('todo__menu__item__button')
        btnFinish.classList.add('todo__menu__item__finish')
        btnFinish.classList.add('todo__menu__item__button')
        itemTitle.classList.add('todo__menu__item__title')
    
        // append all element
        item.append(itemTitle)
        itemTitle.append(this.input.value)
        item.append(btnDelete)
        item.append(btnFinish)
        btnDelete.textContent = '-'
        btnFinish.textContent = '+'
        this.menu.append(item)

        // validate input
        if(this.input.value === '') {   
            item.remove()
            this.input.classList.add('error')
        }   else {
            this.input.classList.remove('error')
        }
        
        // add event for finish task
        btnFinish.addEventListener('click', () => {
            item.classList.toggle('finish')
        })

        // check how mutch item we have
        if(item.lenght > 1) {
            console.log('f')
        }
    }
    // method for clear all task
    clearTask() {
        console.log(this.menuItem)
    }
}

export default ToDo