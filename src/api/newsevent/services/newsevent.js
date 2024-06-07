'use strict';

/**
 * newsevent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsevent.newsevent');
