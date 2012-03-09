define(function(require) {	

	var Backbone = require("Backbone"),
		User = require("models/User");
	
	var UserInfo = Backbone.Model.extend({

		parse: function(data) {
			return data.userInfo || data;
		},

		getJobseeker : function (success)
		{
			var uri = this.get('links')[0].uri;
			var user = new User();
			user.url = uri;
			user.fetch({
				success : function() {
					success(user);
				}
			});
		}
	
	});
	
	return UserInfo;
});	