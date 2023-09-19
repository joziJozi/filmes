import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { View } from 'react-native'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {

        const id = route.params.id

        apiFilmes.get(`/movie/${id}`).then(resultado => {
            setFilme(resultado.data)
        })
        apiFilmes.get(`/movie/${id}/credits`).then(resultado => {
            setAtores(resultado.data.cast)
            console.log
        })
    }, [])

    return (
        <>
            <View style={{padding:15}}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
            <Card.Content style={{marginBottom:15}}> 
                <Text variant="titleLarge">{filme.title}</Text>
                <Text variant="bodyMedium">{filme.overview}</Text>
            </Card.Content>
            <Card style={{marginBottom:15}}>
                <Card.Content>
                    <Text variant="titleLarge">Orçamento:{filme.budget}</Text>
                    <Text variant="titleLarge">Voto:{filme.vote_average}</Text>
                    <Text variant="titleLarge">Duração:{filme.runtine}</Text>
                    <Text variant="titleLarge">Lançamento:{filme.release_date}</Text>
                </Card.Content>
            </Card>

            <Text variant='titleLarge'>Atores</Text>
             {atores.map(item => (
                <Card mode='outlined' key={item.id}>
                <Card.Title>
                title={item.charater}
                subtitle={item.name}
                </Card.Title>
                </Card>
             )

             )}
             </View>
        </>
    )
}

export default FilmesDetalhes