const data = [
  {
    title: "Meaningful Names",
    description: `Variables, functions, and classes should have names that describe their purpose. 
      Avoid single-letter variables or unclear names. 
      Use intention-revealing names to help readers understand the code without extra explanations. 
      Consistency in naming conventions is also crucial. 
      This helps with maintainability and makes it easier for others to work with the code. 
      The right name should express what a component does or represents, reducing the need for comments.`,
  },
  {
    title: "Functions Should Be Small",
    description: `Functions should be concise and focused on a single responsibility. 
      Aim for functions that perform one task and do it well. 
      This approach enhances readability and reduces the chance of bugs. 
      Smaller functions are easier to test, debug, and maintain. 
      Long functions often indicate that a codebase needs refactoring. 
      Keeping functions small also encourages reusability and modularity.`,
  },
  {
    title: "Comments Are a Last Resort",
    description: `Comments should only be used to explain why something is done a certain way, not what is being done. 
      Clean code often has fewer comments because the code itself is clear and expressive. 
      Overuse of comments may indicate that the code is not self-explanatory. 
      Focus on writing code that doesn't need comments. 
      If comments are necessary, ensure they're up-to-date and relevant. 
      Avoid misleading or outdated comments, which can confuse readers.`,
  },
  {
    title: "DRY (Don’t Repeat Yourself)",
    description: `DRY emphasizes avoiding code duplication by encapsulating reusable code into functions, classes, or modules. 
      Repeating the same logic in multiple places is error-prone and leads to maintenance difficulties. 
      Instead, abstract common functionality into reusable components. 
      This approach reduces redundancy and improves code maintainability. 
      When you notice repetition, it's a signal to refactor the code. 
      DRY also helps in keeping the codebase organized and easier to understand.`,
  },
  {
    title: "Single Responsibility Principle",
    description: `Every class or module should have only one reason to change. 
      This principle helps in designing maintainable and scalable systems. 
      When a class has multiple responsibilities, it becomes more complex and harder to manage. 
      By following this principle, you can make your codebase more modular and testable. 
      It also encourages clear separation of concerns, making code easier to understand and refactor. 
      Violating this principle often leads to fragile codebases with unexpected side effects.`,
  },
  {
    title: "Code Should Be Simple and Direct",
    description: `Aim to write code that is straightforward and avoids unnecessary complexity. 
      Avoid clever or overly complex solutions, as they can be hard to understand and maintain. 
      Code simplicity reduces the risk of bugs and eases future changes. 
      Favor clarity over brevity; simple code is easier to debug and refactor. 
      Use descriptive variable and function names to improve readability. 
      Simple code encourages best practices and clean design, promoting code longevity.`,
  },
];

export default data;
