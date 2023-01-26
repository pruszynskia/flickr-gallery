import { imageUrl } from "../../apis/imageUrl";

test("imageUrl should return correct url", () => {
  const value = { server: "123", id: "456", secret: "789" };
  const result = imageUrl(value);

  expect(result).toBe("https://live.staticflickr.com/123/456_789.jpg");
});
