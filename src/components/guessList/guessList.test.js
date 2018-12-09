import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import GuessList from "./guessList.js";

configure({ adapter: new Adapter() });

describe("<GuessList />", () => {
  it("should render without crashing", () => {
    const guesses = [22, 2, 33];
    shallow(<GuessList guesses={guesses} />);
  });

  it("should render li with correct key", () => {
    const guesses = [22, 33, 44];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find("li");
    expect(items.length).toEqual(guesses.length);
    guesses.forEach((guess, index) => {
      expect(items.at(index).text()).toEqual(guess.toString());
    });
  });
});
