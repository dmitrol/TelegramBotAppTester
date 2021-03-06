const storeTest = {};
const storeResponseData = {};
const passIndex = {};
const passStats = {};

const testLocalManager = {
  setTest: (chatId, test) => {
    storeTest[chatId] = test;
  },
  getTest: (chatId) => storeTest[chatId],
  setResponseData: (chatId, data) => {
    storeResponseData[chatId] = data;
  },
  getResponseData: (chatId) => storeResponseData[chatId],
  innitStats(chatId) {
    passStats[chatId] = {
      count: 0,
      qtrue: 0,
      qfalse: 0,
    };
  },
  answerTrue(chatId) {
    if (!passStats[chatId]) {
      passStats[chatId] = {
        count: 0,
        qtrue: 0,
        qfalse: 0,
      };
    } else {
      passStats[chatId].count += 1;
      passStats[chatId].qtrue += 1;
    }
  },
  answerFalse(chatId) {
    if (!passStats[chatId]) {
      passStats[chatId] = {
        count: 0,
        qtrue: 0,
        qfalse: 0,
      };
    } else {
      passStats[chatId].count += 1;
      passStats[chatId].qfalse += 1;
    }
  },
  getStats(chatId) {
    return passStats[chatId];
  },
  resetStats(chatId) {
    passStats[chatId] = {
      count: 0,
      qtrue: 0,
      qfalse: 0,
    };
  },
  getIndex(chatId) {
    if (!passIndex[chatId]) passIndex[chatId] = 0;
    return passIndex[chatId];
  },
  increaseIndex(chatId) {
    // eslint-disable-next-line operator-assignment
    passIndex[chatId] = passIndex[chatId] + 1;
  },
  resetIndex(chatId) {
    passIndex[chatId] = 0;
  },
  resetAll(chatId) {
    this.setTest(chatId, '');
    this.setResponseData(chatId, '');
    this.resetIndex(chatId);
    this.resetStats(chatId);
  },
};

module.exports = testLocalManager;
