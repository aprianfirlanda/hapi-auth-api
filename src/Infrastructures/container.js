/* istanbul ignore file */
const { createContainer } = require('instances-container');

// creating container
const container = createContainer();

// registering services and repository
container.register([]);

module.exports = container;
