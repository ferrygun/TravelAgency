Ext.define("TravelAgency.controller.TravelAgency",{
	extend: "Ext.app.Controller",
	config: {
		refs: {
			mainPanel : "mainpanel",

			// View/Edit Travel Agency
			travelAgencyListContainer: "travelagencylistcontainer",
			travelAgencyEditor: "travelagencyeditor",
			travelAgencyList: "travelagencylist",

			// Add Travel Agency
			addTravelAgent: "addtravelagent",
			addTravelAgentMenu: "addtravelagentmenu",

			// Search
			searchBar: "searchbar",
			searchField: "searchbar > toolbar > searchfield"
		},

		control: {
			// Travel Agency 
			travelAgencyListContainer: {
				addTravelAgencyCommand: "onAddTravelAgency"
			},
			travelAgencyList: {
				editTravelAgencyCommand: "onEditTravelAgency"
			},
			travelAgencyEditor: {
				backCommand: "onBackButton",
				saveCommand: "onSaveButton",
				deleteCommand: "onDeleteButton"
			},

			// Add Travel Agent
			addTravelAgent: {
				
			},
			addTravelAgentMenu: {
				addCommand: "onAddButton"
			},
			

			// Search Bar
			searchBar: {
				searchTravelAgencyCommand: "onSearchTravelAgency"
			}
		}
	},

	onTravelAgency: function() {
		var newTravelAgency = Ext.create("TravelAgency.model.TravelAgency");

		this.getTravelAgencyEditor().setRecord(newTravelAgency);

		Ext.Viewport.animateActiveItem(this.getTravelAgencyEditor(), { type: "slide", direction: "left" });
	},

	onEditTravelAgency: function(record){
		this.getTravelAgencyEditor().setRecord(record);
		Ext.Viewport.animateActiveItem(this.getTravelAgencyEditor(), { type: "slide", direction: "left" });
	},


	onSearchTravelAgency: function(){
		var store = Ext.getStore("TravelAgency");

		 //get the store and the value of the field
        var value = this.getSearchField().getValue(),
            store = store = Ext.getStore("TravelAgency");

        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('agencynum').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
		}
	},

	onBackButton: function() {
		Ext.Viewport.animateActiveItem(this.getMainPanel(), { type: "slide", direction: "right" });
	},

	
	onAddButton: function(record, button) {

		var formObj = button.up('addtravelagentmenu');
		var formData = formObj.getValues();

		travel = Ext.create('TravelAgency.model.TravelAgency', {
			agencynum: formData.agencynum,
			NAME: formData.NAME,
			STREET:  formData.STREET,
			POSTBOX:  formData.POSTBOX,
			POSTCODE:  formData.POSTCODE,
			CITY: formData.CITY,
			COUNTRY: formData.COUNTRY,
			REGION: formData.REGION,
			TELEPHONE: formData.TELEPHONE,
			URL: formData.URL,
			LANGU:  formData.LANGU,
			CURRENCY:  formData.CURRENCY
			//mimeType: record.get('mimeType')
		});

		
		if (formData.agencynum == "") {
			Ext.Msg.alert('ERROR', 'Agency No could not be empty');
 
		} else {
			travel.set('agencynum', formData.agencynum);
			travel.set('NAME', formData.NAME);
			travel.set('STREET', formData.STREET);
			travel.set('POSTBOX', formData.POSTBOX);
			travel.set('POSTCODE', formData.POSTCODE);
			travel.set('CITY', formData.CITY);
			travel.set('COUNTRY', formData.COUNTRY);
			travel.set('REGION', formData.REGION);
			travel.set('TELEPHONE', formData.TELEPHONE);
			travel.set('URL', formData.URL);
			travel.set('LANGU', formData.LANGU);
			travel.set('CURRENCY', formData.CURRENCY);

			travel.save(function (record, operation) {
				console.log(record);
				console.log(operation);

				if (operation.wasSuccessful()) {
					Ext.Msg.alert('Status', 'Record added successfully. Record ID: ' + record.get('agencynum'));
					console.log('record created. Id:' + record.get('agencynum'));

					formObj.setValues({
						agencynum: '',
						NAME: '',
						STREET: '',
						POSTBOX: '',
						POSTCODE: '',
						CITY: '',
						COUNTRY: '',
						REGION: '',
						TELEPHONE: '',
						URL: '',
						LANGU: '',
						CURRENCY: ''
					});

				} else {
					console.log('Create record failed');
				}

				var store = Ext.getStore("TravelAgency");
				store.loadPage(1);

			});
		}
	},

	onSaveButton: function(record, button) {
		travel = Ext.create('TravelAgency.model.TravelAgency', {
			id : "http://ASPSGPLR81BC0G/sapgw/sap/opu/odata/IWFND/RMTSAMPLEFLIGHT/TravelagencyCollection('" + record.get('agencynum') + "')",
		});
		
		var formObj = button.up('travelagencyeditor');
		var formData = formObj.getValues();

		travel.set('agencynum', formData.agencynum);
		travel.set('NAME', formData.NAME);
		travel.set('STREET', formData.STREET);
		travel.set('POSTBOX', formData.POSTBOX);
		travel.set('POSTCODE', formData.POSTCODE);
		travel.set('CITY', formData.CITY);
		travel.set('COUNTRY', formData.COUNTRY);
		travel.set('REGION', formData.REGION);
		travel.set('TELEPHONE', formData.TELEPHONE);
		travel.set('URL', formData.URL);
		travel.set('LANGU', formData.LANGU);
		travel.set('CURRENCY', formData.CURRENCY);

		travel.save(function (record, operation) {
			console.log(record);
		    console.log(operation);

            if (operation.getError()==null) {
				console.log('record udated. Id:' + record.get('agencynum'));
				Ext.Msg.alert('Status', "Record updated");
			} else {
                console.log('Create record failed');
				Ext.Msg.alert('Status', operation.getError());
            }


			var store = Ext.getStore("TravelAgency");
			store.loadPage(1);
        });
	},


	onDeleteButton: function(record, button) {
		mp = this.getMainPanel();

		travel = Ext.create('TravelAgency.model.TravelAgency', {
			id : "http://ASPSGPLR81BC0G/sapgw/sap/opu/odata/IWFND/RMTSAMPLEFLIGHT/TravelagencyCollection('" + record.get('agencynum') + "')",

		});
		
		var formObj = button.up('travelagencyeditor');
		var formData = formObj.getValues();

		travel.erase(function (record, operation) {
			console.log(record);
			console.log(operation);

			if (operation.getError()==null) {
				console.log('record deleted');
				Ext.Msg.alert('Status', 'Record deleted successfully.');
			} else {
                console.log('Delete record failed');
				Ext.Msg.alert('Status', 'Delete record failed.');
            }


			var store = Ext.getStore("TravelAgency");
			store.loadPage(1);

			Ext.Viewport.animateActiveItem(mp, { type: "slide", direction: "left" });
		});
		
	}


});
