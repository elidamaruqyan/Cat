import './App.css';
import {useEffect, useState} from "react";
import {getAllCategories, getAllCats} from "./helperFunctions/getDataService";
import AllCats from "./components/allCats/allCats";

/* Styled Component */
import {StyledMainContent} from "./components/styledComponent/card/card.styled";
import Sidebar from "./components/sidebar/sidebar";

function App() {
    const [allCats, setAllCats] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllCats(setAllCats,
            setLoading,
            setFilteredCategories
        );
        getAllCategories(setAllCategories);
    }, [])

    const handleCategories = (e) => {
        setFilteredCategories(allCats.filter(el => el.category === e.target.name));
    }

    return (
        <StyledMainContent>
            <Sidebar
                allCats={allCats}
                allCategories={allCategories}
                setFilteredCategories={setFilteredCategories}
                handleCategories={handleCategories}
            />
            {loading ? '...Loading' : <AllCats allCats={filteredCategories}/>}
        </StyledMainContent>
    );
}

export default App;
