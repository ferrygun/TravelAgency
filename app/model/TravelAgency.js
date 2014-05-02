Ext.define("TravelAgency.model.TravelAgency", {
	extend: "Ext.data.Model",
	requires: ["Ext.data.proxy.OData",
			   "TravelAgency.api.Error"
	],

	config: {

		fields: [
	
			{ name: "agencynum" },
			{ name: "NAME" },
			{ name: "STREET" },
			{ name: "POSTBOX" },
			{ name: "POSTCODE" },
			{ name: "CITY" },
			{ name: "COUNTRY" },
			{ name: "REGION" },
			{ name: "TELEPHONE" },
			{ name: "URL" },
			{ name: "LANGU" },
			{ name: "CURRENCY" },
			{ name: "mimeType" }
			],

		proxy: {
			type: 'odata', 
			enablePagingParams: false,
			withCredentials: true,	
			username: 'P1940517116',
			password: 'Papamama18',
			url: "http://ASPSGPLR81BC0G/sapgw/sap/opu/odata/IWFND/RMTSAMPLEFLIGHT/TravelagencyCollection",
			
			listeners: {
					'exception': function (proxy, response, operation) {
					TravelAgency.api.Error.alert(response);
				}
			},

		},
		autoLoad: true

	}
});
