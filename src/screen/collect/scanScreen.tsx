
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const { width, height } = Dimensions.get('window');
const SCAN_BOX_SIZE = 220;
// const SCAN_BOX_PADDING = 80;

export default function ScannerScreen({ navigation }) {
  const [torchOn, setTorchOn] = useState(false);
  const [canScan, setCanScan] = useState(true);

  const { requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {
    handlePermission();
  }, []);

  const handlePermission = async () => {
    const granted = await requestPermission();
    if (!granted) {
      Alert.alert('Camera Permission', 'Camera access is required to scan QR codes.');
      Linking.openSettings();
    }
  };

  const scanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128','code-39','code-93'],
    onCodeScanned: (codes) => {
      if (canScan && codes.length > 0) {
        const value = codes[0]?.value;
        const type = codes[0]?.type;

        setCanScan(false);

        if (type === 'qr') {
          Alert.alert('QR Scanned', value, [
            { text: 'OK', onPress: () => setCanScan(true) },
            { text: 'Open', onPress: () => Linking.openURL(value) },
          ]);
        } else {
          Alert.alert('Barcode Scanned', value, [
            { text: 'OK', onPress: () => setCanScan(true) },
          ]);
        }
      }
    },
  });

  if (!device) {
    return (
      <View style={styles.center}>
        <Text style={{ color:'#000' }}>Camera not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        torch={torchOn ? 'on' : 'off'}
        codeScanner={scanner}
        onTouchEnd={() => setCanScan(true)}
      />


      <View style={styles.overlay}>
        <View style={styles.topSection}>
          <Image
            source={require('../../assets/images/splash/Frame1.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>


        <View style={styles.bottomSection}>
          <View style={styles.iconsContainer}>
            <Image
              source={require('../../assets/images/splash/tapicon.png')}
              style={styles.tapicon}
              resizeMode="contain"
            />

            <View style={styles.lineStyle} />

            <Image
              source={require('../../assets/images/splash/hearticon.png')}
              style={styles.hearticon}
              resizeMode="contain"
            />
          </View>


        <View style={styles.middleSection}>
          <View style={styles.scanFrame}>

            <View style={[styles.corner, styles.topLeftCorner]} />
            <View style={[styles.corner, styles.topRightCorner]} />
            <View style={[styles.corner, styles.bottomLeftCorner]} />
            <View style={[styles.corner, styles.bottomRightCorner]} />
            <View style={styles.scanLine} />
          </View>

          {/* <Text style={styles.scanText}>
            Position QR code within frame
          </Text> */}
        </View>


          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Collect')}
          >
            <Text style={styles.buttonText}>Scan or Tap</Text>
          </TouchableOpacity>

          <Text style={styles.instructionText}>
            If you don't have a visible QR{'\n'}
            you can bring your phone closer to{'\n'}
            read the NFC tag.
          </Text>
        </View>


        <TouchableOpacity
          style={styles.flashBtn}
          onPress={() => setTorchOn(!torchOn)}
        >
          <Text style={styles.flashText}>
            {torchOn ? '🔦 On' : '💡 Off'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    marginTop:20,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  topSection: {
    alignItems: 'center',
    paddingTop: height * 0.02,
  },

  middleSection: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomSection: {
    alignItems: 'center',
    paddingBottom: height * 0.04,
  },

  logo: {
    width: width * 0.9,
    height: height * 0.1,
  },

  scanFrame: {
    width: SCAN_BOX_SIZE,
    height: SCAN_BOX_SIZE,
    backgroundColor: 'transparent',
    borderWidth: 0,
    position: 'relative',
    marginBottom: 10,
  },

  corner: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderColor: '#fff',
  },

  topLeftCorner: {
    top: 0,
    left: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
  },

  topRightCorner: {
    top: 0,
    right: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
  },

  bottomLeftCorner: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
  },

  bottomRightCorner: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },

  scanLine: {
    position: 'absolute',
    height: 2,
    width: SCAN_BOX_SIZE - 10,
    // backgroundColor: '#00FF00',
    top: '50%',
    left: 5,
    shadowColor: '#00FF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },

  scanText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  iconsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  tapicon: {
    resizeMode: 'contain',
    marginBottom: 10,
  },

  hearticon: {
    width: width * 0.55,
    height: height * 0.15,
    resizeMode: 'contain',
    marginTop: 10,
  },

  flashBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#fff',
    width: 55,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  flashText: {
    fontSize: 14,
    color: '#000',
  },

  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  lineStyle: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    width: width * 0.7,
    marginVertical: 10,
  },

  instructionText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
  },
});

