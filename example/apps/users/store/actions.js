/**
 * Get users.
 * @param {Object} options
 * @returns {Array<User>}
 */
export async function getUsers({ commit }, options) {}

/**
 * Get user
 * @param {Number} id
 * @returns {User}
 */
export async function getUser({ commit }, id) {}

/**
 *
 * Create a user
 * @param {User} data
 * @returns {User}
 */
export async function createUser({ commit }, data) {}

/**
 * Update user.
 * @param {User}
 * @returns {User}
 */
export async function updateUser({ commit }, { id, data }) {}

/**
 * Delete user.
 * @param {Number} id
 * @returns {User}
 */
export async function deleteUser({ commit }, id) {}

/**
 * Save user.
 * @param {User} data
 * @returns {User}
 */
export async function saveUser({ dispatch }, data) {}
