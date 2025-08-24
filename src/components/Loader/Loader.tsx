import { FadeLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
    return <div className={css.fade}>{<FadeLoader height={20} color="#228de4ff"/>}</div>
}