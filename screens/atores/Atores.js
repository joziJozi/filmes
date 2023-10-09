import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { View } from 'react-native'

const Atores = ({ navigation, route }) => {

    const [ator, setAtor] = useState({})
   

    useEffect(() => {
        const id = route.params.id
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
        </>
    )
    }
    export default Atores