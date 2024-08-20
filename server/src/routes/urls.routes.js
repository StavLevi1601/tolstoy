import express from "express";
import ogs from "open-graph-scraper";

const router = express.Router();

router.post("/", async (req, res) => {
  const { url1, url2, url3 } = req.body;
  const urls = [url1, url2, url3];

  if (!Array.isArray(urls) || urls.length === 0) {
    return res
      .status(400)
      .json({ error: "Invalid input, must be an array of URLs." });
  }

  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        const options = { url };
        const response = await ogs(options);

        if (response.result.success) {
          const result = response.result;
          let images = [];

          if (Array.isArray(result.ogImage)) {
            images = result.ogImage.map((imgObj) => imgObj.url || "");
          } else if (result.ogImage) {
            images.push(result.ogImage);
          }

          return {
            title: result.ogTitle || "",
            description: result.ogDescription || "",
            image: images,
            url,
          };
        } else {
          return {
            title: "",
            description: "",
            image: [],
            url,
            error: response.error || "Unknown error",
          };
        }
      } catch (e) {
        return {
          title: "",
          description: "",
          image: [],
          url,
          error: e.message,
        };
      }
    })
  );

  console.log(JSON.stringify(results, null, 2));

  return res.json(results);
});

export default router;
