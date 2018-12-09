import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import GuessCount from "./guessCount.js";

configure({ adapter: new Adapter() });

describe("<GuessCount />", () => {
  it("Should render without crashing", () => {
    shallow(<GuessCount />);
  });

  it("should render correct count", () => {
    const count = 5;
    const wrapper = shallow(<GuessCount count={count} />);
    expect(wrapper.text()).toEqual(`Guess #${count}`);
  });
});
