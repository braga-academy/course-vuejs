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
    methods: {
        addTask(){
            const task = clone(this.newTask);
            this.tasks.push(task);
        }
    }
})