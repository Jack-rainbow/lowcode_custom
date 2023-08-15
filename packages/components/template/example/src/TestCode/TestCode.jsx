
import { defineComponent, ref, watch } from 'vue'
import { ioc, usePageRenderProvider } from '@syc-lowcode/client-framework'

import { RuntimeEnv } from '@syc-lowcode/base'
import _ from 'lodash'
import pageDsl from './dsl.json'

const WorkSortList = defineComponent({
  name: 'WorkSortList',
  setup(props, ctx) {
    const widgetManager = ioc.resolve('widgetManager')
    console.log(widgetManager, '----widgetManager')
    const { engine, eventEngine } = usePageRenderProvider({
      props: {
        appId: '1a27a38fb1ff6aa13492ba5687577ffb',
        pageCode: '1a27a38fb1ff6aa13492ba5687577ffbwork_sort_list',
        pageVariable: {},
        pageDsl
      },
      ctx
    })
    const dialogData = ref({})
    watch(
      () => eventEngine.dialogData,
      (v) => {
        dialogData.value = v.value
      },
      { deep: true, immediate: true }
    )
    const getCommonProps = (id, code) => {
      const { meta } = widgetManager.getDefineMetaData(code)
      const widget = engine.getInstanceMetaData(id)
      const resolvedEventMap = eventEngine.getWidgetEvents(widget, {})
      return {
        ...resolvedEventMap,
        engine,
        defineMetaData: meta,
        appId: engine.appId.value,
        pageDsl: engine.pageDsl.value,
        pageCode: engine.pageCode.value,
        runtimeEnv: RuntimeEnv.RUNTIME,
        instanceMetaData: widget,
        'data-instance-id': id,
        'data-widget-code': code,
        variableContext: engine.variableContext,
        ref: (el) => engine.setWidgetRef(id, el)
      }
    }

    return () => {
      if (engine.loading.value) {
        return (
          <div
            style={{
              textAlign: 'center',
              padding: '10px'
            }}
          >
            正在初始化...
          </div>
        )
      }
      if (
        _.isEmpty(engine.pageDsl.value.widgets) ||
        _.isEmpty(_.get(engine.pageDsl.value.widgets, '0.children.default'))
      ) {
        return (
          <el-empty
            description={'页面「' + engine.pageDetail.value?.name + '」啥都没，请先设计下吧'}
          ></el-empty>
        )
      }
      return (
        <div class="work-sort-list">
          <EventDialog
            {...dialogData.value}
            v-model={dialogData.value.visible}
            onClose={eventEngine.onHideDialog}
          />

          <LcPage class="page-tm1udc2c8q" {...getCommonProps('tm1udc2c8q', 'Page')}>
            <LcText
              defaultValue={''}
              staticText={'工序管理'}
              class="text-hz54u5qmf3"
              // {...getCommonProps('hz54u5qmf3', 'Text')}
              ></LcText>

            <LcTable
              enableActions={true}
              columns={[
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'code',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '工序代码',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {
                    textAlign: 'left',
                    backgroundRepeat: 'no-repeat'
                  },
                  id: 'm9oersgdsg',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {
                      textAlign: 'left'
                    },
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'ronlwvlvrg',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'm9oersgdsg',
                    props: {
                      defaultValue: {
                        expression: '',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'name',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '工序名称',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'fy72qggyz1',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'isbemcnv68',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'fy72qggyz1',
                    props: {
                      defaultValue: {
                        expression: '',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'status',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '状态',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'p0f32ky53s',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'z6spqniesn',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'p0f32ky53s',
                    props: {
                      defaultValue: {
                        expression: '',
                        rawValue: 'row.status[0]',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'version',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '工序版本',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'arzfw1ywt1',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'f0mcrdpou5',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'arzfw1ywt1',
                    props: {
                      defaultValue: {
                        expression: '',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'operation_type',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '操作类别',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'sga6hqai4e',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 's3eezy1s8t',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'sga6hqai4e',
                    props: {
                      defaultValue: {
                        expression: '',
                        rawValue: 'row.operation_type.name',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'type',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '工序类型',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'es164enpap',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'o613bs1wj9',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'es164enpap',
                    props: {
                      defaultValue: {
                        expression: '',
                        rawValue: 'row.type[0]',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'production_phase',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '生产阶段',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'n9y228ssz0',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'skcfs17w2e',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'n9y228ssz0',
                    props: {
                      defaultValue: {
                        expression: '',
                        rawValue: 'GETENUMLABEL(column.code,row.production_phase)',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'describe',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '工序描述',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'dj0i02fe7h',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'hnf8sewkdb',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'dj0i02fe7h',
                    props: {
                      defaultValue: {
                        expression: '',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'update_by',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '录入人员',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {},
                  id: 'uykypu444k',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {},
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'posy2zvkeq',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'uykypu444k',
                    props: {
                      defaultValue: {
                        expression: '',
                        rawValue:
                          'IF(row.update_by != null,row.update_by?.name,row.create_by.name)',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                },
                {
                  code: 'Column',
                  auth: {
                    enable: false
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  version: '1.0.0',
                  parentId: 'ss4f9shyns',
                  props: {
                    comments: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    prop: {
                      expression: '',
                      rawValue: 'update_time',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sortOrder: {
                      expression: '',
                      rawValue: 'descending',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    width: {
                      expression: '',
                      rawValue: '',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    label: {
                      expression: '',
                      rawValue: '录入时间',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    sort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    allowSort: {
                      expression: '',
                      rawValue: false,
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  },
                  sourceType: 'setter',
                  name: '表格列',
                  style: {
                    backgroundRepeat: 'no-repeat'
                  },
                  id: 'oe7cdjqvs4',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [],
                  child: {
                    code: 'Text',
                    auth: {
                      enable: false
                    },
                    sourceType: 'setter',
                    name: '文本',
                    style: {
                      textAlign: 'left'
                    },
                    control: {
                      canRemove: true,
                      canDrop: true,
                      canSelect: true,
                      canCopy: true,
                      canDrag: true
                    },
                    id: 'fteoardiah',
                    visibleConfig: {
                      visible: true,
                      expression: '',
                      type: ''
                    },
                    version: '1.0.0',
                    events: [
                      {
                        methodKey: '',
                        name: 'onClick'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseenter'
                      },
                      {
                        methodKey: '',
                        name: 'onMouseleave'
                      }
                    ],
                    parentId: 'oe7cdjqvs4',
                    props: {
                      defaultValue: {
                        expression: '',
                        rawValue:
                          "IF(row.update_time != null,FORMAT(row.update_time,'YYYY-MM-DD HH:mm:ss'),FORMAT(row.create_time,'YYYY-MM-DD HH:mm:ss'))",
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      },
                      staticText: {
                        expression: '',
                        rawValue: '这是一段文本',
                        i18nKey: '',
                        variableKey: '',
                        type: 'raw'
                      }
                    }
                  }
                }
              ]}
              indexName={'序号'}
              sortConfig={[]}
              actionDisplayCount={2}
              index={true}
              enableSelection={false}
              showPagination={true}
              columnsAll={null}
              flowParams={[]}
              filterConfig={[]}
              flowCode={undefined}
              modelCode={'6ab4ad5d990a4b9ca95e8ea1fb1e891b'}
              actions={[
                {
                  code: 'Button',
                  auth: {
                    enable: false
                  },
                  sourceType: 'setter',
                  name: '激活',
                  formula: 'row.status[0] == "新建" || row.status[0] == "保留"',
                  style: {
                    backgroundRepeat: 'no-repeat'
                  },
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  id: 'nn1sdbz1ta',
                  visibleConfig: {
                    visible: false,
                    expression: '',
                    type: ''
                  },
                  events: [
                    {
                      methodKey: 'nn1sdbz1ta.onClick',
                      name: 'onClick'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseenter'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseleave'
                    }
                  ],
                  parentId: 'ss4f9shyns',
                  props: {
                    size: {
                      expression: '',
                      rawValue: 'default',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    customStyle: {
                      expression: '',
                      rawValue: 'danger',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    text: {
                      expression: '',
                      rawValue: '激活',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  }
                },
                {
                  code: 'Button',
                  auth: {
                    enable: false
                  },
                  sourceType: 'setter',
                  name: '编辑',
                  formula: 'row.status[0] == "新建" || row.status[0] == "激活"',
                  style: {},
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  id: 'ss2goq5t4s',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [
                    {
                      methodKey: 'ss2goq5t4s.onClick',
                      name: 'onClick'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseenter'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseleave'
                    }
                  ],
                  props: {
                    size: {
                      expression: '',
                      rawValue: 'default',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    customStyle: {
                      expression: '',
                      rawValue: 'text',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    text: {
                      expression: '',
                      rawValue: '编辑',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  }
                },
                {
                  code: 'Button',
                  auth: {
                    enable: false
                  },
                  sourceType: 'setter',
                  name: '保留',
                  formula: 'row.status[0] == "新建" || row.status[0] == "激活"',
                  style: {},
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  id: 'cighr8zij5',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [
                    {
                      methodKey: 'cighr8zij5.onClick',
                      name: 'onClick'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseenter'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseleave'
                    }
                  ],
                  props: {
                    size: {
                      expression: '',
                      rawValue: 'default',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    customStyle: {
                      expression: '',
                      rawValue: 'text',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    text: {
                      expression: '',
                      rawValue: '保留',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  }
                },
                {
                  code: 'Button',
                  auth: {
                    enable: false
                  },
                  sourceType: 'setter',
                  name: '废除',
                  formula: 'row.status[0] != "废除"',
                  style: {},
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  id: 'frd8835rhw',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [
                    {
                      methodKey: 'frd8835rhw.onClick',
                      name: 'onClick'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseenter'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseleave'
                    }
                  ],
                  props: {
                    size: {
                      expression: '',
                      rawValue: 'default',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    customStyle: {
                      expression: '',
                      rawValue: 'text',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    text: {
                      expression: '',
                      rawValue: '废除',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  }
                },
                {
                  code: 'Button',
                  auth: {
                    enable: false
                  },
                  sourceType: 'setter',
                  name: '删除',
                  formula: '',
                  style: {},
                  control: {
                    canRemove: true,
                    canDrop: true,
                    canSelect: true,
                    canCopy: true,
                    canDrag: true
                  },
                  id: 'ndr0n4tapu',
                  visibleConfig: {
                    visible: true,
                    expression: '',
                    type: ''
                  },
                  events: [
                    {
                      methodKey: 'ndr0n4tapu.onClick',
                      name: 'onClick'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseenter'
                    },
                    {
                      methodKey: '',
                      name: 'onMouseleave'
                    }
                  ],
                  props: {
                    size: {
                      expression: '',
                      rawValue: 'default',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    customStyle: {
                      expression: '',
                      rawValue: 'text',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    },
                    text: {
                      expression: '',
                      rawValue: '删除',
                      i18nKey: '',
                      variableKey: '',
                      type: 'raw'
                    }
                  }
                }
              ]}
              dataSourceType={'model'}
              enableSearch={true}
              selectionMode={'multiple'}
              class="table-ss4f9shyns"
              {...getCommonProps('ss4f9shyns', 'Table')}
              vSlots={{
                toolbar: () => {
                  return (
                    <LcContainer
                      justify={'left'}
                      align={'top'}
                      direction={'row'}
                      {...getCommonProps('zd3rkbql1n', 'Container')}
                    >
                      <LcButton
                        size={'default'}
                        customStyle={'primary'}
                        text={'创建'}
                        class="button-rc8c75mpah"
                        {...getCommonProps('rc8c75mpah', 'Button')}
                      ></LcButton>
                    </LcContainer>
                  )
                },

                search: () => {
                  return (
                    <LcSearchForm
                      varName={'work_sort'}
                      modelTableName={null}
                      flowCode={'work_sort_search'}
                      modelCode={'6ab4ad5d990a4b9ca95e8ea1fb1e891b'}
                      class="search-form-wdtpylzocr"
                      {...getCommonProps('wdtpylzocr', 'SearchForm')}
                    >
                      <CustomFormItem
                        label={'代码'}
                        questionText={''}
                        questionTooltip={false}
                        prop={'code'}
                      >
                        <LcSingleText
                          fieldName={'code'}
                          insertIcon={{
                            prefix: '',
                            suffix: ''
                          }}
                          defaultValue={undefined}
                          rules={[]}
                          inputStateFormular={''}
                          label={'代码'}
                          questionText={''}
                          readonly={false}
                          insertWord={{
                            prefix: '',
                            suffixConfig: {
                              prefixLabel: '尾部',
                              type: 'text'
                            },
                            label: '插入文字',
                            suffix: '',
                            prefixConfig: {
                              prefixLabel: '头部',
                              type: 'text'
                            }
                          }}
                          showWordLimit={true}
                          disabled={false}
                          inputState={false}
                          placeholder={''}
                          class="single-text-nzor91ucyu"
                          {...getCommonProps('nzor91ucyu', 'SingleText')}
                        ></LcSingleText>
                      </CustomFormItem>

                      <CustomFormItem
                        label={'名称'}
                        questionText={''}
                        questionTooltip={false}
                        prop={'name'}
                      >
                        <LcSingleText
                          fieldName={'name'}
                          insertIcon={{
                            prefix: '',
                            suffix: ''
                          }}
                          defaultValue={undefined}
                          rules={[]}
                          inputStateFormular={''}
                          label={'名称'}
                          questionText={''}
                          readonly={false}
                          insertWord={{
                            prefix: '',
                            suffixConfig: {
                              prefixLabel: '尾部',
                              type: 'text'
                            },
                            label: '插入文字',
                            suffix: '',
                            prefixConfig: {
                              prefixLabel: '头部',
                              type: 'text'
                            }
                          }}
                          showWordLimit={true}
                          disabled={false}
                          inputState={false}
                          placeholder={''}
                          class="single-text-ctk7vi6tsp"
                          {...getCommonProps('ctk7vi6tsp', 'SingleText')}
                        ></LcSingleText>
                      </CustomFormItem>

                      <CustomFormItem
                        label={'状态'}
                        questionText={''}
                        questionTooltip={false}
                        prop={'status'}
                      >
                        <LcPicker
                          fieldName={'status'}
                          insertIcon={{
                            prefix: '',
                            suffix: ''
                          }}
                          defaultValue={undefined}
                          rules={[]}
                          inputStateFormular={''}
                          label={'状态'}
                          questionText={''}
                          readonly={false}
                          insertWord={{
                            prefix: '',
                            suffixConfig: {
                              prefixLabel: '尾部',
                              type: 'text',
                              modelKey: 'suffix'
                            },
                            label: '插入文字',
                            suffix: '',
                            prefixConfig: {
                              prefixLabel: '头部',
                              type: 'text',
                              modelKey: 'prefix'
                            }
                          }}
                          options={[]}
                          disabled={false}
                          inputState={false}
                          placeholder={''}
                          class="picker-fhvdtpg7qc"
                          {...getCommonProps('fhvdtpg7qc', 'Picker')}
                        ></LcPicker>
                      </CustomFormItem>

                      <CustomFormItem
                        label={''}
                        questionText={''}
                        questionTooltip={false}
                        prop={'version'}
                      >
                        <LcSingleText
                          fieldName={'version'}
                          insertIcon={{
                            prefix: '',
                            suffix: ''
                          }}
                          defaultValue={undefined}
                          rules={[]}
                          inputStateFormular={''}
                          label={''}
                          questionText={''}
                          readonly={false}
                          insertWord={{
                            prefix: '🔍',
                            suffixConfig: {
                              prefixLabel: '尾部',
                              type: 'text'
                            },
                            label: '插入文字',
                            suffix: '',
                            prefixConfig: {
                              prefixLabel: '头部',
                              type: 'text'
                            }
                          }}
                          showWordLimit={true}
                          disabled={false}
                          inputState={false}
                          placeholder={'请输入关键字'}
                          class="single-text-sy2k1qpsns"
                          {...getCommonProps('sy2k1qpsns', 'SingleText')}
                        ></LcSingleText>
                      </CustomFormItem>
                    </LcSearchForm>
                  )
                }
              }}
            ></LcTable>
          </LcPage>
        </div>
      )
    }
  }
})
export default WorkSortList
