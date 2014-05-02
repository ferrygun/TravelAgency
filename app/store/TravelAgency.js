Ext.define("TravelAgency.store.TravelAgency", {
    extend: "Ext.data.Store",
    requires: ["Ext.data.proxy.OData",
			   "TravelAgency.api.Error"
	],
    config: {
		model: "TravelAgency.model.TravelAgency", 

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
				password: 'Password',
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
