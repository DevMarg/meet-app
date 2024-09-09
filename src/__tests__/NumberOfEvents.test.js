/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import { getEvents } from "../api";

describe('<NumberOfEvents /> component', () => {
  test('renders NumberOfEvents component correctly', () => {
    render(<NumberOfEvents updateNumberOfEvents={() => {}} />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  test('textbox has default value of 32', () => {
    render(<NumberOfEvents updateNumberOfEvents={() => {}} />);
    expect(screen.getByRole('spinbutton').value).toBe('32');
  });

  test('value changes when user types in textbox', () => {
    render(<NumberOfEvents updateNumberOfEvents={() => {}} />);
    const textbox = screen.getByRole('spinbutton');
    fireEvent.change(textbox, { target: { value: '10' } });
    expect(textbox.value).toBe('10');
  });
});

