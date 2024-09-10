/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { render, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from "../App";


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

  describe('<App /> integration', () => {
    test('renders a list of events matching the city selected by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
    
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
    
        await user.type(CitySearchInput, "Berlin");
        const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
        await user.click(berlinSuggestionItem);
    
        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   
    
        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(
          event => event.location === 'Berlin, Germany'
        );
    
        expect(allRenderedEventItems.length).toBe(berlinEvents.length);

        allRenderedEventItems.forEach(event => {
            expect(event.textContent).toContain("Berlin, Germany");
          });
      });

      test('updates the number of events displayed when user changes the number of events input', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const NumberOfEventsInput = within(AppDOM).queryByRole('spinbutton'); 
        const EventListDOM = AppDOM.querySelector('#event-list');

        // Simulate user input to change the number of events
        await user.clear(NumberOfEventsInput);
        await user.type(NumberOfEventsInput, "{backspace}{backspace}10"); 

        // Wait for the list to update
        // const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
        const allEvents = await getEvents();        
        // const displayedEvents = allEvents.slice(0, 10); 

        
    });

});
