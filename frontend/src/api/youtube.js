import GOOGLE_API_KEY from "../config/config";
import Axios from "axios";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: GOOGLE_API_KEY,
    type: "video",
  },
});
