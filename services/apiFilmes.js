import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQyYzQwZDU2ZmRhNjg1NTdlZDA3NzA3ZTUxNmNhZSIsInN1YiI6IjY0MzQ5MTBjYWY0MzI0MDEwMzhlNTJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldLbcm5eDp2AZrbh5wAiIWrYHRLJe9jnaMsz_X5PY3Y '
    }
})

export default apiFilmes