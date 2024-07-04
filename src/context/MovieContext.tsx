import { ReactNode, createContext, useContext, useState } from "react";

interface MovieContextType {
    page: number;
    setPage: (page: number) => void;
    searchMovie: string;
    setSearchMovie: (searchMovie: string) => void;
    options: number;
    setOptions: (options: number) => void;
}

const MovieContext = createContext<MovieContextType>({
    page: 1,
    setPage: () => {},
    searchMovie: "",
    setSearchMovie: () => {}, 
    options: 1,
    setOptions: () => {},
});

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState(1);
    const [searchMovie, setSearchMovie] = useState("");
    const [options, setOptions] = useState(1);

    const contextValues: MovieContextType = {
        page,
        setPage,
        searchMovie,
        setSearchMovie,
        options,
        setOptions,
    };

    return (
        <MovieContext.Provider value={contextValues}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = ()=>useContext(MovieContext);