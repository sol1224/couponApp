import { create } from "zustand";

const couponStore = create(set => ({
  count: 0,
  increase: () =>
    set(state => {
      if (state.count < 10) {
        return { count: state.count + 1 };
      }
      return state;
    }),

  decrease: () =>
    set(state => {
      if (state.count >= 1) {
        return { count: state.count - 1 };
      }
      return state;
    }),
}));

export default couponStore;
