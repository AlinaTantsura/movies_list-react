import { useNavigate, useSearchParams } from "react-router-dom";
import { MovieList } from "../Components/MovieList/MovieList";
import { Button } from "../Components/Button.styled";
import { FormStyled } from "../Components/Form/Form.styled";
import { Notify } from "notiflix";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchWord = form.elements.search.value;
        if (searchWord) setSearchParams({ query: searchWord })
        else {
            Notify.warning("Search field mustn't be empty");
            navigate('/search')
            return
        };
        form.reset();
    }
 

    return (
        <>
            <h1>Here you can search movies</h1>
            <FormStyled onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder="Enter search word" />
                <Button type='submit'>Search</Button>
            </FormStyled>
            {searchParams.get('query') && (
                <>
                    <MovieList searchWord={searchParams.get('query')} />
                </>)}
        </>
        
    )
};

export default SearchPage;