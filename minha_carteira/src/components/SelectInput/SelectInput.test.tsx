import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectInput from '.';

describe('SelectInput Component', () => {
    it('should render options correctly', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];

        const handleChange = jest.fn(); // Função mock para o onChange

        render(<SelectInput options={options} onChange={handleChange} />);

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

        const handleChange = jest.fn(); // Função mock para o onChange

        render(<SelectInput options={options} onChange={handleChange} />);

        // Check if each option has the correct value
        options.forEach(option => {
            const optionElement = screen.getByText(option.label) as HTMLOptionElement;
            expect(optionElement.value).toBe(option.value.toString());
        });
    });

    it('should call onChange when an option is selected', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];

        const handleChange = jest.fn(); // Função mock para o onChange

        render(<SelectInput options={options} onChange={handleChange} />);

        // Simulate selecting an option
        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: '2' } });

        // Verifique se o onChange foi chamado com o valor correto
        expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '2' } }));
    });
});
