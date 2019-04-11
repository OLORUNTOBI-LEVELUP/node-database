const orm = require('../orm'); 

const Users = orm.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    organization: function() {
        return this.belongsTo('Platform');
    }
});

module.exports = orm.model('users', Users);