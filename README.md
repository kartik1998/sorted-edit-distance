## sorted-edit-distance

![](https://img.shields.io/badge/npm-v1.0.0-green) ![](https://img.shields.io/badge/edit--distance-DP-blue)

_This tool can be used to improve edit-distance checks for strings by sorting the strings and then running the edit-distance algorithm._

_eg._

```
Previous String A = dark apple eat
Previous String B = eat dark apple

# Now these strings will be sorted first :

New String A = apple dark eat
New String B = apple dark eat

```

**Usage**

```
const { sortedEditDistance, editDistance } = require('sorted-edit-distance');

const A = 'dark apple eat';
const B = 'eat dark apple';

const editDistance1 = sortedEditDistance(A, B);
const editDistance2 = editDistance(A, B);

```
