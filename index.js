const editDistance = (text1, text2) => {
  let dp = new Array(text1.length + 1);
  for (var i = 0; i <= text1.length; i++) {
    dp[i] = new Array(text2.length + 1);
    for (var j = 0; j <= text2.length; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = 0;
        continue;
      }
      if (i == 0) {
        dp[i][j] = dp[i][j - 1] + 1;
        continue;
      }
      if (j == 0) {
        dp[i][j] = dp[i - 1][j] + 1;
        continue;
      }
      let t = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      if (text1[i - 1] == text2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = t + 1;
    }
  }
  return dp[text1.length][text2.length];
};

const sortedEditDistance = (text1, text2) => {
  text1 = text1.split(' ').sort();
  text2 = text2.split(' ').sort();
  let str1 = '',
    str2 = '';
  text1.forEach((text) => (str1 += text + ' '));
  text2.forEach((text) => (str2 += text + ' '));

  return editDistance(str1.toLowerCase().trim(), str2.toLowerCase().trim());
};

module.exports = { sortedEditDistance, editDistance };
