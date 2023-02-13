import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base'
import { getImages } from '../api/pexels'
import ImageList from '../components/ImageList';

const HomeScreen = ({ openSearch }) => {

  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const loadImages = async ( searchTerm ) => {
    const res = await getImages(searchTerm);
    setPhotos(res.data.photos)
  }
  useEffect(() => {
    loadImages();
  }, [])
  const handleSearch = async () => {
    await loadImages(searchTerm)
  }
  return (
    <>
      {openSearch && (
        <View style={styles.searchSection}>
          <Input placeholder='Search a Term'
            leftIcon={{type: 'feather', name: 'search', color: '#fff'}}
            inputContainerStyle={styles.searchInput}
            leftIconContainerStyle={styles.searchLeftIcon}
            style={styles.input}
            onChangeText={(value) => setSearchTerm(value)}
          />
          <Button title='Search' buttonStyle={styles.buttonSearch} onPress={() => handleSearch()}/>
        </View>
      )}
      <View style={styles.constainer} >
        <ImageList photos={photos}/>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  totalResultText: {
    color: '#D9D9D9',
    textAlign: 'right',
    width: '100%',
    paddingRight: 10,
  },
  searchInput: {
    backgroundColor: '#2c292c',
    borderBottomWidth: 0,
    paddingHorizontal: 4,
  },
  searchSection: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 80,
    flex: 1/5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchLeftIcon: {
    paddingStart: 10,
    marginRight: 7,
  },
  input:{
    color: '#fff'
  },
  buttonSearch: {
    backgroundColor: '#229783',
    marginBottom: 27,
  }
})

export default HomeScreen