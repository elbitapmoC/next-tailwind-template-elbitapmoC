import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-center flex mb-8 justify-center">
      {/* Thanks for looking around the code.
      You can't have a complete web app... Unless it has a footer.
      This was a necessary step. :)
      */}
      <a
        href="https://www.sojourn.llc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          {/* Essentially, Image does the heavy lifting of optimizing images for us.*/}
          <Image
            className="w-4 h-4 m-auto mb-4"
            src="/icons/elbitapmoC.svg"
            alt="Logo, Stamping the footer featuring Bazell"
            fill="intrinsic"
            height={55}
            width={55}
          />
          <p>&copy; elbitapmoC | 2022</p>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
