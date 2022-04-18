import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const movieApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getAll: builder.query<Movie[], void>({
      query: () => `movies`,
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
      query(todo) {
        return {
          url: `movies/${todo.id}`,
          method: "PUT",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Movies", id: "LIST" }],
    }),
    deleteMovie: builder.mutation<Movie, Movie>({
      query(todo) {
        return {
          url: `movies/${todo.id}`,
          method: "DELETE",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Movies", id: "LIST" }],
    }),
  }),
});

