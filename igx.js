const downloadInstagramVideo = require("./index");

const main = async () => {
  const url = "https://www.instagram.com/reel/CuCevAyIhMG/?igshid=MmU2YjMzNjRlOQ==";
  
  try {
    const videoLink = await downloadInstagramVideo(url);
    
    if (videoLink) {
      console.log("Download link:", videoLink);
    } else {
      console.log("Video link not found.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

main();


