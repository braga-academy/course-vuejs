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
        ]

    },
    computed: {
        actives(){
            return this.states.filter(s => s.selected === true)
        }
    }
})