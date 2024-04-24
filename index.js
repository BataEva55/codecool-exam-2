// Task: groupArrayByParity
// Write a function groupArrayByParity(arr) that takes an array of numbers
// and returns an object with two properties:
//
// even: an array of all even numbers from arr.
// odd: an array of all odd numbers from arr.
// If the input is not an array, the function should throw an error with message: "Input must be an array"
export function groupArrayByParity(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (!arr.every((item) => typeof item === "number")) {
    throw new Error("All elements must be numbers");
  }

  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  const returnObject = {
    odd,
    even,
  };

  return returnObject;
}

//Task: averageWordCount
//Write a function averageWordCount(sentences, minLength) that takes an array of strings sentences and an integer minLength.
//The function should return the average number of words (with a length greater than minLength) for each sentence.
//If sentences is empty, the function should return 0.
export function averageWordCount(sentences, minLength) {
  if (!Array.isArray(sentences)) {
    throw new Error("Input sentences must be an array");
  }

  if (sentences.length === 0) {
    return 0;
  }

  let totalWords = 0;
  let validSentencesCount = 0;

  sentences.forEach((sentence) => {
    const words = sentence.split(" ");
    const validWordsCount = words.filter((word) => word.length > minLength).length;
    if (validWordsCount > 0) {
      totalWords += validWordsCount;
      validSentencesCount++;
    }
  });
  const average = totalWords / validSentencesCount;
  if (isNaN(average)) {
    return 0;
  } else {
    return average;
  }
}

// Task: findHighestScore
// Write a function findHighestScore(students, subject)
// that takes an array of objects students and a string subject.
// Each object in the students array contains the name of a student
// and their scores in different subjects. The function should
// return the name of the student with the highest score in the specified subject.
//
// If no student has a score for the specified subject,
// or if students is empty, the function should return null.
// If the students array contains elements that aren't objects
// or if subject isn't a string, the function should throw an error.
//
// Examples:
// findHighestScore([ { name: 'Alice', math: 90, science: 85 }, { name: 'Bob', math: 95, science: 80 } ], 'math') should return 'Bob'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'math') should return 'Alice'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'history') should return null.
export function findHighestScore(students, subject) {
  if (!Array.isArray(students)) {
    throw new Error("Input students must be an array");
  }

  if (typeof subject !== "string") {
    throw new Error("Input subject must be a string");
  }
  if (students.length === 0) {
    return null;
  }

  let highestScore = -Infinity;
  let studentWithHighestScore = null;

  students.forEach((student) => {
    if (typeof student === "object" && student !== null) {
      if (subject in student) {
        if (student[subject] > highestScore) {
          highestScore = student[subject];
          studentWithHighestScore = student.name;
        }
      }
    } else {
      throw new Error("Invalid student object found in students array");
    }
  });

  return studentWithHighestScore;
}
