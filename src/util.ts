import {
	eastern_arabic_digits,
	harakat,
	western_arabic_digits,
} from './regex.ts'

const w_digits = '0123456789'
const e_digits = '٠١٢٣٤٥٦٧٨٩'

/**
 * Remove harakat (also know as "tashkeel") from Arabic text.
 */
export function remove_harakat(string: string) {
	return string.replace(harakat, '')
}

/**
 * Convert eastern arabic digits (١٢٣) to western arabic digits (123)
 */
export function to_western_digits(string: string | number): string {
	return String(string).replace(
		eastern_arabic_digits,
		(digit: string): string => {
			return w_digits[e_digits.indexOf(digit)]
		}
	)
}

/**
 * Convert western arabic digits (123) to eastern arabic digits (١٢٣)
 */
export function to_eastern_digits(string: string | number): string {
	return String(string).replace(
		western_arabic_digits,
		(digit: string): string => {
			return e_digits[w_digits.indexOf(digit)]
		}
	)
}
