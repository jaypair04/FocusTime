import React from 'react';
import {View, StyleSheet, Text, Flatlist, SafeAreaView} from 'react-native';

import {fontSizes, spacing} from '../../utils/sizes';
import {RoundedButton} from '../../components/RoundedButton';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


export const FocusHistory = ({ focusHistory, setFocusHistory }) => {
  const clearHistory = () => {
    setFocusHistory([]);
  }

  return (
    <>
    <SafeAreaView style={{flex: 0.5, alignItems: 'center'}}>
      <Text style={styles.title}> 
        Things we've focused on 
      </Text>
      {!!focusHistory.length && (
        <Flatlist
          style={{flex: 1}}
          contentContainerStyle={{ alignItems: 'center'}}
          data={focusHistory}
          renderItem={({ item, index }) => (
            <Text style={styles.historyItem(item.status)}>
              {item.subject}
            </Text>
          )}
        />
      )}
      {!focusHistory.length && (
        <Text style={{color: 'white'}}>Nothing yet</Text>
      )}
    </SafeAreaView>
    <View style={styles.clearContainer}>
      <RoundedButton size={75} title='Clear' onPress={() => clearHistory()} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1  ? 'red' : 'green',
    fontSize: fontSizes.md
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.sm
  }
});