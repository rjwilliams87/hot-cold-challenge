import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

import Nav from "./nav.js";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  it("Renders without crashing", () => {
    shallow(<Nav />);
  });

  it("Renders ul iniitally", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.hasClass("topNav")).toEqual(true);
  });

  it("calls restartGame when new game is clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<Nav restartGame={callback} />);
    const link = wrapper.find(".new");
    link.simulate("click", {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

  it("Renders correct elements", () => {
    const wrapper = shallow(<Nav />);
    expect(
      wrapper.containsAllMatchingElements([
        <li className="topNav-li">
          <a href="#what" aria-label="How to play">
            What?
          </a>
        </li>,
        <li className="topNav-li">
          <a
            href="#feedback"
            aria-label="Start new game"
            onClick={() => {
              props.restartGame();
            }}
          >
            New Game
          </a>
        </li>
      ])
    );
  });
});
