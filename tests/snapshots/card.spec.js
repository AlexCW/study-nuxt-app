import { shallowMount } from '@vue/test-utils'
import Card from "@/components/shared/elements/Card"

const factory = () => shallowMount(Card, {
    propsData: {
      text: 'Test Card Text'
    }
  })
  
  describe('Card', () => {
    test('mounts properly', () => {
      const wrapper = factory()
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  
    test('renders properly', () => {
      const wrapper = factory()
      expect(wrapper.html()).toMatchSnapshot()
    })
  })