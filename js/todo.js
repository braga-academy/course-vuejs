const clone = (obj) => JSON.parse(JSON.stringify(obj));

new Vue({
    el: 'body',
    data: {
        tasks: [
        {
            value: 'Tarefa Teste',
            completed: false
        },
        {
            value: 'Tarefa Teste 2',
            completed: true
        }],
        newTask: {}
    },
    computed: {
        canAddNewTask(){
            return this.newTask.value.length > 0
        }
    },
    methods: {
        addTask(){
            if(this.canAddNewTask){
                const task = clone(this.newTask);
                this.tasks.push(task);
                this.newTask = {}
            }
            
        }
    }
})