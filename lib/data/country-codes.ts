import type { CountryCode } from '../validators/phone-validation';

// Country codes with validation rules
export const countryCodes: CountryCode[] = [
  {
    code: 'IN',
    dialCode: '+91',
    name: 'India',
    flag: '🇮🇳',
    minLength: 10,
    maxLength: 10,
  },
  {
    code: 'US',
    dialCode: '+1',
    name: 'United States',
    flag: '🇺🇸',
    minLength: 10,
    maxLength: 10,
  },
  {
    code: 'GB',
    dialCode: '+44',
    name: 'United Kingdom',
    flag: '🇬🇧',
    minLength: 10,
    maxLength: 10,
  },
  {
    code: 'AU',
    dialCode: '+61',
    name: 'Australia',
    flag: '🇦🇺',
    minLength: 9,
    maxLength: 9,
  },
  {
    code: 'CA',
    dialCode: '+1',
    name: 'Canada',
    flag: '🇨🇦',
    minLength: 10,
    maxLength: 10,
  },
];

export const defaultCountryCode: CountryCode = countryCodes[0]; // India
