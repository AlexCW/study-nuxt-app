import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import FilePreview from "@/components/shared/elements/FilePreview"

const factory = () => shallowMount(FilePreview, {
  propsData: {
    label: 'Test Preview Text',
    name: 'banner'
  }
})

describe('FilePreview Component', () => {
  const wrapper = mount(FilePreview)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('test default label is Image', () => {
    expect(wrapper.vm.$props.label).toEqual('Image')
  })

  test('test default name is image', () => {
    expect(wrapper.vm.$props.name).toEqual('image')
  })

  test('test handleFileUpload sets preview image and ' + 
    'properties correctly on change', () => {
      const handleFileUploadMock = jest.fn()
      wrapper.vm.handleFileUpload = handleFileUploadMock

      const fileInput = wrapper.find('input')
      fileInput.trigger('change')
      expect(handleFileUploadMock).toHaveBeenCalled()
  })

  test('test properties correctly override', () => {
    const wrapper = factory()
    expect(wrapper.vm.$props.label).toEqual('Test Preview Text')
    expect(wrapper.vm.$props.name).toEqual('banner')
  })
})