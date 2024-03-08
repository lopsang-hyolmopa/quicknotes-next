import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-stone-950">
      <footer className="flex justify-center items-center p-4 lg:px-28 gap-1 text-white">
        &#169; {currentYear} Lopsang Lama 
        <a href="https://github.com/lopsang-hyolmopa" target="_blank">
        <AiFillGithub /> 
        </a>
      </footer>
    </div>
  );
}
