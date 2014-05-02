Ext.application({
	name: "TravelAgency",

    requires: [
        'Ext.Anim',
        'Ext.MessageBox',
        'Ext.carousel.Carousel'
    ],

	icon: "resources/images/app-icon.png",
    phoneIcon: "resources/images/app-iphone-icon.png",

    controllers: ["TravelAgency"],

    models: ["TravelAgency"],

    stores: ["TravelAgency"],

    views: ["Viewport",
			"MainPanel", 
			"TravelAgencyListContainer", 
			"TravelAgencyEditor", 
			"AddTravelAgentContainer",
			"AddTravelAgentMenu"
	],

		
	launch : function() {
		// Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		if (!Ext.browser.is.WebKit) {
            alert("The current browser is unsupported.\n\nSupported browsers:\n" +
                "Google Chrome\n" +
                "Apple Safari\n" +
                "Mobile Safari (iOS)\n" +
                "Android Browser\n" +
                "BlackBerry Browser"
            );
        }

		Ext.create("TravelAgency.view.Viewport");
	}
});
