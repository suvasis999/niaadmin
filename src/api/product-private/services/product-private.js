'use strict';

/**
 * product-private service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-private.product-private');
