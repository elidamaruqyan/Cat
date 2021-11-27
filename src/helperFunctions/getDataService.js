import axios from "axios";
import Config from "../config";

export const getAllCats = (setAllCats, setLoading, setFilteredCategories) => {
    axios(Config.catWithCategories)
        .then(response => {
            setLoading(true);
            setAllCats(response.data);
            setFilteredCategories(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error)
        })
}

export const getAllCategories = (setAllCategories) => {
    axios(Config.categories)
        .then(response => {
            setAllCategories(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}
