Ext.define("TravelAgency.view.TravelAgencyListContainer",{
	extend: "Ext.Panel",
	xtype: "travelagencylistcontainer",

	requires: ["TravelAgency.view.TravelAgencyList","TravelAgency.view.SearchBar"],

	initialize: function() {
		var toolbar = {
			xtype: "toolbar",
			docked: "top",
			title: "Travel Agency",
		};

		this.add([toolbar, { xtype: "searchbar" }, { xtype: "travelagencylist"}]);
	},

	config: {
		layout: "fit", //critical for list to show
		title: "Travel Agency",
		iconCls: "home"
	},

	onAddNoteTap: function() {
		this.fireEvent("addTravelAgencyCommand",this);
	}
});
