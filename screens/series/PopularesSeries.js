import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const PopularesSeries = ({navigation, route}) => {
    const [series, setSeries] = useState([])

    useEffect(() => {
      apiFilmes.get('/tv/popular').then(resultado => {
        setSeries(resultado.data.results)
      })
    }, [])
  return (
    <>
     <ScrollView style={{ padding: 15 }}>
       {series.map(item => (
        <>
        <Card style={{marginBottom: 15, padding: 15}}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
            <Card.Content>
                <Text variant="titleLarge">{item.name}</Text>
                <Text variant="bodyMedium">{item.overview}</Text>
            </Card.Content>

        </Card>
    </>
       ))}
      </ScrollView>
    </>
    
  )
}

export default PopularesSeries