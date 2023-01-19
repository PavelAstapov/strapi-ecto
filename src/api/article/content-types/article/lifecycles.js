"use strict";
const readingTime = require("reading-time");
module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      if (event.params.data.article && event.params.data.article?.length > 0) {
        event.params.data.readingTime = readingTime(event.params.data.article)?.text || null;
      }
    },
    async beforeUpdate(event) {
      const { data } = event.params;
      if (event.params.data.article && event.params.data.article?.length > 0) {
        event.params.data.readingTime = readingTime(event.params.data.article)?.text || null;
      }
    },
};