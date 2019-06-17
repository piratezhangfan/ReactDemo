
export default {
  state: 'skill',
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    update(state) {
      return `${state}_skill`;
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
