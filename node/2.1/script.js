const fs = require("fs");

const data = "hiiiiiiiiiiiiii";

// createFile("./data/data3.txt", data);

// copyFile("./data/data2.txt", "./data/data2Copy.txt");

// renameFile("./data/data3.txt", "./data/data3AfterRenaming.txt");

getAllFileNames("./");

function renameFile(oldName, newName) {
  fs.rename(oldName, newName, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(" file renamed ");
    }
  });
}

function copyFile(src, dist) {
  fs.copyFile(src, dist, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("data copyed ");
    }
  });
}

function readDataFromFile(path) {
  var contents = fs.readFileSync(path, "utf-8");

  console.log(contents);
}

function createFile(path, data) {
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("data added ");
    }
  });
}

function createFolder() {
  fs.mkdir("./data", (error) => {
    if (error) {
      console.log(error);
    } else console.log("folder added ");
  });
}

function getAllFileNames(path) {
  fs.readdirSync(path).forEach((file) => {
    console.log(file);
  });
}
