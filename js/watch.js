new Vue({
    el: 'body',
    data: {
        states: [
            {
                uf: 'CE',
                name: 'Ceará'

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
        colors: [
            'Azul',
            'Verde',
            'Amarelo'
        ],
        selected: {},
        log: []

    },
    watch: {
        selected(value, oldValue){
            this.log.push(oldValue)
        }
    }
})