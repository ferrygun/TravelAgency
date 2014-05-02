Ext.define("TravelAgency.view.MainPanel", {
	extend: "Ext.tab.Panel",
	xtype: "mainpanel",

	config: {
		tabBarPosition: "bottom",
		items: [ 
			{xtype: "travelagencylistcontainer"} , 
			{xtype: "addtravelagentcontainer"},
		]
	}
});
