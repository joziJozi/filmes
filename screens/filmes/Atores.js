import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const Atores = ({ navigation, route }) => {

    const [film, setFilm] = useState([])
    const [ator, setAtor] = useState({})

    useEffect(() => {

        const id = route.params.id

        apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
            setFilm(resultado.data.cast)
        })
        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtor(resultado.data)

        })
    }, [])

    return (
        <>

            <View style={{ padding: 15 }}>
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} />
                <Card style={{ marginBottom: 15 }}>
                    <Card.Content style={{ marginBottom: 15 }}>
                        <Text variant="titleLarge">{ator.name}</Text>
                        <Text variant="bodyMedium">{ator.biography}</Text>
                    </Card.Content>
                </Card>
            </View>
            <Card style={{ marginBottom: 15 }} mode='outlined' >
                <Card.Content>
                <Text variant='bodyMedium'>Gênero:{ator.gender}</Text>
                <Text variant='bodyMedium'>Data de Nascimento:{ator.birthday}</Text>
                <Text variant='bodyMedium'>Lugar de Nascimento:{ator.place_of_birth}</Text>
                </Card.Content>
            </Card>
            {film.map(item => (
                    <Card mode='outlined' key={item.id} style={{ marginBottom: 15 }}>
                        <Card.Title
                            title={item.title}
                            subtitle={item.release_date}
                            left={(props) =>
                                <Image
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }}
                                    style={{ width: 40, height: 40, borderRadius: 40 }}
                                ></Image>
                            }
                            right={(props) => <IconButton{...props} icon="chevron-right"   onPress={() => navigation.push('Filmes-Detalhes', {id: item.id})}></IconButton>}
                            
                        />
                        
                    </Card>
                )

                )}
            
        </>
    )
}

export default Atores