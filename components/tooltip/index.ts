import Tooltip from './src/tooltip.vue';
// @ts-ignore
Tooltip.install = function (Vue) {
    Vue.component(Tooltip.name, Tooltip);
};
export default Tooltip;
