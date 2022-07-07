/* Imagine you have a remote that has only 6 buttons: 
LEFT, RIGHT, UP, DOWN, SELECT, and ENTER.
  
  We are building a feature that allows a user to interact with an on-screen keypad in order to use Google search.
  The keypad is controlled by your remote. LEFT/RIGHT/UP/DOWN are used to navigate to the desired letter/character,
  SELECT is used to select a letter, and ENTER is used to submit the search query. 
  
  example keypads:
    A - b - c - d - e
    f - g - h - i - j
    k - l - m - n - o
    p - q - r - s - t
    u - v - w - x - y 
    z
    ...
  
  or
    a - b - c - d
    e - f - g - h
    ...
  
  Implement a function/class that, given a word as input and grid width, returns the shortest input that the user
  would have to input to search for that word.
  
  7 % 3 = 2
  8 % 5 = 3
  8 % 10 =
  
  An example:
    doTheThing("hello", 5) would return the following: →→↓ SELECT ↑→→ SELECT ←←←↓↓ SELECT SELECT →→→ SELECT ENTER
  a: x: 0, y: 0
  h: x: 2, y: -1
  We can assume the following:
    * Capitalization doesn't matter
    * The keypad contains the letters a-z and nothing else
    * You can use any symbol or word to denote SELECT/ENTER.

['A', 'B, 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
*/