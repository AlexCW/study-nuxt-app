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

  test('test file input calls handleFileUpload method', () => {
      const wrapper = mount(FilePreview)
      const handleFileUploadMock = jest.fn()
      wrapper.vm.handleFileUpload = handleFileUploadMock

      const fileInput = wrapper.find('input[type="file"]')
      fileInput.trigger('change')
      expect(handleFileUploadMock).toHaveBeenCalled()
  })
  
  test('test file input calls handleFileUpload method and ' +
    'sets showPreview to true and imagePreview to the upload', () => {

      // const dom = new JSDOM(wrapper.html())
      // const { window } = dom
      // const {  File } = window

      const wrapper = mount(FilePreview)

      const fs = require('fs')
    
      const fileInput = wrapper.find('input[type="file"]')
      
      const path = 'test.png'
      
      const blob = new Blob(new fs.readFileSync(path), {type: "image/png"})
      
      wrapper.vm.$refs.image = {
        'files': [
          blob
        ]
      }
      
      fileInput.trigger('change')

      expect(wrapper.vm.$data.showPreview).toEqual(true)
  })
  
  test('test properties correctly override', () => {
    const wrapper = factory()
    expect(wrapper.vm.$props.label).toEqual('Test Preview Text')
    expect(wrapper.vm.$props.name).toEqual('banner')
  })
})