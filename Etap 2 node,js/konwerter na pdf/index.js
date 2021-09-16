const fs = require("fs");
const imgToPDF = require("image-to-pdf");

fs.readdir("./zdjecia", ((err, data) => {
  const filesNumbers = data.map((e) => e.split("_")[1].split(".")[0]);
  const sortedFilesNames = filesNumbers.sort((a, b) => a - b);
  console.log(sortedFilesNames);
  const directories = sortedFilesNames.map((entry) => `./zdjecia/Screenshot_${entry}.png`);
  console.log(directories);
  imgToPDF(directories, "HD")
    .pipe(fs.createWriteStream("./data-out/output.pdf"));
}));