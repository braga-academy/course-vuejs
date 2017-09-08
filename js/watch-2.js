new Vue({
    el: 'body',
    data: {
        states: [
            {
                uf: 'CE',
                name: 'Ceará',
                selected: true
            },
            {
                uf: 'BA',
                name: 'Bahia'

            },
            {
                uf: 'SP',
                name: 'São Paulo'

            },
            {
                uf: 'RJ',
                name: 'Rio de Janeiro'

            }
        ],
        actives: []

    },
    watch: {
        states: {
            handler(){
                this.loadSelecteds();
            },
            deep: true
        }
    },
    ready(){
        this.loadSelecteds();  
    },
    methods: {
        loadSelecteds(){
            this.actives = this.states.filter(s => s.selected === true)
        }
    }
})