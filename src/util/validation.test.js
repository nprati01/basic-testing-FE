import { it } from 'vitest'
import { validateStringNotEmpty } from './validation'
import { validateNumber } from './validation'


it('should throw an error if input is empty sting', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
})

it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/)

})

it('should throw an error if a long string of blanks is provided', () => {
    const input = '         ';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
})
