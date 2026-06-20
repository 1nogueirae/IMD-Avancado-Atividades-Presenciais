import { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({ navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const posts = await response.json();
            setPosts(posts);
        } catch (error) {
            console.error('Erro ao buscar posts:', error);
        }
    };

    const irParaDetalhes = (post) => {
        navigation.navigate('Details', { post });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                style={{ width: 320, alignSelf: 'center' }}
                contentContainerStyle={{ paddingVertical: 8 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Details', { post: item })}
                        style={{
                            backgroundColor: '#4169E1',
                            width: '100%',
                            height: 90,
                            padding: 12,
                            marginBottom: 8,
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                borderBottomWidth: 1,
                                borderBottomColor: 'white',
                                alignSelf: 'flex-start',
                                marginBottom: 4,
                            }}
                        >
                            Post {item.id}
                        </Text>

                        <Text
                            style={{ color: 'white' }}
                            numberOfLines={2}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

export { Home };