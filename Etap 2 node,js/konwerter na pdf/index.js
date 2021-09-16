const fs = require("fs");
const imgToPDF = require("image-to-pdf");

fs.readdir("./zdjecia", ((err, data) => {
  const directories = data.map((entry) => `./zdjecia/${entry}`);
  console.log(directories);
  imgToPDF(directories, "A4")
    .pipe(fs.createWriteStream("./data-out/output.pdf"));
}));