const fileName = 'Banderlipe_RenoAngelo-Resume.pdf';
const fileLocation = `files/${fileName}`;

export const downloadResume = () => {
  let alink = document.createElement("a");
  alink.href = fileLocation;
  alink.download = "resume.pdf";
  alink.click();
}