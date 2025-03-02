import { useEffect,useState } from "react";
import { options,imgURL } from "../utils/constants";


const SearchList = ({movie})=>{
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const [searchObj,setSearchObj] = useState();

    useEffect(()=>{
        callingSearch();
    },[movie])

    const callingSearch = async()=>{
        try {
            const res = await fetch(searchUrl,options);
            const jsonRes = await res.json();
            setSearchObj(jsonRes.results[0]);
        } catch (error) {
            return
        }
    }

    return (
        <>
            {searchObj && <div className="searchResultsMainDiv">
                <div>
                    <img src={imgURL+searchObj.poster_path} height={150}/>
                </div>
                <div>
                    <div>
                        <h1>{searchObj.title}</h1>
                    </div>
                    <div className="paraDiv">
                        <p>{searchObj.overview}</p>
                    </div>
                </div>
            </div>}
        </>
    ) 
}

export default SearchList;