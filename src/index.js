import "./style.css";
import AppLogic from "./appLogic/AppLogic";
import domLogic from "./domLogic/domLogic";
import { fetchFromLocalStorage } from "./appLogic/fetchLocalStorage";

fetchFromLocalStorage(AppLogic);
domLogic(AppLogic);
