/**
 * PreLimits.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    app: {
      type: 'string',
      size: 128
    },
    data: {
      type: 'string',
      size: 128
    }

  }

};

