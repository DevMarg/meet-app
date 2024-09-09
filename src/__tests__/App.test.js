/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import App from "../App";
import mockData from "../mock-data";

describe("<App /> component", () => {
    let AppDOM;
  
    beforeEach(() => {
      AppDOM = render(<App />).container.firstChild;
    });
  
    test("renders list of events", () => {
      expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
    });
  
    test("renders CitySearch", () => {
      expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
    });

    test("renders NumberOfEvents", () => {
        expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();  
      });
  });
