import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import GuessForm from "./guessForm.js";

configure({ adapter: new Adapter() });

describe("<GuessForm />", () => {
  it("should render without crashing", () => {
    shallow(<GuessForm />);
  });

  it("should fire callback when form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 33;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it("should reset the input when the form is submitted", () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 5;
    wrapper.simulate("submit");
    expect(input.instance().value).toEqual("");
  });
});
