const DEMO_DATA = {
  name: '测试报表',
  // freeze: "D13",
  styles: [
    {
      bgcolor: '#a7d08c',
      textwrap: true,
      color: '#900b09',
      align: 'left',
      border: {
        top: ['thin', '#000'],
        bottom: ['thin', '#000'],
        right: ['thin', '#000'],
        left: ['thin', '#000'],
      },
      diagonals: true,
    },
    {
      align: 'center',
      border: {
        top: ['double', '#000'],
        bottom: ['double', '#000'],
        right: ['double', '#000'],
        left: ['double', '#000'],
      },
    },
    {
      align: 'center',
      border: {
        top: ['thin', '#000'],
        bottom: ['thin', '#000'],
        right: ['thin', '#000'],
        left: ['thin', '#000'],
      },
    },
    {
      align: 'center',
      color: 'red',
      underline: true,
      font: {
        bold: true,
        italic: true,
        name: 'Helvetica',
        size: 20,
      },
      border: {
        top: ['thin', '#000'],
        bottom: ['thin', '#000'],
        right: ['thin', '#000'],
        left: ['thin', '#000'],
      },
    },
    {
      align: 'center',
      border: {
        top: ['thin', '#000'],
        bottom: ['thin', '#000'],
        right: ['thin', '#000'],
        left: ['double', '#000'],
      },
    },
    {
      align: 'center',
      border: {
        top: ['thin', '#000'],
        bottom: ['thin', '#000'],
        right: ['double', '#000'],
        left: ['thin', '#000'],
      },
    },
  ],
  merges: ['H5:J7', 'J12:K12'],
  cols: {},
  rows: {
    0: {
      cells: {
        0: {
          text: 'www.baidu.com',
          style: 4,
        },
        2: {
          text: '贵哦好哦不能hi欧文贾宏伟庵后号位',
          style: 0,
        },
      },
    },
    1: {
      cells: {
        0: {
          text: '3',
          style: 4,
        },
        11: {
          text: '4',
          style: 5,
        },
      },
    },
    2: {
      cells: {
        0: {
          text: '5',
          style: 4,
        },
        11: {
          text: '6',
          style: 5,
        },
      },
    },
    4: {
      height: 38,
      cells: {
        2: {
          text: '               年级\n  班级',
          style: 0,
        },
        3: {
          text: '一年级',
          style: 2,
        },
        4: {
          text: '二年级',
          style: 2,
        },
        5: {
          text: '三年级',
          style: 2,
        },
        7: {
          text: '合并单元格',
          style: 3,
          merge: [2, 2],
          mergeRange: {
            sri: 4,
            sci: 7,
            eri: 6,
            eci: 9,
          },
        },
      },
    },
    5: {
      cells: {
        2: {
          text: '91班',
          style: 2,
        },
        3: {
          text: '50',
          style: 2,
        },
        4: {
          text: '53',
          style: 2,
        },
        5: {
          text: '48',
          style: 2,
        },
      },
      hide: false,
    },
    6: {
      cells: {
        2: {
          text: '1',
          style: 1,
        },
        3: {
          text: '2',
          style: 1,
        },
        4: {
          text: '3',
          style: 1,
        },
        5: {
          text: '4',
          style: 1,
        },
      },
    },
    11: {
      height: 40,
      cells: {
        4: {
          text: '序号',
          style: 2,
        },
        5: {
          text: '单1',
          style: 2,
        },
        6: {
          text: '人口总数：',
          style: 2,
        },
        7: {
          text: '数1',
          style: 2,
        },
        8: {
          text: '多1',
          style: 2,
        },
        9: {
          text: '合并单元格',
          style: 2,
          merge: [0, 1],
          mergeRange: {
            sri: 11,
            sci: 9,
            eri: 11,
            eci: 10,
          },
        },
      },
    },
  },
};
