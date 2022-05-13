export default {
    props: {
        title: String,
        shortdesc: String,
    },
    setup(props) {
        // Return all `props`
        return Object.assign({}, props);
    },
    template: `
    <div>
    <h3>{{ title}}</h3>
    <div>{{ shortdesc }}</div>
    </div>
    `
}
