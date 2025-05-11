/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "activeReservation": //added 'activeReservation' Object, I tend to think of objects as existing within larger applications that would have other objects and don't want this data to be applied globally with no other group
  {
  "bookingID": "39257", //added booking ID to group people with their hotel booking location and dates
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",   //missing comma added
  "checkOutDate": "2024-05-20",
  "roomDetails": {
      "type": "Suite",
      "pricePerNight": 200,
      "amenities": ["WiFi", "Breakfast", "Parking"], //moved comma to outside of Parking    
      "guests": 
    [
      {
        "name": "Alice Johnson", //put name in double quotes, it's a key
        "age": 30,
        "email": "alice.johnson@example.com"
      },
      {
        "name": "Bob Smith",
        "age": null, //replaced undefined with null, undefined is not a valid data type for JSON
        "email": "bob.smith@example"
      }
    ]
    //had a comma down here that I removed, not sure if I added it myself, but there aren't commas allowed at the end of a block like this

    }
  }
}
`;
myObj = JSON.parse(invalidBookingJSON);
//this last line creates the javascript object that const invalidbookingJSON started;
//this is a .js file, so I assume this is important to finish things properly

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?                   {
  • Why is it a problem in JSON?      {  See inline comments above ^
  • What did you change to fix it?    {
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

- I compared the existing code with my past projects to find syntax errors
- I used prettier and the matching brackets setting in VS Code to tab through and line up brackets and ensure they all matched
- I used VS Code's redline function to find issues in the syntax and remove or change them
- I used jsonlint.com to find the things I missed once I thought I was done


2️⃣ How did you confirm that your corrected JSON file was valid?

- jsonlint.com confirmed it

3️⃣ Which errors were the most difficult to spot? Why?

- brackets are the hardest for me, I don't know why, but I try to count or match them up and it makes my head spin.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
- syntax highlighting is my friend for sure, also prettier
- I refer to correct examples every time I write JSON as I don't have the syntax memorized yet
- I use jsonlint.com when I feel confident that I'm done and it always finds something
- I really enjoy combing through the logic and ensuring the proper objects are nested where they belong, 
doing this I often catch stray commas and the like. Logic-first instead of syntax-first is my preference.

   (e.g., syntax highlighting, linters, writing JSON by example)
*/
