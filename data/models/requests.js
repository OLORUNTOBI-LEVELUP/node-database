const orm = require('../orm');

const Requests = orm.Model.extend({
    tableName: 'requests',
    hasTimestamps: false,
    organization: function () {
        return this.hasMany('Platform');
    }
});

module.exports = org.model('requests', Requests);