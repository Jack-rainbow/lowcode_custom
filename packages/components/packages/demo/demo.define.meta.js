import { WidgetGroup, WidgetIcon } from '@syc-lowcode/base'

const ButtonDefineMeta = {
  // 组件名称
  name: '按钮3333',
  // 组件标识
  code: 'demo',
  // 组件分组
  group: WidgetGroup.COMMON,
  // 组件图标
  icon: WidgetIcon.BUTTON,
  // 组件属性
  props: {},
  variables: [
    // { name: '加载中', key: 'loading', dataType: PageVariableDataType.BOOLEAN, initialValue: false },
    // { name: '禁用', key: 'disabled', dataType: PageVariableDataType.BOOLEAN, initialValue: false }
  ],

  // 支持配置哪些事件
  events: [{ label: '单击', name: 'onClick' }],
  // 检查函数，检查自身实例数据的方法
  inspect: (instanceData) => {},
  setterForm: {
    prop: [
      // 内部公共setter--请勿删除
      /**
       * NameSetter 名字setter
       * VisibleSetter 显隐setter
       */
      'NameSetter',
      'VisibleSetter',
      {
        group: true,
        groupName: '按钮属性',
        items: [
          {
            label: '按钮名称',
            path: 'props.text',
            // ssu 组件
            component: 'ssu-input-text'
          },
          {
            label: '组件大小',
            path: 'props.size',
            component: 'OptionInput',
            props: {
              type: 'radio',
              options: [
                { label: '大', value: 'large' },
                { label: '默认', value: 'default' },
                { label: '小', value: 'small' }
              ]
            }
          },
          {
            label: '禁用状态',
            path: 'props.disabled',
            //  内置组件
            component: 'FieldInputStateSetter',
            props: {
              name: '禁用',
              field: 'disabled',
              expression: 'disabledExpression'
            }
          }
        ]
      }
    ],
    // 样式配置---请勿删除
    /**
     * SizeStyleSetter  样式大小
     * MarginStyleSetter 样式边距
     * PaddingStyleSetter 样式padding
     */
    style: ['SizeStyleSetter', 'MarginStyleSetter', 'PaddingStyleSetter'],
    // 事件配置
    event: ['EventSetter']
  }
}

export default ButtonDefineMeta
