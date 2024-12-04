import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [showAR, setShowAR] = useState(false);

  return (
    <View style={styles.container}>
      {!showAR ? (
        <>
          <Text style={styles.title}>Welcome to the AR Model Viewer!</Text>
          <Button title="View 3D Model" onPress={() => setShowAR(true)} />
        </>
      ) : (
        <WebView
          source={{ uri: 'https://github.com/Shubhankaryadav/ARAPP/blob/master/assets/ar-viewer.html' }} // Replace with hosted HTML link
          style={styles.webView}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  webView: {
    width: '100%',
    height: '100%',
  },
});
