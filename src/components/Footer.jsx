// import react from '@astrojs/react'
import { AiOutlineCopyrightCircle } from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";

export default function Footer() {
  return (
    <footer className="bg-whitr">
      <div className="flex items-center justify-center">
        <h2 className="flex items-center space-x-4 lg:text-base sm:text-xs sm:font-semibold">
          {" "}
          <AiOutlineCopyrightCircle />
          2023 The Travel Lede LLC dba Media Advisory Experts LLC
        </h2>
      </div>
    </footer>
  );
}
