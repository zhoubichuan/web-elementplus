export default [
  {
    type: "WebInput",
    name: "code",
    label: "编码",
    placeholder: "请输入编码",
  },
  {
    type: "WebInput",
    name: "name",
    label: "中文名称",
    placeholder: "请输入中文名称",
  },
  {
    type: "WebInput",
    name: "nameEn",
    label: "英文名称",
    placeholder: "请输入英文名称",
  },
  {
    type: "WebSelect",
    name: "state",
    multiple: true,
    defaultValue: ["isWrok", "preRelease", "release"],
    label: "状态",
    placeholder: "请选择状态",
    options: [
      {
        label: "正在工作",
        value: "isWrok",
      },
      {
        label: "预发布",
        value: "preRelease",
      },
      {
        label: "已发布",
        value: "release",
      },
      {
        label: "已修订",
        value: "revised",
      },
      {
        label: "已作废",
        value: "invalid",
      },
    ],
  },
  {
    type: "WebSelect",
    name: "parentId",
    label: "父模型",
    placeholder: "请选择父模型",
    options: [
      {
        label: "sss",
        value: "singleEntity",
      },
      {
        label: "eeee",
        value: "masterVersion",
      },
    ],
  },
  {
    type: "WebSelect",
    name: "entityType",
    label: "实体类型",
    placeholder: "请选择实体类型",
    options: [
      {
        label: "单实体",
        value: "singleEntity",
      },
      {
        label: "master-Version",
        value: "masterVersion",
      },
    ],
  },
  {
    type: "WebInput",
    name: "version",
    label: "版本",
    placeholder: "请输入版本",
  },
  {
    type: "WebSelect",
    name: "modeType",
    label: "模型类型",
    placeholder: "请选择模型类型",
    options: [
      {
        label: "XDM",
        value: "XDM",
      },
      {
        label: "SYS",
        value: "SYS",
      },
      {
        label: "GENERE",
        value: "GENERE",
      },
    ],
  },
  {
    type: "WebSelect",
    name: "selectFunction",
    multiple: true,
    defaultValue: ["sss"],
    label: "可选功能",
    placeholder: "请选择可选功能",
    options: [
      {
        label: "组合关系",
        value: "XDM",
      },
      {
        label: "树形关系",
        value: "SYS",
      },
      {
        label: "权限管理",
        value: "GENERE",
      },
    ],
  },
  {
    type: "WebUser",
    name: "user",
    label: "创建者",
    placeholder: "请输入用户",
  },
  {
    type: "WebTime",
    name: "eos",
    label: "EOS时间",
    placeholder: "请选择时间",
  },
  {
    type: "WebCascader",
    name: "tags",
    label: "标签类型",
    placeholder: "请选择标签类型",
    options: [
      {
        label: "XDM",
        value: "XDM",
      },
      {
        label: "SYS",
        value: "SYS",
      },
      {
        label: "GENERE",
        value: "GENERE",
      },
    ],
  },
];
