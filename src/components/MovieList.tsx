import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../config/Theme';
import {getImageApi} from '../services/ApiCalls';
import {SearchBar} from './SearchBar';

export type IMovieListProps = {};

const MovieList: React.FC<IMovieListProps> = ({data}: any) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.movieCardContainer} key={item.id}>
              <Image
                source={getImageApi(item.poster_path)}
                style={styles.movieCoverStyle}
                resizeMode="cover"
              />
              <View style={styles.movieDetails}>
                <View style={{flex: 1}}>
                  {/* movie title */}
                  <View style={{marginBottom: theme.SIZE / 20}}>
                    <Text
                      style={{color: 'red', fontWeight: '900', fontSize: 18}}>
                      {item.title}
                    </Text>
                  </View>

                  {/* movie ratings */}
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: theme.SIZE / 20,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.movieKeyTextStyle}>Rating : </Text>
                    <Text style={styles.movieValueKeyTextStyle}>
                      {item.vote_count}/{item.vote_average}
                    </Text>
                  </View>

                  {/* movie release date */}
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: theme.SIZE / 20,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.movieKeyTextStyle}>
                      Release date :{' '}
                    </Text>
                    <Text style={styles.movieValueKeyTextStyle}>
                      {item.release_date.replace('-', '/')}
                    </Text>
                  </View>

                  {/* movie description */}
                  <View>
                    <Text style={styles.movieKeyTextStyle}>Description</Text>
                    <Text
                      style={[styles.movieValueKeyTextStyle]}
                      numberOfLines={4}>
                      {item.overview ? item.overview : 'Not Available'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  movieCoverStyle: {
    borderTopLeftRadius: theme.SIZE / 20,
    borderBottomLeftRadius: theme.SIZE / 20,
    flex: 1,
    height: theme.dimensions.width / 1.8,
  },
  movieCardContainer: {
    alignItems: 'flex-start',
    backgroundColor: theme.colors.black,
    borderRadius: theme.SIZE / 20,
    elevation: 5,
    flexDirection: 'row',
    marginBottom: theme.SIZE / 8,
    marginHorizontal: theme.SIZE / 8,
    overflow: 'hidden',
  },
  movieDetails: {
    borderBottomWidth: 2,
    borderColor: 'white',
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderRadius: theme.SIZE / 20,
    flex: 1.2,
    padding: theme.SIZE / 10,
  },
  movieKeyTextStyle: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: '900',
  },
  movieValueKeyTextStyle: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
  },
});

export {MovieList};
