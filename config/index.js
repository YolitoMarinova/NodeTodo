var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${configValues.username}:${configValues.password}@nodetodo.xedyorh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    }
}