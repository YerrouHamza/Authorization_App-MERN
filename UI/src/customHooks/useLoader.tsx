import { useContext } from "react";
import LoaderContext from "../context/loaderContext";

const useLoader = () => {
    const context = useContext(LoaderContext);
    if(!context) {
        throw new Error('"Error:" loader context error while get the loader context');
    }
    return context
}
export default useLoader;