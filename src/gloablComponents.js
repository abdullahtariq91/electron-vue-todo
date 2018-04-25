import fgInput from './renderer/components/UIComponents/Inputs/formGroupInput.vue';
import fgInputSmall from './renderer/components/UIComponents/Inputs/formGroupInputSmall.vue';
import DropDown from './renderer/components/UIComponents/Dropdown.vue';

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component('fg-input', fgInput);
    Vue.component('fg-input-small', fgInputSmall);
    Vue.component('drop-down', DropDown);
  },
};

export default GlobalComponents;
