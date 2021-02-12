# PasswordGen
This Password Generator is a refactoring project done by Douglas Lubaway for Several Clients. They have asked for a fully functioning password generator.

## Getting Started
The Password Generator is very simple to set up.
Step...  
1.) Download/Clone the website to your local repo.  
2.) Open the HTML file in the web browser of your choice, preferably Chrome.  

If you'd prefer to simply view the website, it is up on this following link!  
https://hhhhhaaaa.github.io/PasswordGen/

## HTML/CSS
No change of values.

## Javascript
### 13
Based on the original JS, added the function generatePassword.

### 14
Sets up the initial prompt, asking for a password length, from 8-128 characters.

### 15
Makes sure there is a value within the first prompt, and if not, returns out of the function as to stop any further development.

### 18 And Down
Sets a base length, to be overwritten.
Sets the initial array for the password.
Sets the prompt for the character types, with default values.
The listed character types.

### 27
This is a necessary step to make sure the Number Item is...
1.) A number.
2.) Greater than or equal to 8.
3.) Less than or equal to 128.

If it passes all requirements, the length is set to the prompt.

### 30
Creates the full array of listed character types.

### 41
Joins the list together into one string.

### 42
Several things happen here, which I will break up.
<Array(parseInt(numLength))>
Makes an array using numLength as it's length. parseInt is being used to make sure numLength stays a number and not a string.

<.fill(listFinal)>
Fills the array with an equal amount of the string made in listFinal.

<.map(function (x)...)>
For every item in the Array, it executes this function which...

<return x[Math.floor(Math.random() * x.length)] })>
Takes a Math.random Integer and multiplies it by the length of each string., returning only one item from the string, thus generating one letter/number/character for the password.

<.join('')>
And finally, joins the whole thing together.

### 43
Returns the password, to be shown in the box.

## Repository
Added a general use MIT license.
Added this README.
Changed folder assets to folder public.

## Final Screenshot
![Password Generator Final Refactor](/public/PG.png "Password Generator Final Refactor")