# InstagramDL

![npm](https://img.shields.io/npm/v/@7thraone/instagramdl?color=%231e81b0&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/7thRA-ONE/INSTAGRAMDL?color=%231e81b0&style=for-the-badge)

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

## Example Ladybug/Atlas WA Bot Usage

```javascript

const instagramDL = require('@7thraone/instagramdl');

  case "igdl":
  case "instadl":
    if (!text) {
      await doReact("❌");
      return m.reply(
        `Please provide a valid Instagram Reel/Video link!\n\nExample: *${prefix}igdl https://www.instagram.com/p/CP7Y4Y8J8ZU/*`
      );
    }
    if (!text.includes("instagram")) {
      await doReact("❌");
      return m.reply(
        `Please provide a valid Instagram Reel/Video link!\n\nExample: *${prefix}igdl https://www.instagram.com/p/CP7Y4Y8J8ZU/*`
      );
    }
    await doReact("📥");
    await Atlas.sendMessage(
      m.from,
      { text: "*Please wait, I'm downloading your video...*" },
      { quoted: m }
    );

    try {
      const videoLink = await  instagramDL(text); // Use your 'igdl' package here
      if (videoLink) {
        Atlas.sendMessage(
          m.from,
          {
            video: { url: videoLink },
            caption: `Downloaded by: *${botName}* \n\n_*🧩 Url:*_ https://github.com/yourusername/igdl \n`,
          },
          { quoted: m }
        );
      } else {
        await doReact("❌");
        await m.reply(
          `Video access denied! It's private or has some other restrictions.`
        );
      }
    } catch (err) {
      await doReact("❌");
      await m.reply(
        `An error occurred while downloading the video. Please try again later.`
      );
    }
    break;

 
}
```

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

---

Feel free to contribute, open issues, and submit pull requests. If you find any bugs or have suggestions, please [create an issue](https://github.com/7thRA-ONE/instagramdl/issues).

For more information and updates, check out the [GitHub repository](https://github.com/7thRA-ONE/instagramdl) and [npm package](https://www.npmjs.com/package/@7thraone/instagramdl).
 

 
