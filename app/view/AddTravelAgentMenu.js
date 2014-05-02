Ext.define("TravelAgency.view.AddTravelAgentMenu",{
	extend: "Ext.form.Panel",
	xtype: "addtravelagentmenu",

	config: {
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'bottom',
					items: [
						{
							xtype: 'button',
							itemId: 'add',
							width: '10%',
							text: 'Add'
						}
					]
			},
			{
                xtype: 'textfield',
                label: 'Agency No',
				labelWrap: true,
				labelWidth: '30%',
                name: 'agencynum',
				placeHolder: 'Enter Agency No',
            },
			{
				xtype: 'textfield',
                label: 'Name',
				labelWrap: true,
				labelWidth: '30%',
                name: 'NAME',
				placeHolder: 'Enter Name'
			},
			{
				xtype: 'textfield',
                label: 'Street',
				labelWidth: '30%',
                name: 'STREET',
				placeHolder: 'Enter Street'
            },
			{
				xtype: 'textfield',
                label: 'Post Box',
				labelWidth: '30%',
                name: 'POSTBOX',
				placeHolder: 'Enter Post Box'
            },
			{
				xtype: 'textfield',
                label: 'Post Code',
				labelWidth: '30%',
                name: 'POSTCODE',
				placeHolder: 'Enter Post Code'
            },
			{
				xtype: 'textfield',
                label: 'City',
				labelWidth: '30%',
                name: 'CITY',
				placeHolder: 'Enter City'
            },
			{
				xtype: 'textfield',
                label: 'Country',
				labelWidth: '30%',
                name: 'COUNTRY',
				placeHolder: 'Enter Country'
            },
			{
				xtype: 'textfield',
                label: 'Region',
				labelWidth: '30%',
                name: 'REGION',
				placeHolder: 'Enter Region'
				
            },
			{
				xtype: 'textfield',
                label: 'Telephone',
				labelWidth: '30%',
                name: 'TELEPHONE',
				placeHolder: 'Enter Telephone'
            },
			{
				xtype: 'textfield',
                label: 'Language',
				labelWidth: '30%',
                name: 'LANGU',
				placeHolder: 'Enter Language'
            },
			{
				xtype: 'textfield',
                label: 'Currency',
				labelWidth: '30%',
                name: 'CURRENCY',
				placeHolder: 'Enter Currency'
            },
			{
				xtype: 'textfield',
                label: 'URL',
				labelWidth: '30%',
                name: 'URL',
				placeHolder: 'Enter URL'
            },
			
		],
		listeners: [
            {
                fn: 'onFormAdd',
				event: 'tap',
				delegate: '#add'
            }
        ],
    },


 
    onFormAdd: function(button,e,options){

		var formObj = button.up('addtravelagentmenu');
		var formData = formObj.getValues();
		this.fireEvent("addCommand", this.getRecord(), button);
    }
});
