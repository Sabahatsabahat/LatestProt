"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = __importDefault(require("./components/hero"));
const contact_1 = __importDefault(require("./components/contact"));
const Project_1 = __importDefault(require("./components/Project"));
const About_1 = __importDefault(require("./components/About"));
const skill_1 = __importDefault(require("./components/skill"));
function Home() {
    return (<div>
    <hero_1.default />
    <About_1.default />
    <skill_1.default />
    <Project_1.default />
    <contact_1.default />
  
    </div>);
}
exports.default = Home;
