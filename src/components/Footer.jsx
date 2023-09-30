// import react from '@astrojs/react'
import { AiOutlineCopyrightCircle } from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="flex items-center justify-center">
        <h2 className="flex items-center space-x-6 lg:text-base sm:text-xs lg:font-medium sm:font-semibold">
          {" "}
          <AiOutlineCopyrightCircle className="mx-1" />
          2023 Media Advisory Experts
        </h2>
      </div>
    </footer>
  );
}
