"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const Navbar = () => (<div className="bg-color white z-50 sticky top-0">
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <image_1.default src={require("../../../public/assest/car.jpg")} alt="Sabahat" width={100} height={100} className="w-[40]"/>
          <span className="ml-3 text-xl">FRONT END-DEV</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-blue-600">
            HOME
          </a>
          <a href="#About" className="mr-5 hover:text-blue-600">
            About
          </a>
          <a href="#Skill" className="mr-5 hover:text-blue-600">
            Skills
          </a>
          <a href={"#Project"} className="mr-5 hover:text-blue-600">
            Projects
          </a>
          <a href={"#Contact"} className="mr-5 hover:text-blue-600">
            Contact
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Download CV
        </button>
      </div>
    </header>
  </div>);
exports.default = Navbar;
