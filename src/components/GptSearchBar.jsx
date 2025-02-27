import { useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../utils/langConst";
import openai from "../utils/openAi";



const GptSearchBar = ()=>{

    const selecedLanguage = useSelector(store=>store.lang.selectedLang);
    const search = useRef(null);

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

    return (
        <>
            <div className="form-main-div">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <input ref={search} type="text" placeholder={lang[selecedLanguage].placeHolder}/>
                    <button >{lang[selecedLanguage].search}</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar;