const List = document.querySelector("ol");

export function controller(board, last) {
  if (
    (board.numbers[0] === 999) &&
    (board.numbers[1] === 999) &&
    (board.numbers[2] === 999) &&
    (board.numbers[3] === 999) &&
    (board.numbers[4] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[5] === 999) &&
    (board.numbers[6] === 999) &&
    (board.numbers[7] === 999) &&
    (board.numbers[8] === 999) &&
    (board.numbers[9] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[10] === 999) &&
    (board.numbers[11] === 999) &&
    (board.numbers[12] === 999) &&
    (board.numbers[13] === 999) &&
    (board.numbers[14] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[15] === 999) &&
    (board.numbers[16] === 999) &&
    (board.numbers[17] === 999) &&
    (board.numbers[18] === 999) &&
    (board.numbers[19] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[20] === 999) &&
    (board.numbers[21] === 999) &&
    (board.numbers[22] === 999) &&
    (board.numbers[23] === 999) &&
    (board.numbers[24] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[0] === 999) &&
    (board.numbers[5] === 999) &&
    (board.numbers[10] === 999) &&
    (board.numbers[15] === 999) &&
    (board.numbers[20] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[1] === 999) &&
    (board.numbers[6] === 999) &&
    (board.numbers[11] === 999) &&
    (board.numbers[16] === 999) &&
    (board.numbers[21] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[2] === 999) &&
    (board.numbers[7] === 999) &&
    (board.numbers[12] === 999) &&
    (board.numbers[17] === 999) &&
    (board.numbers[22] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[3] === 999) &&
    (board.numbers[8] === 999) &&
    (board.numbers[13] === 999) &&
    (board.numbers[18] === 999) &&
    (board.numbers[23] === 999)
  ) {
    finalScore(board, last);
  } else if (
    (board.numbers[4] === 999) &&
    (board.numbers[9] === 999) &&
    (board.numbers[14] === 999) &&
    (board.numbers[19] === 999) &&
    (board.numbers[24] === 999)
  ) {
    finalScore(board, last);
  } else {
    console.log("No bingo");
  }
}

function finalScore(object, last) {
  object.bingo = true;
  for (let i = 0; i < object.numbers.length; i++) {
    if (object.numbers[i] < 999) {
      object.score = object.score + object.numbers[i];
    }
  }
  const LI = document.createElement("li");
  console.log(last);
  LI.innerText = `Board ${object.board} got bingo! Score: ${
    object.score * last
  }`;
  List.appendChild(LI);
}
