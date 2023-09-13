//revalidate every request (plz work)
export const revalidate = 0;
//comment

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { buildFileUrl } from "@sanity/asset-utils";
const sanityClient = createClient({
  projectId: "g5qx3m4j",
  dataset: "production",
  apiVersion: "2023-05-12",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const getAboutSection = async () => {
  const posts = await sanityClient.fetch(`*[_type == "about"]`);
  return posts;
};

export const getFrontendSkillPictures = async () => {
  let picsArray = [];
  const pics = await sanityClient.fetch(`*[_type == "frontend_skills"]`);

  const images = pics[0].images;
  for (let i = 0; i < images.length; i++) {
    picsArray.push(builder.image(images[i].asset._ref).url());
  }
  return picsArray;
};

export const getBackendSkillPictures = async () => {
  let picsArray = [];
  const pics = await sanityClient.fetch(`*[_type == "backend_skills"]`);

  const images = pics[0].images;
  for (let i = 0; i < images.length; i++) {
    picsArray.push(builder.image(images[i].asset._ref).url());
  }
  return picsArray;
};
export const getMobileSkillPictures = async () => {
  let picsArray = [];
  const pics = await sanityClient.fetch(`*[_type == "mobile_skills"]`);

  const images = pics[0].images;
  for (let i = 0; i < images.length; i++) {
    picsArray.push(builder.image(images[i].asset._ref).url());
  }
  return picsArray;
};

export const getResume = async (): Promise<string> => {
  const resume = await sanityClient.fetch(`*[_type == "resume"]`);
  const link = resume[0].resume.asset.url;
  return Promise.resolve(link);
};
