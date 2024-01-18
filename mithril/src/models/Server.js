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
            url: "https://www.main-bvxea6i-bevc5xhy4iabo.fr-4.platformsh.site/api/server",
            params: this.selectedFilters
        })
        .then(function(result) {
            Server.serverList = result.servers
            Server.availableFilters = result.availableFilters
        })
    }
}

module.exports = Server