import { describe, it, expect } from 'vitest'
import {  shallowMount } from '@vue/test-utils'
import PaintJs from '../../components/PaintJs.vue'

describe('Render', () => {
    it('It renders correctly.', () => {
      const wrapper = shallowMount(PaintJs);
      expect(wrapper.exists()).toBe(true);
    });

      it('Allows changing the drawing color', () => {
        const wrapper = shallowMount(PaintJs);
        wrapper.vm.changeColor('#FFFFFF');
        expect(wrapper.vm.inputColor).toBe('#FFFFFF');
      });   
});