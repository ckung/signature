var User = Backbone.Model.extend({
    schema: {
        email:      { dataType: 'email', validators: ['required', validateEmail] },
        start:      { type: 'DateTime' },
        contact:    { type: 'Object', subSchema: {
                        name: {},
                        phone: {}
                    }}
        address:    { type: 'NestedModel', model: Address },
        notes:      { type: 'List' }
    }
});