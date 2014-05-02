Ext.define('TravelAgency.api.Error', {
	requires: [],
	singleton: true,

	alert: function(response) {
		var alertText = this.format(response);
		Ext.Msg.alert('Error', alertText, Ext.emptyFn);
	},
	format: function(response) {
		var httpErrorMessage = response.status + '-' + response.statusText,
			text = httpErrorMessage + '<BR />';

		if (response.status == 0) {
			text += 'HTTP Request initialization<BR />Cross Origin Request';
		} else {


			// We always have an http response so we use that as the default
			// but we could also have an xml message from SAP we need to format
			if (response.responseXML) {
				var codeNode = Ext.DomQuery.selectNode("error > code", response.responseXML),
					messageNode = Ext.DomQuery.selectNode("error > message", response.responseXML);

				if (codeNode) {
					// this looks like a SAP formatted error message that has an error code and a message
					if (messageNode) {
						text += Ext.String.format('{0}<BR />({1})', messageNode.textContent, codeNode.textContent);
					} else {
						// there is a code but no message
						text += codeNode.textContent;
					}

				} else {
					if (messageNode) {
						// we only have a message so display that
						text += messageNode.textContent;
					} else {
						// we have neither a message nor a code but we have xml so use that
						text += response.responseText;
					}
				}
			} else if (response.responseText) {
				text += response.responseText;
			}
		}

		return text;
	}
});
