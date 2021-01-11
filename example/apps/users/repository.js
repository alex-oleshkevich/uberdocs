/**
 * Get users from the API
 * @param {Number} page
 * @param {Number} limit
 * @returns {Array<User>}
 */
export async function getUsers(page = 1, limit = 20) {}

/**
 * Get user.
 * @param {Number} id
 * @returns {User}
 */
export async function getUser(id) {}

/**
 * Create a new user.
 * @param {User} data
 * @returns {User}
 */
export async function createUser(data) {}

/**
 * Update a user.
 * @param {Number} id
 * @param {User} data
 * @returns {User}
 */
export async function updateUser(id, data) {}

/**
 * Delete a user.
 * @param {Number} id
 * @returns {void}
 */
export async function deleteUser(id) {}

/**
 * Save a user. If "id" property is null in "data" then a new user will be created
 * otherwise we do update the user.
 * @param {user} data
 * @param {Number} id
 * @returns {User}
 */
export async function saveUser(data, id) {}
