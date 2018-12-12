import * as actions from "../actions";

const initialState = {
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  guesses: [],
  feedback: "Make Your Guess!"
};

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === actions.RESTART_GAME) {
    return Object.assign({}, state, {
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: "Make Your Guess!"
    });
  } else if (action.type === actions.ON_MAKE_GUESS) {
    if (isNaN(action.guess)) {
      return Object.assign({}, state, {
        feedback: "Please enter a valid number"
      });
    }
    const diff = Math.abs(action.guess - state.correctAnswer);
    let feedback;
    if (diff >= 50) {
      feedback = "Freezing";
    } else if (diff >= 30) {
      feedback = "Cold";
    } else if (diff >= 15) {
      feedback = "Warm";
    } else if (diff >= 8) {
      feedback = "Hot";
    } else {
      feedback = "You got it!";
    }

    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback
    });
  } else {
    return state;
  }
};
