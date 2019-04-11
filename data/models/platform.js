const orm = require('../orm');

const Platform = orm.Model.extend({
    tableName: 'platform',
    hasTimestamps: true,
    employees: function() {
        return this.hasMany('users');
    },
    industry: function() {
        return this.belongsTo('requests');
    }
});

module.exports = org.model('platform', Platform);