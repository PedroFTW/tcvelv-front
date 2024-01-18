var m = require("mithril")

module.exports = {
    view: function(vnode) {
//         <nav class="navbar fixed-top bg-body-tertiary">
//   <div class="container-fluid">
//   <a class="navbar-brand" href="#">Fixed top</a>
// </div>
// </nav>
        return m("nav.navbar.fixed-top.bg-body-tertiary",
            m(".container-fluid",
                m("a.navbar-brand", {href: "#"}, "Leaseweb Tech Demo")
            )
        )
    }
}