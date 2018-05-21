let card = {
    props: {
        success: false,
        number: {type: Number},
    },
    data: {
        messageSuccess: 'Gagné',
        messageError: 'Perdu',
    },
    template: `<div @click="" @click="choiceCard"></div>`,
    computed: {
        choiceCard() {
            console.log(this.number)
            console.log(this.rightNumber)
            if (this.number == this.rightNumber) {
                console.log('ok')
                this.success = true
            } else {
                console.log('ko')
                this.success = false
            }
        }
    }
}

let numberGoodCard = {
    props: {
        rightNumber: {type: Number}
    },
    computed: {
        responseAPI() {
            const req = new XMLHttpRequest()
            req.open('GET', 'https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new', false)
            req.send(null)
            this.rightNumber = req.responseText
            return this.rightNumber
        }
    },
}

let score = {
    data() {
        return {
            count: 0,
            successParty: false,
            messageScore: 'Vous avez gagné la partie'
        }
    },
    props: {
        start: { type: Number, default: 0 },
    },
    computed: {
        total: function() {
            return this.start + this.count
        }
    },
    methods: {
        increment() {
            if (this.count == 5) {
                successParty = true
            } else {
                return this.count++
            }
        }
    },
    template: `<div class="ui message"></div>`
}

let vm = new Vue ({
    el: '#app',
    data: {
        message: 'Erreur',
        rightNumber: -1,
        number: -1
    },
    components: {card, numberGoodCard, score},
})