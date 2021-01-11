export * as actions from './actions.js';
export * as mutations from './mutations.js';
export * as getters from './getters.js';

const state = {
    users: [],
};

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
};
