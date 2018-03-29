const view = `
<div>
    <input v-model="input">

    <ul>
        <li v-for="row in list.predictions" @click="selected(row)">{{ row.description }}</li>
    </ul>

    <pre>{{ select }}</pre>

</div>
`

const GoogleMap = {
    template: view,
    data: () => {
        return {
            input: '',
            list: {
                predictions: []
            },
            select: {}
        }
    },
    methods: {
        selected: function(row) {
            this.select = row
        }
    },
    watch: {
        input(input) {
            let params = new URLSearchParams();
            params.append('input', input);
            axios('./autocomplate.php?' + params.toString()).then(res => this.list = res.data)
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'google-map': GoogleMap
    },
})