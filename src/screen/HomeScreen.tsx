import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

import {SearchBar} from '../components/SearchBar';
import {MovieList} from '../components/MovieList';
import {theme} from '../config/Theme';
import {requestForMovies} from '../services/ApiCalls';

export type IHomeScreenProps = {};

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  const [hasAdultContent, setHasAdultContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchText, setSearchText] = useState<string>('');
  const todayDate = new Date().toISOString().slice(0, 10);

  const getPopularMovies = async () => {
    try {
      const data = await requestForMovies(`movie/popular/`, {
        'release_date.lte': todayDate,
        sort_by: {
          type: 'popularity.desc',
          name: 'Most popular',
        },
        with_release_type: '1|2|3|4|5|6|7',
        include_adult: hasAdultContent,
      });
      setLoading(true);
      setMovieData(data?.results);
    } catch (err) {
      console.warn(err);
    }
  };

  const getSearchMovies = async (searchText: string) => {
    try {
      const data = await requestForMovies('search/movie', {
        'release_date.lte': todayDate,
        query: searchText,
        sort_by: {
          type: 'popularity.desc',
          name: 'Most popular',
        },
        with_release_type: '1|2|3|4|5|6|7',
        include_adult: hasAdultContent,
      });
      setLoading(true);
      setMovieData(data?.results);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (searchText === '') getPopularMovies();
  }, [searchText]);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../assets/images/movie_reel.png')}
        style={styles.headerImageStyle}
        resizeMode="stretch"
      />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearchPress={getSearchMovies}
      />
      {!loading ? (
        <View style={styles.loadingStyle}>
          <ActivityIndicator size={theme.SIZE / 2} />
        </View>
      ) : (
        <MovieList data={movieData} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerImageStyle: {
    width: '95%',
    height: theme.SIZE,
    alignSelf: 'center',
    marginTop: theme.SIZE / 10,
  },
  loadingStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {HomeScreen};
