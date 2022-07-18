const EXTEND_DATA = {
  name: '扩展类型测试',
  freeze: 'B3',
  styles: [
    {
      bgcolor: '#f4f5f8',
      textwrap: true,
      color: '#900b09',
      border: {
        top: ['thin', '#0366d6'],
        bottom: ['thin', '#0366d6'],
        right: ['thin', '#0366d6'],
        left: ['thin', '#0366d6'],
      },
    },
    {
      strike: true,
    },
  ],
  merges: ['C3:D4'],
  rows: {
    0: {
      cells: {
        1: {
          text: '',
          type: 'image',
          value:
            'https://www.techadvisor.com/wp-content/uploads/2022/06/howtogetexcelforfree1.png?resize=1024%2C538&quality=50&strip=all',
        },
        2: {
          text: '"><img src=1 onerror=debugger;>',
          type: 'text',
        },
      },
    },
    1: {
      cells: {
        0: {
          text: '',
          type: 'select',
          selectAsync: false, // 是否异步，true表示异步；当数据太多时，选择异步，只保存接口，在移动端使用时再调用相应的接口
          selectInterface: '', // 异步时的接口
          selectOptions: [
            { label: '测试一', value: 1 },
            { label: '测试二', value: 2 },
            { label: '测试三', value: 3 },
          ], // 下拉框数据，同步数据
        },
        2: {
          text: 'testing',
          type: 'radio',
          checked: false,
        },
        3: {
          text: '单选框测试',
          type: 'radio',
        },
        4: {
          text: '2',
          type: 'checkbox',
        },
      },
    },
    2: {
      cells: {
        0: {
          text: 'render',
          style: 1,
        },
        1: {
          text: 'Hello',
        },
        2: {
          text: 'haha',
          merge: [1, 1],
        },
        11: {
          text: '4',
          type: 'checkbox',
          checked: false,
        },
      },
    },
    5: {
      cells: {
        0: {
          text: '410423199106019571',
          type: 'inputGroup',
          inputLength: 18,
        },
      },
    },
    8: {
      cells: {
        1: {
          text: '',
          type: 'select',
          selectAsync: true, // 是否异步，true表示异步；当数据太多时，选择异步，只保存接口，在移动端使用时再调用相应的接口
          selectInterface: 'http://jsonplaceholder.typicode.com/users', // 异步时的接口
          selectProps: { label: 'username', value: 'id' },
        },
      },
    },
    10: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    11: {
      cells: {
        0: {
          type: 'data',
          text: '测试隐藏',
          hidden: true,
        },
        2: {
          type: 'date',
        },
      },
    },
    12: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    13: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    14: {
      cells: {
        2: {
          type: 'date',
        },
        3: {
          text: 'cell-text',
        },
      },
    },
    15: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    16: {
      cells: {
        2: {
          type: 'date',
        },
        3: {
          text: '4',
        },
      },
    },
    17: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    18: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    19: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    20: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    21: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    22: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    23: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    24: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    25: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    26: {
      cells: {
        2: {
          type: 'date',
        },
      },
    },
    len: 80,
  },
  cols: {
    2: {
      width: 200,
    },
    len: 10,
  },
  validations: [
    {
      refs: ['C11:C27'],
      mode: 'cell',
      type: 'date',
      required: false,
      operator: 't',
      value: '',
    },
    {
      refs: ['A6'],
      mode: 'cell',
      operator: '',
      required: false,
      type: 'inputGroup',
      value: '18',
    },
  ],
  autofilter: {},
  extra: {},
};
