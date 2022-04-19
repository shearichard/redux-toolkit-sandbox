import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
    id: number;
    film: string;
    year: string;
    audience_score_percent: string;
    genre: string;
    lead_studio: string;
    profitability: string;
    rotten_tomatoes_percent: string;
    worldwide_gross_usd: string;
}
export interface MoviePayload {
    movies: Movie[];
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getAll: builder.query<MoviePayload, void>({
      query: () => `movies/`,
      providesTags: [{ type: "Movies", id: "LIST" }],
    }),
    addMovie: builder.mutation<string, string>({
      query(text) {
        return {
          url: `movies`,
          method: "POST",
          body: {
            text,
          },
        };
      },
      invalidatesTags: [{ type: "Movies", id: "LIST" }],
    }),
    updateMovie: builder.mutation<Movie, Movie>({
      query(movie) {
        return {
          url: `movies/${movie.id}`,
          method: "PUT",
          body: movie,
        };
      },
      invalidatesTags: [{ type: "Movies", id: "LIST" }],
    }),
    deleteMovie: builder.mutation<Movie, Movie>({
      query(movie) {
        return {
          url: `movies/${movie.id}`,
          method: "DELETE",
          body: movie,
        };
      },
      invalidatesTags: [{ type: "Movies", id: "LIST" }],
    }),
  }),
});

