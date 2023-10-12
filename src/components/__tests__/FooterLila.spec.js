import { describe, it, expect } from 'vitest'
import {  shallowMount, mount } from '@vue/test-utils'
import FooterLila from '../../components/FooterLila.vue'

describe('Render', () => {
    it('It renders correctly.', () => {
      const wrapper = shallowMount(FooterLila);
      expect(wrapper.exists()).toBe(true);
    });
});

describe('Copyright and logo', () => {
    it('It displays the current year in the component', () => {
      const wrapper = shallowMount(FooterLila); 
      const copyrightText = wrapper.find('h4');
      const currentYear = new Date().getFullYear();
      expect(copyrightText.text()).toContain(currentYear.toString());
    });
    it('Verify the presence of the Lila logo', () => {
        const wrapper = mount(FooterLila);
        const logoElement = wrapper.find('img.lila_transp');
        expect(logoElement.exists()).toBe(true);
      });      
  }); 