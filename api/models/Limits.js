/**
 * Limits.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    maxValue: {
      type: 'string',
      size: 32
    },
    backend: {
      type: 'string',
      enum: ['hash','hiredis','db']
    },
    name: {
      type: 'string',
      unique: true,
      size: 128
    },
    destination: {
      type: 'string',
      size: 128
    }

  }

};

