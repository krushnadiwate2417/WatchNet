import GptMovieSugesstion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";


const Gpt = ()=>{
    return (
        <>  
            <div>
                <Header/>
            </div>
            <GptSearchBar/>
            <GptMovieSugesstion/>
        </>
    )
}

export default Gpt;