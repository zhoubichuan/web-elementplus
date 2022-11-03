import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {
  ElConfigProvider as MyConfigProvider,
  ElSpace as MySpace,
  ElOption as MyOption,
  ElTableColumn as MyTableColumn,
  ElStep as MyStep,
  ElMenuItem as MyMenuItem,
  ElTabPane as MyTabPane,
  ElInput as MyInput,
  ElForm as MyForm,
  ElFormItem as MyFormItem,
  ElRow as MyRow,
  ElCol as MyCol,
  ElContainer as MyContainer,
  ElHeader as MyHeader,
  ElAside as MyAside,
  ElMain as MyMain,
  ElFooter as MyFooter,
  ElPopover as MyPopover,
  ElTooltip as MyTooltip,
  ElPopconfirm as MyPopconfirm,
  ElRadioGroup as MyRadioGroup,
  ElDrawer as MyDrawer,
  ElPageHeader as MyPageHeader,
  ElDropdown as MyDropdown,
  ElIcon as MyIcon,
  ElBacktop as MyBacktop,
  ElAffix as MyAffix,
  ElTree as MyTree,
  ElTreeV2 as MyTreeV2,
  ElTimeline as MyTimeline,
  ElTimelineItem as MyTimelineItem,
  ElTag as MyTag,
  ElSkeleton as MySkeleton,
  ElResult as MyResult,
  ElProgress as MyProgress,
  ElImage as MyImage,
  ElEmpty as MyEmpty,
  ElDescriptions as MyDescriptions,
  ElDescriptionsItem as MyDescriptionsItem,
  ElCollapse as MyCollapse,
  ElCollapseItem as MyCollapseItem,
  ElCarousel as MyCarousel,
  ElCarouselItem as MyCarouselItem,
  ElCalendar as MyCalendar,
  ElBadge as MyBadge,
  ElAvatar as MyAvatar,
  ElUpload as MyUpload,
  ElTransfer as MyTransfer,
  ElTimeSelect as MyTimeSelect,
  ElTimePicker as MyTimePicker,
  ElSlider as MySlider,
  ElSelectV2 as MySelectV2,
  ElRate as MyRate,
  ElInputNumber as MyInputNumber,
  ElCascader as MyCascader,
  ElScrollbar as MyScrollbar
} from 'element-plus'

import MyAlert from './my-alert/index.vue'
import MyButton from './my-button/index.vue'
import MyCard from './my-card/index.vue'
import MyDialog from './my-dialog/index.vue'
import MyDatePicker from './my-date-picker/index.vue'
import MyMenu from './my-menu/index.vue'
import MyHeaderBreadcrumb from './my-header-breadcrumb/index.vue'
import MyMessage from './my-message/index'
import MyMessageBox from './my-message-box/index'
import MyNotification from './my-notification/index'
import MyPageContainer from './my-page-container/index.vue'
import MyPagination from './my-pagination/index.vue'
import MyRadio from './my-radio/index.vue'
import MySelect from './my-select/index.vue'
import MySteps from './my-steps/index.vue'
import MySwitch from './my-switch/index.vue'
import MyTable from './my-table/index.vue'
import MyTabs from './my-tabs/index.vue'
import MyCheckbox from './my-checkbox/index.vue'
import MyLink from './my-link/index.vue'

import 'element-plus/dist/index.css'
import './index.less'

const coms = {
  MyConfigProvider,
  MyAlert,
  MyButton,
  MyCard,
  MyDialog,
  MyDatePicker,
  MyMenu,
  MyMenuItem,
  MyHeaderBreadcrumb,
  MyPageContainer,
  MyPagination,
  MyRadio,
  MySelect,
  MyOption,
  MySteps,
  MySwitch,
  MyTable,
  MyTableColumn,
  MyTabs,
  MyCheckbox,
  MySpace,
  MyLink,
  MyStep,
  MyTabPane,
  MyInput,
  MyForm,
  MyFormItem,
  MyRow,
  MyCol,
  MyContainer,
  MyHeader,
  MyAside,
  MyMain,
  MyFooter,
  MyPopover,

  MyTooltip,
  MyPopconfirm,
  MyRadioGroup,
  MyDrawer,
  MyPageHeader,
  MyDropdown,
  MyIcon,
  MyBacktop,
  MyAffix,
  MyTree,
  MyTreeV2,
  MyTimeline,
  MyTimelineItem,
  MyTag,
  MySkeleton,
  MyResult,
  MyProgress,
  MyImage,
  MyEmpty,
  MyDescriptions,
  MyDescriptionsItem,
  MyCollapse,
  MyCollapseItem,
  MyCarousel,
  MyCarouselItem,
  MyCalendar,
  MyBadge,
  MyAvatar,
  MyUpload,
  MyTransfer,
  MyTimeSelect,
  MyTimePicker,
  MySlider,
  MySelectV2,
  MyRate,
  MyInputNumber,
  MyCascader,
  MyScrollbar
}

export const myMessage = MyMessage
export const myMessageBox = MyMessageBox
export const myNotification = MyNotification

export default {
  install: (vue: any, options?: string[]) => {
    if (options && Array.isArray(options)) {
      options.forEach((name) => {
        if ((coms as any)[name]) {
          console.log(111)
          console.log(name)
          vue.component(name, (coms as any)[name])
        }
      })
    } else {
      for (const key in coms) {
        vue.component(key, (coms as any)[key])
      }
    }
  }
}

export {
  zhCn,
  MyConfigProvider,
  MyAlert,
  MyButton,
  MyCard,
  MyDialog,
  MyDatePicker,
  MyMenu,
  MyMenuItem,
  MyHeaderBreadcrumb,
  MyPageContainer,
  MyPagination,
  MyRadio,
  MySelect,
  MyOption,
  MySteps,
  MySwitch,
  MyTable,
  MyTableColumn,
  MyTabs,
  MyCheckbox,
  MySpace,
  MyLink,
  MyStep,
  MyTabPane,
  MyInput,
  MyForm,
  MyFormItem,
  MyRow,
  MyCol,
  MyContainer,
  MyHeader,
  MyAside,
  MyMain,
  MyFooter,
  MyPopover,
  MyTooltip,
  MyPopconfirm,
  MyRadioGroup,
  MyDrawer,
  MyPageHeader,
  MyDropdown,
  MyIcon,
  MyBacktop,
  MyAffix,
  MyTree,
  MyTreeV2,
  MyTimeline,
  MyTimelineItem,
  MyTag,
  MySkeleton,
  MyResult,
  MyProgress,
  MyImage,
  MyEmpty,
  MyDescriptions,
  MyDescriptionsItem,
  MyCollapse,
  MyCollapseItem,
  MyCarousel,
  MyCarouselItem,
  MyCalendar,
  MyBadge,
  MyAvatar,
  MyUpload,
  MyTransfer,
  MyTimeSelect,
  MyTimePicker,
  MySlider,
  MySelectV2,
  MyRate,
  MyInputNumber,
  MyCascader,
  MyScrollbar
}
