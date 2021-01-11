import { Directive } from 'vue';

const InViewPort: Directive = {
  beforeMount(el, binding, vnode, prevVnode) {
    if (el && binding && vnode && prevVnode) {
      return 1;
    }

    return 0;
  },
  mounted(el, binding, vnode, prevVnode) {
    if (el && binding && vnode && prevVnode) {
      return 1;
    }

    return 0;
  },
};

export default InViewPort;
