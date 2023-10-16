import { describe, it, expect } from 'vitest'
import {  shallowMount } from '@vue/test-utils'
import CaperucitaTabla from '../../components/CaperucitaTabla.vue'

describe('Render', () => {
    it('renders properly', () => {
      const wrapper = shallowMount(CaperucitaTabla);

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('table').exists()).toBe(true);
      const rows = wrapper.findAll('tbody tr');
      expect(rows.length).toBe(4);
    });

    it('characters is an array', () => {
        const wrapper = shallowMount(CaperucitaTabla);
        const vm = wrapper.vm;
        expect(Array.isArray(vm.characters)).toBe(true);
      });
  }); 

  