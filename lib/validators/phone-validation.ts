// Country code type
export interface CountryCode {
  code: string;
  dialCode: string;
  name: string;
  flag: string;
  minLength: number;
  maxLength: number;
}

// Phone validation result
export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
  formattedNumber?: string;
}

// Validate phone number for a specific country
export function validatePhoneNumber(
  phoneNumber: string,
  country: CountryCode
): PhoneValidationResult {
  // Remove all non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  // Check if empty
  if (!digitsOnly) {
    return {
      isValid: false,
      error: 'Phone number is required',
    };
  }

  // Check length
  if (digitsOnly.length < country.minLength) {
    return {
      isValid: false,
      error: `Phone number must be at least ${country.minLength} digits`,
    };
  }

  if (digitsOnly.length > country.maxLength) {
    return {
      isValid: false,
      error: `Phone number must not exceed ${country.maxLength} digits`,
    };
  }

  // Country-specific validation
  if (country.code === 'IN') {
    // Indian phone numbers
    // Mobile numbers start with 6, 7, 8, or 9
    const firstDigit = digitsOnly[0];
    if (!['6', '7', '8', '9'].includes(firstDigit)) {
      return {
        isValid: false,
        error: 'Indian mobile numbers must start with 6, 7, 8, or 9',
      };
    }
  }

  // Return valid result with formatted number
  return {
    isValid: true,
    formattedNumber: country.dialCode + digitsOnly,
  };
}

// Get placeholder for phone number input
export function getPhoneNumberPlaceholder(country: CountryCode): string {
  if (country.code === 'IN') {
    return '98765 43210';
  }
  return `${'X'.repeat(country.minLength)}`;
}
