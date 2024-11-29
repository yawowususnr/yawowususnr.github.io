import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our facebook page"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our twiiter page"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com/mansapavilion?igsh=dTU5emRkcXg4MHN1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our instagram page"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-lg">
          &copy; 2024 Mansa Pavallion. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
