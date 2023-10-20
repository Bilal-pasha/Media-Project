import Testinomials from "@components/Testimonials/Testimonials.astro";
import HTML from "@layouts/HTML/HTML.astro";
import Home from "@pages/Home/index.astro";
import FormContact from "@components/FormContact";
import FreeConsultation from "@components/FreeConsultation.astro";
import HomeHeading from "@layouts/MDX/Home/home.md";
import Movie from "@components/Movie/Movie.astro";
import SpeakingEngagement from "@components/SpeakingEngagement.astro";
import BackGroundImage from "@components/BackGroundImage.astro";
import HeadingText from "@layouts/MDX/About/About.md";
import MarkText from "@layouts/MDX/About/MarkText.md";
import TeamSupport from "@layouts/MDX/About/TeamSupport.md";
import { Image } from "astro:assets";
import CorporateText from "@layouts/MDX/VideoProduction/CorporateText.md";
import LegalVideoText from "@layouts/MDX/VideoProduction/LegaVideoText.md";
import ServicesBoxes from "@components/ServicesBoxes.astro";
import YoutubeVideo from "@components/YoutubeVideo.astro";
import NewsChannelLogos from "@components/NewsChannelLogos.astro";
import LeadersSection from "@components/LeadersSection.astro";
import JournalistSection from "@components/JournalistSection.astro";
import Heading from "@components/Heading.astro";
import CorporateVideosSection from "@components/CorporateVideosSection.astro";
import LegalVideoSection from "@components/LegalVideosSection.astro";
import DefaultLayout from "@layouts/defaultLayout/defaultLayout.astro";
import Footer from "@components/Footer.astro";
import Navbar from "@components/CustomNavbar/CustomNavbar.astro";
import Accordian from "@components/CustomNavbar/Accordian/Accordian.astro";
import Icon from "@components/CustomNavbar/Hamburger.jsx";
import { app } from "../scripts/Client";

export {
  Footer,
  Navbar,
  Icon,
  DefaultLayout,
  Testinomials,
  HTML,
  Home,
  FormContact,
  FreeConsultation,
  HomeHeading,
  Movie,
  SpeakingEngagement,
  BackGroundImage,
  HeadingText,
  MarkText,
  TeamSupport,
  Image,
  CorporateText,
  LegalVideoText,
  ServicesBoxes,
  YoutubeVideo,
  NewsChannelLogos,
  LeadersSection,
  JournalistSection,
  Heading,
  CorporateVideosSection,
  LegalVideoSection,
  Accordian,
  app,
};
