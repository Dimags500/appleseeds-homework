function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

function winnerCalc(team1, team2) {
  if (team1 > team2) console.log(`the winner is team1 with ${team1} scores`);
  else if (team1 < team2)
    console.log(`the winner is team2 with ${team2} scores`);
  else if (team2 === team2) console.log("same scores , no winner");
}

const team1 = average(89, 120, 103);
const team2 = average(116, 94, 123);

winnerCalc(team1, team2);
winnerCalc(average(97, 134, 105), team2);
