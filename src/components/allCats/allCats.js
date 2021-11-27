import {pageDetail} from "../../config";

import StyledCardWrapper, {StyledCardWrapperItem} from "../styledComponent/card/card.styled";
import StyledButton from "../styledComponent/button/button.styled";

function AllCats({allCats}) {
    const handleLoadData = () => {
        pageDetail.limit++
    }

    return (
        <>
            <StyledCardWrapper>
                {allCats.map((el) => (
                    <StyledCardWrapperItem key={el.id}>
                        <img src={el.url} alt=""/>
                    </StyledCardWrapperItem>
                ))}
            </StyledCardWrapper>
            <StyledButton onClick={handleLoadData}>Load More</StyledButton>
        </>
    )
}

export default AllCats
