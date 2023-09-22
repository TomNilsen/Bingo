import { BoardArray, DrawNumbers } from "./Real_Data.js";
import { controller } from "./controller.js";

for (let i = 0; i < DrawNumbers.length; i++) {
  for (let j = 0; j < BoardArray.length; j++) {
    if (!BoardArray[j].bingo) {
      for (let k = 0; k < BoardArray[j].numbers.length; k++) {
        if (DrawNumbers[i] === BoardArray[j].numbers[k]) {
          BoardArray[j].numbers[k] = 999;
          controller(BoardArray[j], DrawNumbers[i]);
        }
      }
    }
  }
}


