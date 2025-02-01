const fs = require("fs");
const readlineSync = require("readline-sync");

function main() {
  while (true) {
    console.log("\nHello user, please pick from one of the below choices:");
    console.log("1. Read file");
    console.log("2. Write content to file");
    console.log("3. Exit app");
    const choice = readlineSync.question("Make your choice: ");
    switch (choice) {
      case "1":
        readFile();
        break;
      case "2":
        writeFile();
        break;
      case "3":
        console.log("Exiting the application.");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

function readFile() {
  const filePath = readlineSync.question("Enter the name of the file: ");
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, { encoding: "utf-8" });
    console.log("\nFile content:");
    console.log(content);
  } else {
    console.log("File does not exist.");
  }
}

function writeFile() {
  const filePath = readlineSync.question(
    "Enter the file name you want to write in: "
  );
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Existing file "${filePath}" has been removed.`);
  }
  const content = readlineSync.question("Enter the content of the file: ");
  fs.writeFileSync(filePath, content, { encoding: "utf-8" });
  console.log(`File "${filePath}" saved successfully.`);
  const readChoice = readlineSync.question(
    "Do you want to read the file? (yes/no): "
  );
  if (readChoice.toLowerCase() === "yes") {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    console.log("\nFile content:");
    console.log(fileContent);
  }
}

main();