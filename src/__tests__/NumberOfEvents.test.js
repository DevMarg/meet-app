/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import { getEvents } from "../api";

describe('<NumberOfEvents /> component', () => {
    let updateNumberOfEvents;
  
    beforeEach(() => {
      // Mock function for updateNumberOfEvents
      updateNumberOfEvents = jest.fn();
      // Render the NumberOfEvents component with the mock function
      render(<NumberOfEvents updateNumberOfEvents={updateNumberOfEvents} />);
    });
  
    test('renders NumberOfEvents component correctly', () => {
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });
  
    test('textbox has default value of 32', () => {
      expect(screen.getByRole('spinbutton').value).toBe('32');
    });
  
    test('value changes when user types in textbox', () => {
      const textbox = screen.getByRole('spinbutton');
      fireEvent.change(textbox, { target: { value: '10' } });
      expect(textbox.value).toBe('10');
    });
  });

