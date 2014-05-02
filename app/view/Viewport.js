Ext.define("TravelAgency.view.Viewport",{
	extend: "Ext.Panel",

	initialize: function() {},

	config: {
		fullscreen: true,
		layout: "card",
		items: [ 
			{xtype: "mainpanel" }, 
			{xtype: "travelagencyeditor"}, 
			{xtype: "travelagencylist"}
		]
	}
});
