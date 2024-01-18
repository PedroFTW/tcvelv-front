var m  = require("mithril")
var Server = require("../models/Server")

module.exports = {
    form: [],
    view: function() {
        return m(".container",
            m(".row",
                m(".col",
                m("label.form-label", {for: "location"}, "Location"),
                    m("select.form-select", {id: "location", onchange: this.updateSelectFilters}, m("option", "All"), Server.availableFilters.location.map(function(location){
                        return m("option", {value: location}, location)
                    }))
                ),
                m(".col",
                    m("label.form-label", {for: "ramType"}, "Ram Type"),
                    Server.availableFilters.ramType.map(function(ramOption) {
                        return m(".form-check",
                            m("input.form-check-input.ram-option", {type: "checkbox", value: ramOption}),
                            m("label.form-check-label", {for: ramOption}, ramOption)
                        )
                    })
                ),
                m(".col",
                    m("label.form-label", {for: "ramSize"}, "Ram Size"),
                    m(".form-check-inline", 
                    Server.availableFilters.ramSize.map(function(ramSize) {
                        return m(".form-check-inline",
                            m("input.form-check-input.ram-size", {type: "checkbox", value: ramSize}),
                            m("label.form-check-label", {for: ramSize}, ramSize + "GB")
                        )
                    }))
                ),
                m(".col",
                m("label.form-label", {for: "hddType"}, "Hdd Type"),
                    m("select.form-select", {id: "hddType", onchange: this.updateSelectFilters}, m("option", "All"), Server.availableFilters.hddType.map(function(hddType){
                        return m("option", {value: hddType}, hddType)
                    }))
                )
            ),
            m(".row",
                m(".col-sm-3",
                m("label", {for: "storageRange"}, "Hdd Storage"),
                m(".input-group",
                    m("span.input-group-text", "Min"),
                    m("input.form-control", {id: "storageMin", type: "numeric", oninput: this.updateStorage}),
                    m("span.input-group-text", "Max"),
                    m("input.form-control", {id: "storageMax", type: "numeric", oninput: this.updateStorage}),
                )),
                m(".col-sm-3",
                m("label", {for: "priceRange"}, "Price Range"),
                m(".input-group",
                    m("span.input-group-text", "Min"),
                    m("input.form-control", {id: "priceMin", type: "numeric", oninput: this.updatePrice}),
                    m("span.input-group-text", "Max"),
                    m("input.form-control", {id: "priceMax", type: "numeric", oninput: this.updatePrice}),
                ))
            ),
            m("button.btn.btn-primary", {onclick: this.refresh}, "Filter")
        )
    },
    updatePrice: function(e) {
        if(e.target.id == "priceMin") {
            Server.selectedFilters['price']['min'] = e.target.value
        } else if(e.target.id == "priceMax") {
            Server.selectedFilters['price']['max'] = e.target.value
        }
    },
    updateStorage: function(e) {
        if(e.target.id == "storageMin") {
            Server.selectedFilters['storage']['min'] = e.target.value
        } else if(e.target.id == "storageMax") {
            Server.selectedFilters['storage']['max'] = e.target.value
        }
    },
    updateSelectFilters: function(e) {
        if (e.target.value == 'All') {
            Server.selectedFilters[e.target.id] = []
        } else {
            Server.selectedFilters[e.target.id] = [e.target.value]
        }
    },
    refresh: function() {
        var ramOptions = document.getElementsByClassName("ram-option")
        var filterRamType = []
        for (let ramOption of ramOptions) {
            if (ramOption.checked) {
                filterRamType.push(ramOption.value)
            }
        }

        var ramSizes = document.getElementsByClassName("ram-size")
        var filterRamSize = []
        for (let ramSize of ramSizes) {
            if (ramSize.checked) {
                filterRamSize.push(ramSize.value)
            }
        }

        Server.selectedFilters["ramType"] = filterRamType
        Server.selectedFilters["ramSize"] = filterRamSize

        Server.searchServer()
    }
}