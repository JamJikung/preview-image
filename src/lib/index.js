import vuePreviewImage from './preview-image'

const previewImage = {
  install (Vue, options) {
    Vue.component(vuePreviewImage.name, vuePreviewImage) // vuePreviewImage.name 组件的name属性
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(previewImage)
}
export default previewImage // 导出
