import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Header from "./header.js";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("Renders without crashing", () => {
    shallow(<Header />);
  });

  it("Renders header initially", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass("header")).toEqual(true);
  });

  //   it("Renders with correct children", () => {
  //     const wrapper = shallow(<Header />);
  //     expect(wrapper.find("header").children()).to.have.lengthOf(7);
  //   });
});
