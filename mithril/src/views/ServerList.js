var m = require("mithril")
var Server = require("../models/Server")
var Navbar = require("./Components/Layout/Navbar")
var Grid = require("./Components/Grid/Grid")
const ServerListFilter = require("./ServerListFilter")

module.exports = {
    oninit: function() {
        Server.searchServer()
    },
    view: function() {
        return m(".container", m(Navbar), m(".container", {style: "margin-top: 60px"}, m(ServerListFilter), m(Grid, {
            dataIterator: Server.serverList,
            fields: [
                {label: 'Model', field: "model"},
                {label: 'Ram Type', field: "ramType"},
                {label: 'Ram Size (GB)', field: "ramSize"},
                {label: 'Hdd Type', field: "hddType"},
                {label: 'Hdd Distribution', field: "hddStorageDistribution"},
                {label: 'Hdd Storage (GB)', field: "hddStorage"},
                {label: 'Location', field: "location"},
                {label: 'Currency', field: "currency"},
                {label: 'Price', field: "price"},
            ]
        })))
    }
}