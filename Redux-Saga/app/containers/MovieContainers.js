import { Content } from "native-base";
import MovieComponent from "../components/MovieComponent";
import {addMovieAction,fetchFaileddAction,fetchMovieAction,fetchSucceededAction} from "../actions/Index"
const mapStateToProps=(state)=>
{
    return{
        movie:state.movieReducers     
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchMovie:()=>{
            dispatch(fetchMovieAction())
            console.log("Lỗi tại  container")
        },
        onFetchMovie:(newMovie)=>{
            dispatch(addMovieAction(newMovie))
        }
    };
}
const MovieContainer=Content(mapStateToProps,mapDispatchToProps)(MovieComponent)
export default MovieContainer;