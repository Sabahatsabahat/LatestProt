"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const navBar_1 = __importDefault(require("./components/navBar"));
const footer_1 = __importDefault(require("./components/footer"));
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "portFolio",
    description: "my PortFolio",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.className}>
        <navBar_1.default />
        {children}
        <footer_1.default />
        </body>
    </html>);
}
exports.default = RootLayout;
