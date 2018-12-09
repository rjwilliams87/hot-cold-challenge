import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessSection from "./guessSection";

configure({ adapter: new Adapter() });

describe("<GuessSection />", () => {
  it("should render without crashing", () => {
    shallow(<GuessSection />);
  });
});
