import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Card, Text } from 'react-native-paper'
import { ScrollView, View } from 'react-native'

  const AtoresPopulares = () => {

  const [ator, setAtor] = useState([])

  useEffect(() => {
    apiFilmes.get('/person/popular').then(resultado => {
      setAtor(resultado.data.results)
    })
  }, [])

  return (
    <>
    <ScrollView>
       {ator.map(item => (
                <>
                    <Card style={{marginBottom: 15, padding: 15}}>

                        <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} />
                        <Card.Content>
                            <Text variant="titleLarge">{item.name}</Text>
                        </Card.Content>

                    </Card>
                </>
            ))}
      </ScrollView>
    </>
  )
}
export default AtoresPopulares


