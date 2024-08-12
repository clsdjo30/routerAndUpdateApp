import React, { useState } from 'react';
import { StyleSheet, View, Pressable, ImageBackground , Image} from 'react-native';
import { Link } from 'expo-router';
import { PaperProvider, Surface, Text, Searchbar, Card , Banner} from 'react-native-paper';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/constant';

const testImg = require('../../assets/agate-rose.webp')

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = React.useState(true);
      
    return (
        <PaperProvider>
            <Banner
                visible={visible}
                actions={[
                    {
                        label: 'Fix it',
                        onPress: () => setVisible(false),
                    },
                    {
                        label: 'Learn more',
                        onPress: () => setVisible(false),
                    },
                ]}
                icon={({ size }) => (
                    <Image
                        source={{
                            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                        }}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                )}>
                There was a problem processing a transaction on your credit card.
            </Banner>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
                <View style={styles.cardContainer}>
                    <Surface style={styles.surface} elevation={2}>
                        <ImageBackground source={testImg} resizeMode='stretch' style={styles.img}>
                            <Pressable style={styles.pressCard}>
                                <Link href="/settings">Surface</Link>
                            </Pressable>
                        </ImageBackground>
                    </Surface>
                    <Surface style={styles.surface} elevation={2}>
                        <Text>Surface</Text>
                    </Surface>
                    <Surface style={styles.surface} elevation={2}>
                        <Text>Surface</Text>
                    </Surface>
                    <Card >
                        <Pressable style={styles.pressCard}>

                            <Link href="/settings">Surface</Link>
                        </Pressable>

                    </Card>


                </View>

            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SCREEN_WIDTH * 0.03
    },
    cardContainer: {
        paddingVertical: SCREEN_HEIGHT * 0.05,
        paddingHorizontal: SCREEN_HEIGHT * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: SCREEN_HEIGHT * 0.02
    },
    surface: {
        padding: 8,
        height: SCREEN_HEIGHT * 0.09,
        width: SCREEN_WIDTH * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: SCREEN_HEIGHT * 0.09,
        width: SCREEN_WIDTH * 0.4,
        
    },
    pressCard: {
        height: SCREEN_HEIGHT * 0.09,
        width: SCREEN_WIDTH * 0.4,
        justifyContent: 'center',
        alignItems: 'center',

    }
});
