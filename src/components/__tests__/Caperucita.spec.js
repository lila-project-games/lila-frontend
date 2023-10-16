import { describe, it, expect } from 'vitest'

import {  shallowMount } from '@vue/test-utils'
import Caperucita from '../../views/Caperucita.vue'



describe('Caperucita', () => {

      it('header img exists', () => {
        const wrapper = shallowMount(Caperucita)
        const headerImage = wrapper.find("img");
        expect(headerImage.exists()).toBe(true);
      })
});  