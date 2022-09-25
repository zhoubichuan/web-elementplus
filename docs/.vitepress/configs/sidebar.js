const { getPath } = require('./utils')

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/vue3/')]: getGuideSidebar(),
  [getPath('/components/')]: getComsSidebar(),
  [getPath('/element/')]: getElement()
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        },
        {
          text: 'Tag 标签',
          link: '/components/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue'
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [

    { text: 'Home', link: '/vue3/home' },
    { text: 'Vue/cli 3.x', link: '/vue3/cli' },
    { text: 'Vue3.x（基础）', link: '/vue3/vue' },
    { text: 'Vue3.x（组件通信)', link: '/vue3/vue1' },
    { text: 'Vue-Router 4.x', link: '/vue3/vuerouter' },
    { text: 'Vuex 4.x', link: '/vue3/vuex' },
    { text: 'UI库', link: '/vue3/ui' },
    { text: 'VueUse', link: '/vue3/vueuse' }

  ]
}
function getComsSidebar() {
  return [
    {
      text: "my-alert",
      children: [
        // { text: "index", link: "/element/base/" },
        { text: "layout", link: "/element/base/layout" },
        { text: "container", link: "/element/base/container" },
        { text: "button", link: "/element/base/button" },
        { text: "link", link: "/element/base/link" },
        { text: "space", link: "/element/base/space" },
        { text: "scrollbar", link: "/element/base/scrollbar" },
        { text: "config-provider", link: "/element/base/config-provider" },
      ],
    },
    {
      text: "form",
      children: [
        // { text: "index", link: "/element/form/" },
        { text: "layout", link: "/element/form/cascader" },
        { text: "container", link: "/element/form/radio" },
        { text: "button", link: "/element/form/checkbox" },
        { text: "link", link: "/element/form/input" },
        { text: "space", link: "/element/form/inputnumber" },
        { text: "scrollbar", link: "/element/form/select" },
        { text: "config-provider", link: "/element/form/selectv2" },
        { text: "index", link: "/element/form/switch" },
        { text: "layout", link: "/element/form/slider" },
        { text: "container", link: "/element/form/timepicker" },
        { text: "button", link: "/element/form/timeselect" },
        { text: "link", link: "/element/form/datepicker" },
        { text: "space", link: "/element/form/datetimepicker" },
        { text: "scrollbar", link: "/element/form/upload" },
        { text: "config-provider", link: "/element/form/rate" },
        { text: "space", link: "/element/form/colorpicker" },
        { text: "scrollbar", link: "/element/form/transfer" },
        { text: "config-provider", link: "/element/form/form" },
      ],
    },
    {
      text: "data",
      children: [
        // { text: "index", link: "/element/data/" },
        { text: "layout", link: "/element/data/table" },
        { text: "container", link: "/element/data/tag" },
        { text: "button", link: "/element/data/progress" },
        { text: "link", link: "/element/data/tree" },
        { text: "space", link: "/element/data/pagination" },
        { text: "scrollbar", link: "/element/data/badge" },
        { text: "config-provider", link: "/element/data/avatar" },
        { text: "link", link: "/element/data/skeleton" },
        { text: "space", link: "/element/data/empty" },
        { text: "scrollbar", link: "/element/data/descriptions" },
        { text: "config-provider", link: "/element/data/result" },
      ],
    },
    {
      text: "notice",
      children: [
        // { text: "index", link: "/element/notice/" },
        { text: "layout", link: "/element/notice/alert" },
        { text: "container", link: "/element/notice/loading" },
        { text: "button", link: "/element/notice/message" },
        { text: "link", link: "/element/notice/messagebox" },
        { text: "space", link: "/element/notice/notification" },
      ],
    },
    {
      text: "navigation",
      children: [
        // { text: "index", link: "/element/navigation/" },
        { text: "layout", link: "/element/navigation/affix" },
        { text: "container", link: "/element/navigation/navmenu" },
        { text: "button", link: "/element/navigation/tabs" },
        { text: "link", link: "/element/navigation/breadcrumb" },
        { text: "space", link: "/element/navigation/pageheader" },
        { text: "scrollbar", link: "/element/navigation/dropdown" },
        { text: "config-provider", link: "/element/navigation/steps" },
      ],
    },
    {
      text: "others",
      children: [
        // { text: "index", link: "/element/others/" },
        { text: "layout", link: "/element/others/dialog" },
        { text: "container", link: "/element/others/tooltip" },
        { text: "button", link: "/element/others/popover" },
        { text: "link", link: "/element/others/popconfirm" },
        { text: "space", link: "/element/others/card" },
        { text: "scrollbar", link: "/element/others/carousel" },
        { text: "config-provider", link: "/element/others/collapse" },
        { text: "layout", link: "/element/others/timeline" },
        { text: "container", link: "/element/others/drawer" },
        { text: "button", link: "/element/others/divider" },
        { text: "link", link: "/element/others/calendar-calendar" },
        { text: "space", link: "/element/others/image" },
        { text: "scrollbar", link: "/element/others/backtop" },
        { text: "config-provider", link: "/element/others/infinitescroll" },
      ],
    },
  ]
}
function getElement() {
  return [
    {
      text: "base",
      children: [
        // { text: "index", link: "/element/base/" },
        { text: "layout", link: "/element/base/layout" },
        { text: "container", link: "/element/base/container" },
        { text: "button", link: "/element/base/button" },
        { text: "link", link: "/element/base/link" },
        { text: "space", link: "/element/base/space" },
        { text: "scrollbar", link: "/element/base/scrollbar" },
        { text: "config-provider", link: "/element/base/config-provider" },
      ],
    },
    {
      text: "form",
      children: [
        // { text: "index", link: "/element/form/" },
        { text: "layout", link: "/element/form/cascader" },
        { text: "container", link: "/element/form/radio" },
        { text: "button", link: "/element/form/checkbox" },
        { text: "link", link: "/element/form/input" },
        { text: "space", link: "/element/form/inputnumber" },
        { text: "scrollbar", link: "/element/form/select" },
        { text: "config-provider", link: "/element/form/selectv2" },
        { text: "index", link: "/element/form/switch" },
        { text: "layout", link: "/element/form/slider" },
        { text: "container", link: "/element/form/timepicker" },
        { text: "button", link: "/element/form/timeselect" },
        { text: "link", link: "/element/form/datepicker" },
        { text: "space", link: "/element/form/datetimepicker" },
        { text: "scrollbar", link: "/element/form/upload" },
        { text: "config-provider", link: "/element/form/rate" },
        { text: "space", link: "/element/form/colorpicker" },
        { text: "scrollbar", link: "/element/form/transfer" },
        { text: "config-provider", link: "/element/form/form" },
      ],
    },
    {
      text: "data",
      children: [
        // { text: "index", link: "/element/data/" },
        { text: "layout", link: "/element/data/table" },
        { text: "container", link: "/element/data/tag" },
        { text: "button", link: "/element/data/progress" },
        { text: "link", link: "/element/data/tree" },
        { text: "space", link: "/element/data/pagination" },
        { text: "scrollbar", link: "/element/data/badge" },
        { text: "config-provider", link: "/element/data/avatar" },
        { text: "link", link: "/element/data/skeleton" },
        { text: "space", link: "/element/data/empty" },
        { text: "scrollbar", link: "/element/data/descriptions" },
        { text: "config-provider", link: "/element/data/result" },
      ],
    },
    {
      text: "notice",
      children: [
        // { text: "index", link: "/element/notice/" },
        { text: "layout", link: "/element/notice/alert" },
        { text: "container", link: "/element/notice/loading" },
        { text: "button", link: "/element/notice/message" },
        { text: "link", link: "/element/notice/messagebox" },
        { text: "space", link: "/element/notice/notification" },
      ],
    },
    {
      text: "navigation",
      children: [
        // { text: "index", link: "/element/navigation/" },
        { text: "layout", link: "/element/navigation/affix" },
        { text: "container", link: "/element/navigation/navmenu" },
        { text: "button", link: "/element/navigation/tabs" },
        { text: "link", link: "/element/navigation/breadcrumb" },
        { text: "space", link: "/element/navigation/pageheader" },
        { text: "scrollbar", link: "/element/navigation/dropdown" },
        { text: "config-provider", link: "/element/navigation/steps" },
      ],
    },
    {
      text: "others",
      children: [
        // { text: "index", link: "/element/others/" },
        { text: "layout", link: "/element/others/dialog" },
        { text: "container", link: "/element/others/tooltip" },
        { text: "button", link: "/element/others/popover" },
        { text: "link", link: "/element/others/popconfirm" },
        { text: "space", link: "/element/others/card" },
        { text: "scrollbar", link: "/element/others/carousel" },
        { text: "config-provider", link: "/element/others/collapse" },
        { text: "layout", link: "/element/others/timeline" },
        { text: "container", link: "/element/others/drawer" },
        { text: "button", link: "/element/others/divider" },
        { text: "link", link: "/element/others/calendar-calendar" },
        { text: "space", link: "/element/others/image" },
        { text: "scrollbar", link: "/element/others/backtop" },
        { text: "config-provider", link: "/element/others/infinitescroll" },
      ],
    },
  ]
}