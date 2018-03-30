const view = `
<div>
    <el-input v-model="input"></el-input>
    
    <el-button style="margin-top: 1rem"　type="primary" v-for="row in list.predictions" :key="row.id" @click="selected(row)">{{ row.description }}</el-button>
    
    <el-collapse-transition>
    <el-card style="margin-top: 1rem" v-show="Object.keys(select).length">
        <div style="display: flex; align-items: center;" slot="header">
            <span style="margin-right: auto">{{ select.description }}</span> <el-button @click="clear">Clear</el-button>
        </div>
        <div>{{ JSON.stringify(select, null, "\t") }}</div>>
    </el-card>
    </el-collapse-transition>

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
        selected(row) {
            this.select = row
        },

        clear() {
            this.select = {}
        },
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