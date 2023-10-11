import { describe, it, expect } from 'vitest'
import {  shallowMount } from '@vue/test-utils'
import PaintJs from '../../components/PaintJs.vue'

describe('Render', () => {
    it('It renders correctly.', () => {
      const wrapper = shallowMount(PaintJs);
      expect(wrapper.exists()).toBe(true);
    });

    it('Allows selecting the brush tool', () => {
        const wrapper = shallowMount(PaintJs);
        wrapper.vm.selectTool('brush');
        expect(wrapper.vm.activeTool).toBe('brush');
      });
      
      it('Allows selecting the eraser tool', () => {
        const wrapper = shallowMount(PaintJs);
        wrapper.vm.selectTool('rubber');
        expect(wrapper.vm.activeTool).toBe('rubber');
      });

      it('Allows selecting the brush size', () => {
        const wrapper = shallowMount(PaintJs);
        wrapper.vm.selectSize(10);
        expect(wrapper.vm.brushSize).toBe(10);
      });

      it('Allows changing the drawing color', () => {
        const wrapper = shallowMount(PaintJs);
        wrapper.vm.changeColor('#FFFFFF');
        expect(wrapper.vm.inputColor).toBe('#FFFFFF');
      });   
});