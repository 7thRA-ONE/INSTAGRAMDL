# InstagramDL

![npm](https://img.shields.io/npm/v/@7thraone/instagramdl)
![GitHub](https://img.shields.io/github/license/7thRA-ONE/instagramdl)

A utility for downloading videos from Instagram using the saveig.app API and Cheerio.

## Installation

```bash
npm install @7thraone/instagramdl
```

## Usage

```javascript
const instagramDL = require('@7thraone/instagramdl');

const main = async () => {
  const url = "https://www.instagram.com/reel/CuCevAyIhMG/?igshid=MmU2YjMzNjRlOQ==";
  
  try {
    const videoLink = await instagramDL(url);
    
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
```

## Example HTML Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Instagram Video Downloader</title>
</head>
<body>
  <button id="downloadButton">Download Instagram Video</button>
  <script>
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", async () => {
      const url = "https://www.instagram.com/reel/CuCevAyIhMG/?igshid=MmU2YjMzNjRlOQ==";
      
      try {
        const response = await fetch(`/api/download?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.success) {
          const videoLink = data.downloadLink;
          window.open(videoLink, "_blank");
        } else {
          alert("Video link not found.");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    });
  </script>
</body>
</html>
```

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

---

Feel free to contribute, open issues, and submit pull requests. If you find any bugs or have suggestions, please [create an issue](https://github.com/7thRA-ONE/instagramdl/issues).

For more information and updates, check out the [GitHub repository](https://github.com/7thRA-ONE/instagramdl) and [npm package](https://www.npmjs.com/package/@7thraone/instagramdl).
```

Please replace placeholders like `yourusername` with your actual GitHub username and customize the content to match your package's specifics.
