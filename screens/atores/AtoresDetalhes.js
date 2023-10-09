import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Text } from 'react-native-paper'

const AtoresDetalhes = ({ navigation, route }) => {

    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/tv/${id}`).then(resultado => {
            setSerie(resultado.data)
        })

        apiFilmes.get(`/tv/${id}/credits`).then(resultado => {
            setAtores(resultado.data.cast)
        })

    }, [])

    return(
        <>
        <Text>oi</Text>
        </>
    )}

    export default AtoresDetalhes 