var m = require("mithril")

var Server = {
    serverList: [],
    availableFilters: [],
    selectedFilters: {
        price: {
            min: 0,
            max: 9999
        },
        storage: {
            min: 0,
            max: 7200
        },
        location: [],
        ramType: [],
        ramSize: [],
        hddType: [],
    },
    searchServer: function() {
        console.log(this.selectedFilters)
        return m.request({
            method: "GET",
            url: "http://127.0.0.1:8000/api/server",
            params: this.selectedFilters
        })
        .then(function(result) {
            Server.serverList = result.servers
            Server.availableFilters = result.availableFilters
        })
    }
}

module.exports = Server