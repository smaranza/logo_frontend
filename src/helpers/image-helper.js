export default {
    methods: {
        getFullPath(fileName) {
            return `/src/assets/images/${fileName}`
        },
        getUrl(fileName) {
            return `url('${this.getFullPath(fileName)}')`
        }
    },
}