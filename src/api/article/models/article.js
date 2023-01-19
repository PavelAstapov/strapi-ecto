"use strict";
const readingTime = require("reading-time");

/**
 * Read the documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      const { article } = data;
      if (article && article?.length > 0) {
        data.readingTime = readingTime(article)?.text || null;
      }
    },
    async beforeUpdate(params, data) {
      const { content } = data;
      if (article && article?.length > 0) {
        data.readingTime = readingTime(article)?.text || null;
      }
    },
  },
};