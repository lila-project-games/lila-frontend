import { describe, it, expect } from 'vitest'
import VueRouter from "vue-router";
import {createLocalVue, mount } from '@vue/test-utils'
import CaperucitaTabla from '@/components/CaperucitaTabla.vue'

const localVue = createLocalVue();
localVue.use(VueRouter);

 describe('proff', () => {
     it('renders properly', () => {
        const wrapper = mount(CaperucitaTabla,{
            localVue,
        });
        const characters = wrapper.vm.$data.characters;
        expect(Array.isArray(characters)).toBe(true);
     })

 })

describe("inicial render", () => {
    it("renders properly", () => {
      const wrapper = mount(CaperucitaTabla);
      expect(wrapper.find("#container-table").exists()).toBe(true);
    });
  }); 