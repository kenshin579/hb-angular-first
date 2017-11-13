const words = "1,2,3,4".split(",");
let sum = 0;
words.forEach(w => sum+=parseInt(w));

//typescript에서는 아래 w에서 오류를 발생함
// words.forEach(w => sum+=w);
console.log(`sum: ${sum}`);