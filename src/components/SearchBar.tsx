import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../config/Theme';

export type ISearchBarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  onSearchPress: (text: string) => void;
};

const SearchBar: React.FC<ISearchBarProps> = ({
  searchText,
  setSearchText,
  onSearchPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Search Your Movie Here..."
        placeholderTextColor={theme.colors.gray}
        style={styles.textInputStyle}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity onPress={() => onSearchPress(searchText)}>
        <Image
          source={require('../assets/images/searchIcon.png')}
          style={styles.searchIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.SIZE / 8,
    borderRadius: theme.SIZE / 4,
    elevation: 5,
    margin: theme.SIZE / 8,
  },
  textInputStyle: {
    flex: 1,
    color: theme.colors.black,
  },
  searchIconStyle: {
    width: theme.SIZE / 4,
    height: theme.SIZE / 4,
  },
});

export {SearchBar};
