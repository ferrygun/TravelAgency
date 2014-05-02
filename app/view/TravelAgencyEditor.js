Ext.define("TravelAgency.view.TravelAgencyEditor",{
	extend: "Ext.form.Panel",
	xtype: "travelagencyeditor",
	requires: ["Ext.form.FieldSet", "Ext.field.Select"],
	initialize: function(){
		
		var toolbar = {
			xtype: "toolbar",
			docked: "top",
			items: [
				{
					xtype: "button",
					ui: "back",
					text: "Back", 
					handler: this.onBackTap,
					scope: this
				},
				{ xtype: "spacer" },
				{
					xtype: "button",
					ui: "confirm",
					text: "Save",
					handler: this.onSaveTap,
					scope: this
				},
				{
					xtype: "button",
					ui: "confirm",
					text: "Delete",
					handler: this.onDeleteTap,
					scope: this
				}
			]
		};
		this.add([
			toolbar,
			{
				xtype: "fieldset",
				defaults: {
					xtype: "textfield",
					readOnly: true  
				},
				items: [
					{ name: "agencynum", label: "Agency No"},	
				],
			},

			{
				xtype: "fieldset",
				defaults: {
					xtype: "textfield",
					readOnly: false  
				},
				items: [
					{ name: "NAME", label: "Name" },
					{ name: "STREET", label: "Street" },
					{ name: "POSTBOX", label: "Post Box" },
					{ name: "POSTCODE", label: "Post Code" },
					{ name: "CITY", label: "City" },	
					{ name: "COUNTRY", label: "Country" },	
					{ name: "REGION", label: "Region" },	
					{ name: "TELEPHONE", label: "Telephone" },	
					{ name: "URL", label: "URL" },	
					{ name: "LANGU", label: "Language" },	
					{ name: "CURRENCY", label: "Currency" }	
					//{ name: "mimeType", label: "mimeType" }	
				],

			}
		]);
	},
	config: {
		listeners: {
			show: function() { this.onShow(); }
		}
	},

	onShow: function(){
		this.items.get(0).setTitle("Travel Details");
	},

	onSaveTap: function(button,e,options) {
		this.fireEvent("saveCommand", this.getRecord(), button);
	},

	onDeleteTap: function(button,e,options) {
		this.fireEvent("deleteCommand", this.getRecord(), button);
	},		

	onBackTap: function() {
		this.fireEvent("backCommand",this);
	}
});
