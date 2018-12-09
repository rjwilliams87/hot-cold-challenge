import React from "react";
import { configure } from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "./game";

configure({ adapter: new Adapter() });

describe("<Game />", () => {
  it("should render without crashing", () => {
    shallow(<Game />);
  });

  it("should be able to start a new game", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: -1,
      guesses: [1, 2, 3, 4, 5],
      feedback: "Super!"
    });
    wrapper.instance().restartGame();
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual("Make Your Guess!");
    expect(wrapper.state("correctAnswer")).toBeGreaterThanOrEqual(0);
    expect(wrapper.state("correctAnswer")).toBeLessThanOrEqual(100);
  });

  it("can make guesses", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 75
    });
    wrapper.instance().onMakeGuess(1);
    expect(wrapper.state("guesses")).toEqual([1]);
    expect(wrapper.state("feedback")).toEqual("Freezing");

    wrapper.instance().onMakeGuess(45);
    expect(wrapper.state("guesses")).toEqual([1, 45]);
    expect(wrapper.state("feedback")).toEqual("Cold");

    wrapper.instance().onMakeGuess(60);
    expect(wrapper.state("guesses")).toEqual([1, 45, 60]);
    expect(wrapper.state("feedback")).toEqual("Warm");

    wrapper.instance().onMakeGuess(67);
    expect(wrapper.state("guesses")).toEqual([1, 45, 60, 67]);
    expect(wrapper.state("feedback")).toEqual("Hot");

    wrapper.instance().onMakeGuess(75);
    expect(wrapper.state("guesses")).toEqual([1, 45, 60, 67, 75]);
    expect(wrapper.state("feedback")).toEqual("You got it!");
  });
});
