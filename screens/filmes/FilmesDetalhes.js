import React, { useEffect, useState } from 'react'
import { Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Image, View } from 'react-native'

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
            <View style={{ padding: 15 }}>
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
                <Card style={{ marginBottom: 15 }}>
                <Card.Content style={{ marginBottom: 15 }}>
                    <Text variant="titleLarge">{filme.title}</Text>
                    <Text variant="bodyMedium">{filme.overview}</Text>
                </Card.Content>
                </Card>
                <Card style={{ marginBottom: 15 }} mode='outlined'>
                    <Card.Content>
                        <Text variant="bodyMedium">Orçamento:{filme.budget}</Text>
                        <Text variant="bodyMedium">Voto:{filme.vote_average}</Text>
                        <Text variant="bodyMedium">Duração:{filme.runtime} min.</Text>
                        <Text variant="bodyMedium">Lançamento:{filme.release_date}</Text>
                    </Card.Content>
                </Card>

                <Text variant='titleLarge'>Atores</Text>
                {atores.map(item => (
                    <Card mode='outlined' key={item.id} style={{ marginBottom: 15 }}>
                        <Card.Title
                            title={item.character}
                            subtitle={item.name}
                            left={(props) =>
                                <Image
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }}
                                    style={{ width: 40, height: 40, borderRadius: 40 }}
                                ></Image>
                            }
                            right={(props) => <IconButton{...props} icon="chevron-right"   onPress={() => navigation.push('Atores', {id: item.id})}></IconButton>}
                            
                        />
                        
                    </Card>
                )

                )}
            </View>
        </>
    )
}

export default FilmesDetalhes