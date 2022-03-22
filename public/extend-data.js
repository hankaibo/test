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
  ],
  merges: ['C3:D4'],
  rows: {
    1: {
      cells: {
        0: {
          text: 'testingtesttestetst',
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
          style: 0,
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
    8: {
      cells: {
        1: {
          text: '',
          type: 'select',
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
  ],
  autofilter: {},
  extra: {},
};
