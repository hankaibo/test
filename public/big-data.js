const mockData = { len: 10000 };
for (let i = 0; i < mockData.len; i += 1) {
  mockData[i] = {
    cells: {
      0: { text: 'A-' + i },
      1: { text: 'B-' + i },
      2: { text: 'C-' + i },
      3: { text: 'D-' + i },
      4: { text: 'E-' + i },
      5: { text: 'F-' + i },
    },
  };
}

const BIG_DATA = {
  name: '大数据测试',
  rows: mockData,
};
