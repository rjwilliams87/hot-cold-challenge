import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StatusSection from "./statusSection";

configure({ adapter: new Adapter() });

describe("<StatusSection />", () => {
  it("should render without crashing", () => {
    shallow(<StatusSection guesses={[]} />);
  });
});
