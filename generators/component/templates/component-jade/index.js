'use strict';

/*
 * This is a Catberry cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components-interface
 */

class <%= __pascalName__ %> {

	/**
	 * Creates a new instance of the "<%= __name__ %>" component.
	 */
	constructor() {

	}

	/**
	 * Gets a data context for the template engine.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} The data context for the template engine.
	 */
  render() {
    return this.$context.getStoreData();
  }

	/**
	 * Returns event binding settings for the component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} The binding settings or nothing.
	 */
	bind() {

	}

	/**
	 * Clans everything up. The events have been set by .bind() method are cleaned automatically.
	 * This method is optional.
	 * @returns {Promise|undefined} Promise or finished work or nothing.
	 */
	unbind() {

	}
}

module.exports = <%= __pascalName__ %>;
