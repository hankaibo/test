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
  cols: {
    len: 10,
    2: { width: 200 },
  },
  rows: {
    len: 80,
    0: {
      cells: {
        1: {
          text: '',
          type: 'date',
        },
      },
    },
    1: {
      cells: {
        0: { text: 'testingtesttestetst' },
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
        1: { text: 'Hello' },
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
    6: {
      cells: {
        2: {
          text: '',
          type: 'date',
        },
      },
    },
    7: {
      cells: {
        2: {
          text: '',
          type: 'date',
        },
      },
    },
    8: {
      cells: {
        1: {
          text: '',
          type: 'select',
        },
        3: {
          text: '',
          type: 'date',
        },
      },
    },
  },
};
