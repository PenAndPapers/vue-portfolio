import { Directive } from 'vue';

const InViewPort: Directive = {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode);
  },
  mounted(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode);
  },
};

export default InViewPort;
