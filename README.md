# Task: groupArrayByParity

Write a function groupArrayByParity(arr) that takes an array of numbers
and returns an object with two properties:

even: an array of all even numbers from arr.
odd: an array of all odd numbers from arr.
If the input is not an array, the function should throw an error with message: "Input must be an array"

# Task: averageWordCount

Write a function averageWordCount(sentences, minLength) that takes an array of strings sentences and an integer minLength.
The function should return the average number of words (with a length greater than minLength) for each sentence.
If sentences is empty, the function should return 0.

# Task: findHighestScore
Write a function findHighestScore(students, subject)
that takes an array of objects students and a string subject.
Each object in the students array contains the name of a student
and their scores in different subjects. The function should
return the name of the student with the highest score in the specified subject.

If no student has a score for the specified subject,
or if students is empty, the function should return null.
If the students array contains elements that aren't objects
or if subject isn't a string, the function should throw an error.

Examples:

```
findHighestScore([ { name: 'Alice', math: 90, science: 85 }, { name: 'Bob', math: 95, science: 80 } ], 'math') should return 'Bob'.
findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'math') should return 'Alice'.
findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'history') should return null.
```

# Sitebuild

#### Title: "Clean Code Principles"

#### Components:

1. **Section (`<section>`)**

   - Represents a distinct section of a document, typically with a specific thematic content.
   - Contains the overall content for the "Clean Code Principles" section.

2. **Flat-list Container (`<div class="flat-list">`)**

   - Acts as a container for the entire section, allowing for styling and layout control.
   - This div encapsulates the title and a list of cards that contain principles and descriptions.

3. **Title Block (`<div class="flat-list__title">`)**

   - Contains the main heading for the section.
   - Includes an `<h1>` tag for the "Clean Code Principles" heading.
   - The use of `<h1>` suggests this is a top-level heading, indicating the section's primary focus.

4. **Card Component (`<div class="card">`)**

   - Represents a single principle with a title and detailed description.
   - Designed to be reusable for each "Clean Code Principle".

5. **Card Title (`<div class="card__title">`)**

   - Contains the title of the specific clean code principle.
   - Utilizes descriptive names to indicate the purpose of the component.
   - The title could use a distinct font style, size, or color to differentiate it from the body text.

6. **Card Body (`<div class="card__body">`)**
   - Holds the detailed description of the clean code principle.
   - Typically contains multiple sentences or a paragraph explaining the principle.
   - This area could benefit from spacing, padding, and text styling to enhance readability.

### CSS Specification

#### General Rules

1. **Universal Selector (`*`)**

   - Applies `border-box` to all elements to ensure that padding and border are included within the element's width and height.
   - Helps maintain consistent layout dimensions, reducing overflow issues.

2. **Root Variables**
   - Defines CSS variables for consistent colors across the document.
   - `--bg`: Background color for the main section.
   - `--card-bg`: Background color for cards and titles.
   - `--list-bg`: Background color for the flat-list container.
   - Using variables makes it easier to change colors globally without modifying individual rules.

#### Global Styles

1. **Body (`body`)**

   - Uses **"Montserrat"** as the primary font with sans-serif as fallback.
   - Sets `font-optical-sizing: auto` for better font rendering.
   - Sets the background color using the `--bg` variable.
   - Text color is white for contrast against the dark background.
   - Padding and margin are set to 0 for a clean slate.
   - Uses flex layout to center the content horizontally.

2. **Heading (`h1`)**
   - Ensures consistent styling with zero margin.
   - Helps maintain alignment with other elements.

#### Flat-List Container

1. **Flat-List (`.flat-list`)**

   - Defines a fixed width of 50rem for a uniform layout.
   - Uses `background-color: var(--list-bg)` to set the list's background.
   - Employs `flex-direction: column` for vertical stacking of elements.
   - Utilizes `gap: 1rem` for spacing between elements.
   - Has a `margin-top: 1rem` to separate it from surrounding content.

2. **Flat-List Title (`.flat-list__title`)**

   - Adds padding (1rem) for spacing around the title.
   - Sets the background color to `var(--card-bg)` and text color to black for contrast.
   - This block represents the section's main title and should stand out.

3. **Card (`.card`)**

   - Margins on the left and right (1rem) to add spacing from the container's edges.
   - Background color is `var(--card-bg)`, with black text for contrast.
   - Border radius of 0.5rem for rounded corners.
   - Box-shadow provides depth. Choose a shadow you want.

4. **Card Title (`.card__title`)**

   - Borders at the top corners to match the card's border-radius.
   - Uses `background-color: var(--bg)` for contrast with the card's main color.
   - Text color is white to stand out.
   - Padding (1rem) for proper spacing.
   - `font-weight: bold` to emphasize the card's title.

5. **Card Body (`.card__body`)**
   - Padding (1rem) for comfortable spacing around the content.
   - `font-weight: 300` for a lighter text appearance.
   - This area is for detailed descriptions.

#### Responsive Design

1. **Media Query (max-width: 768px)**

   - Adjusts the `flat-list` width to 90% to accommodate smaller screens.
   - Removes the top margin to keep content compact on smaller devices.

2. **Media Query (max-width: 425px)**
   - Sets the `flat-list` width to 100% for even smaller screens.
   - Adjusts `flat-list__title` font size to 0.8rem for better readability.
   - Centers the text for improved alignment on mobile devices.

![alt](/sitebuild/laptop.png)

![alt](/sitebuild/tablet.png)

![alt](/sitebuild//mobile.png)