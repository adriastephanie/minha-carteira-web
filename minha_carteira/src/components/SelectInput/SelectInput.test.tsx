import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectInput from '.';

describe('SelectInput Component', () => {
    it('should render options correctly', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];

        render(<SelectInput options={options} />);

        // Check if all options are rendered
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('should have the correct value for each option', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];

        render(<SelectInput options={options} />);

        // Check if each option has the correct value
        options.forEach(option => {
            const optionElement = screen.getByText(option.label) as HTMLOptionElement;
            expect(optionElement.value).toBe(option.value.toString());
        });
    });
});