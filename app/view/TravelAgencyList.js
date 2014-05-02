Ext.define("TravelAgency.view.TravelAgencyList",{
	extend: "Ext.dataview.List",
	xtype: "travelagencylist",
	requires: ["Ext.plugin.ListPaging"],
	config: {
		store: "TravelAgency",
		plugins: [
			{
				xclass: 'Ext.plugin.ListPaging', 
                autoPaging: true,                
                loadMoreText : 'No more records',  
                noMoreRecordsText : 'All has shown' 
			}
		],
		itemTpl: [
			'<div>',
				'<div>Agency No: {agencynum}</div>',
				'<div>{NAME}</div>',
			'</div>',
		],
		onItemDisclosure: function(record,btn,index) {
			this.fireEvent("editTravelAgencyCommand", record);
		}
	},
});
