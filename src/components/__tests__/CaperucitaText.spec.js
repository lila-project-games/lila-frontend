import { describe, it, expect } from 'vitest'
import {  shallowMount } from '@vue/test-utils'
import CaperucitaText from '../../components/CaperucitaText.vue'

describe('Render', () => {
    it('It renders correctly.', () => {
      const wrapper = shallowMount(CaperucitaText);
      expect(wrapper.exists()).toBe(true);
    });
   
    it('Verify that the textarea element is present', () => { 
      const wrapper = shallowMount(CaperucitaText); 
      const textareaElement = wrapper.find('textarea.story-text');
      expect(textareaElement.exists()).toBe(true);
    }); 

});