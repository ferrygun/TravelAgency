Ext.define("TravelAgency.view.AddTravelAgentContainer",{
	extend: "Ext.Panel",
	xtype: "addtravelagentcontainer",


	initialize: function() {
		var toolbar = {
			xtype: "toolbar",
			docked: "top",
			title: "Add Travel Agent",
		};

		this.add([toolbar, {  xtype: "addtravelagentmenu"}]);
	},

	config: {
		layout: "fit", 
		title: "Add Travel Agent",
		iconCls: "favorites"
	},

	onAddNoteTap: function() {
		this.fireEvent("addTravelAgencyCommand",this);
	}
});
