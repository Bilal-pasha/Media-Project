import {
  VideoProduction,
  MediaTraining,
  Consulting,
  MarkinDetroit,
  MarkinAirforce,
  MarkinSheriff,
  MarkTeaching1,
  MarkTeaching2,
  MarkTeaching3,
  Logo1,
  Logo2,
  Logo3,
  University,
  CorporateVideos1,
  CorporateVideos2,
  CorporateVideos3,
  MarkWithGates,
} from "@utils/images";
import JsonText from "../layouts/Heading/heading.json";
const imagestyle =
  " w-full object-cover lg:h-[180px] md:h-[200px] md:w-full sm:h-[200px] sm:w-full";

export const Boxes = [
  {
    ImageSource: Consulting,
    imagestyle: { imagestyle },
    text: JsonText.ServicesBoxesText.box1,
    link: "/Strategic_consulting",
  },
  {
    ImageSource: MediaTraining,
    imagestyle: { imagestyle },
    text: JsonText.ServicesBoxesText.box2,
    link: "/Media_training",
  },
  {
    ImageSource: VideoProduction,
    imagestyle: { imagestyle },
    text: JsonText.ServicesBoxesText.box3,
    link: "/Video_production",
  },
];

export const LeadersImagesData = [
  {
    ImageSource: MarkWithGates,
  },
  {
    ImageSource: MarkinAirforce,
  },
  {
    ImageSource: MarkinSheriff,
  },
];

export const JournalistImageData = [
  {
    ImageSource: MarkTeaching1,
  },
  {
    ImageSource: MarkTeaching2,
  },
  {
    ImageSource: MarkTeaching3,
  },
];
export const JournalistLogoData = [
  {
    ImageSource: Logo1,
    websiteLink: "https://www.ire.org/",
  },
  {
    ImageSource: Logo2,
    websiteLink: "https://www.icfj.org/",
  },
  {
    ImageSource: Logo3,
    websiteLink: "https://english.vtv.vn/",
  },
  {
    ImageSource: University,
    websiteLink: "https://www.northwestern.edu/",
  },
];
export const CorporateVideosImages = [
  {
    ImageSource: CorporateVideos1,
  },
  {
    ImageSource: CorporateVideos2,
  },
];
