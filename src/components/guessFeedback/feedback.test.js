import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Feedback from "./feedback.js";

configure({ adapter: new Adapter() });

describe("<Feedback />", () => {
  it("should render without crashing", () => {
    shallow(<Feedback />);
  });

  it("should render correct feedbacak", () => {
    let testFeedback = "Foo Bar";
    const wrapper = shallow(<Feedback feedback={testFeedback} />);
    // expect(wrapper.contains(testFeedback)).toEqual(true);
    const item = wrapper.find("h2");
    expect(item.text()).toEqual(testFeedback);
  });
});
