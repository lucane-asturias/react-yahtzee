/** Rule for Yahtzee scoring.
 *
 * This is an "abstract class"; the real rules are subclasses of these.
 * This stores all parameters passed into it as properties on the instance
 * (to simplify child classes so they don't need constructors of their own).
 *
 * It contains useful functions for summing, counting values, and counting
 * frequencies of dice. These are used by subclassed rules.
 */

class Rule {
  constructor(params) {
    // console.log(params) veja 
    // put all properties in params on instance
    Object.assign(this, params);
  }

  sum(dice) {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  }

  freq(dice) {
    // frequencies of dice values
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  }
  //takes an aray of dice and then a value and it will tell you how many times it appears in dice
  count(dice, val) {
    // # times val appears in dice
    //in the dice array, there is a val number that is equal? ex: [2, 4, 1, 3, 2], 2 is equals to 2 
    return dice.filter(d => d === val).length; //and the length will be 2
  }
}

/** Given a sought-for val, return sum of dice of that val.
 *
 * Used for rules like "sum of all ones"
 */

class TotalOneNumber extends Rule {
  evalRoll = dice => {
    return this.val * this.count(dice, this.val);
    //how many times val occur in those dice
  };
}

/** Given a required # of same dice, return sum of all dice.
 *
 * Used for rules like "sum of all dice when there is a 3-of-kind"
 */

class SumDistro extends Rule {
  evalRoll = dice => {
    // do any of the counts meet or exceed this distro?
    // ex: default value of three of a kind is 3; it's passed down as val through dice.
    // (d === val).length → there is some val that is greater or equal than 3? 
    return this.freq(dice).some(c => c >= this.count) ? this.sum(dice) : 0;
  };
}

/** Check if full house (3-of-kind and 2-of-kind) */

class FullHouse extends Rule {
  evalRoll = dice => {
    const freqs = this.freq(dice); // [3, 2]
    return (freqs.includes(2) && freqs.includes(3)) ? this.score : 0; 
  }
}

/** Check for small straights. */

class SmallStraight extends Rule {
  evalRoll = dice => {
    const d = new Set(dice);
    // straight can be 234 + either 1 or 5
    if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5)))
      return this.score;

    // or 345 + either 2 or 6
    if (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6)))
      return this.score;

    return 0;
  }
}

/** Check for large straights. */

class LargeStraight extends Rule {
  evalRoll = dice => {
    const d = new Set(dice);

    /* If the Dice array being passed into LargeStraight was [1,2,2,3,4,5], the new Set()
    would be {1, 2, 3, 4, 5} and would only have to search through 5 items as oppose to 6. */

    // large straight must be 5 different dice & only one can be a 1 or a 6
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

/** Check if all dice are same. */

class Yahtzee extends Rule {
  evalRoll = dice => {
    // all dice must be the same
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

//instances of rule class
// ones, twos, etc score as sum of that value
const ones = new TotalOneNumber({ val: 1, description: "1 point per 1" });
const twos = new TotalOneNumber({ val: 2, description: "2 points per 2" });
const threes = new TotalOneNumber({ val: 3, description: "3 points per 3" });
const fours = new TotalOneNumber({ val: 4, description: "4 points per 4" });
const fives = new TotalOneNumber({ val: 5, description: "5 points per 5" });
const sixes = new TotalOneNumber({ val: 6, description: "6 points per 6" });

// three/four of kind score as sum of all dice
const threeOfKind = new SumDistro({
  count: 3,
  description: "Sum all dice if 3 are the same"
});
const fourOfKind = new SumDistro({
  count: 4,
  description: "Sum all dice if 4 are the same"
});

// full house scores as flat 25
const fullHouse = new FullHouse({
  score: 25,
  description: "25 points for a full house"
});

// small/large straights score as 30/40
const smallStraight = new SmallStraight({
  score: 30,
  description: "30 points for a small straight"
});
const largeStraight = new LargeStraight({
  score: 40,
  description: "40 points for a large straight"
});

// yahtzee scores as 50
const yahtzee = new Yahtzee({
  score: 50,
  description: "50 points for yahtzee"
});

// for chance, can view as sum of all dice, requiring at least 0 of a kind
const chance = new SumDistro({ 
  count: 0, 
  description: "Sum of all dice" 
});


export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
};