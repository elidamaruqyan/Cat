/* Styled Components */
import StyledSidebarWrapper, {StyledSidebarWrapperItem} from "./sidebar.styled";
import {StyledButtonForSidebar} from "../styledComponent/button/button.styled";

function Sidebar({
                     handleCategories,
                     allCategories,
                     allCats,
                     setFilteredCategories
                 }) {
    handleCategories = (e) => {
        setFilteredCategories(allCats.map((el) => el.categories.filter((el) => el.name === e.target.name)))
    }

    return (
        <aside>
            <nav>
                <StyledSidebarWrapper>
                    {allCategories.map((el) => (
                        <StyledSidebarWrapperItem key={el.id}>
                            <StyledButtonForSidebar
                                onClick={handleCategories}
                                name={el.name}
                            > {el.name}</StyledButtonForSidebar>
                        </StyledSidebarWrapperItem>
                    ))}
                </StyledSidebarWrapper>
            </nav>
        </aside>
    )
}

export default Sidebar
