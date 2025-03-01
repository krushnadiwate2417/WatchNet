import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import lang from "../utils/langConst";
import openai from "../utils/openAi";
import model from "../utils/genAi";
import SearchList from "./SearchList";
import Loader from "./Loader";

const GptSearchBar = ()=>{

    const selecedLanguage = useSelector(store=>store.lang.selectedLang);
    const search = useRef(null);
    const [aiSearch,setAiSearch] = useState(null);
    const [loaderState,setLoaderState] = useState(false)


    // const handleSearch =async ()=>{

    //     const gptQuery = `Act as Movie Recomendation System and answer accordingly\n${search.current.value}\nGive respone comma seperated and only 5 movies`;
    //     console.log(gptQuery)
    //     const gptResult =await openai.chat.completions.create({
    //         model : "gpt-3.5-turbo",
    //         messages : [
    //             {"role" : "user", "content" : gptQuery}
    //         ]
    //     })

    //     console.log(gptResult);
    // }


    const handleSearch = async ()=>{
        setLoaderState(true);
        const prompt = `Act as Movie Recomendation System and answer accordingly\n${search.current.value}\nGive respone Comma seperated and only 6 movies. Don't answer anything else, just give movies or series`;
        const result = await model.generateContent(prompt);
        if(result) setLoaderState(false);
        console.log(result.response.text());
        const arr = result.response.text().split(",");
        setAiSearch(arr);
        console.log(arr);
    }

    return (
        <>  
            {loaderState && <Loader/>}
            <div className="form-main-div">
               <div>
               <form onSubmit={(e)=>{e.preventDefault()}}>
                    <input ref={search} type="text" placeholder={lang[selecedLanguage].placeHolder}/>
                    <button onClick={handleSearch} >{lang[selecedLanguage].search}</button>
                </form>
               </div>
               <div className="searchDivGPT">
                    
                    {
                    aiSearch && aiSearch.map((value,index)=>{
                        return <div><SearchList movie={value}/></div>
                    })
                    }

            </div>
            </div>
        </>
    )
}

export default GptSearchBar;