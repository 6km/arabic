# arabic

A tiny library for dealing with Arabic text.

# Installation

```sh
# npm
npm install arabic

# yarn
yarn add arabic

# pnpm
pnpm add arabic
```

# Usage example

```js
import {
	remove_harakat,
	to_western_digits,
	to_eastern_digits,
} from './arabic-utils'

// Example: Remove Harakat
const text = 'أَحْمَدُ'
const text_without_harakat = remove_harakat(text)
console.log(text_without_harakat) // Output: أحمد

// Example: Convert Eastern Arabic digits to Western Arabic digits
const eastern_digits_string = '١٢٣٤٥'
const western_digits_string = to_western_digits(eastern_digits_string)
console.log(western_digits_string) // Output: 12345

// Example: Convert Western Arabic digits to Eastern Arabic digits
const western_digits_string = '12345'
const eastern_digits_string = to_eastern_digits(western_digits_string)
console.log(eastern_digits_string) // Output: ١٢٣٤٥
```

# License

This library is licensed under the MIT license.
