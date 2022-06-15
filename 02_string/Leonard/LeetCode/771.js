// Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

const numJewelsInStones = (jewels, stones) => {
  let result = 0;

  const jewel = jewels.split('');
  const splitStones = stones.split('');

  jewel.map((jewel) => {
    splitStones.map((stone) => {
      if (jewel === stone) {
        result += 1;
      }
    });
  });

  return result;
};
