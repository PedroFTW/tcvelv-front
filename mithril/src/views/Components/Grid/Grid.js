var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m('table.table.table-hover',
            m("thead", m("tr", vnode.attrs.fields.map(function (field) {
                return m("th", field.label)
            }))),
            m("tbody", vnode.attrs.dataIterator.map(function (data) {
                return m("tr", vnode.attrs.fields.map(function(field) {
                    return m("td", data[field.field])
                }))
            }))
        )
    }
}