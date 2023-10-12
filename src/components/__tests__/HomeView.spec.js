 import { describe, it, expect } from 'vitest'

 import { mount } from '@vue/test-utils'
 import HomeView from '../../views/HomeView.vue'

 describe('HomeView', () => {
   it('renders properly', () => {
     const wrapper = mount(HomeView)
     expect(wrapper.text()).toContain('Ingresa tu nombre completo y el nombre de tu colegio para comenzar.')
   })

   it('header img exists', () => {
    const wrapper = mount(HomeView)
    const headerImage = wrapper.find("img");
    expect(headerImage.exists()).toBe(true);
  })

  it('button render properly', () => { 
    const wrapper = mount(HomeView)
    const startButton = wrapper.find("button");
    expect(startButton.exists()).toBe(true);
    expect(startButton.text()).toBe("Empezar");
  })
 })

 describe("Form proff", () => {
  it("El formulario se comporta correctamente al ingresar datos", async () => {
    const wrapper = mount(HomeView);
    const nameInput = wrapper.find("#disabledTextInput");
    await nameInput.setValue("Juan Perez");
    expect(nameInput.element.value).toBe("Juan Perez");
    await wrapper.find("form").trigger("submit");
  });
}); 


