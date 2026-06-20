import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Details({ route }) {
    const { post } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: '#f5f5f5' }}>
            <Text style={{ fontSize: 18, color: '#333', marginBottom: 16 }}>
                #{post.id} - {post.title}
            </Text>

            <Text style={{ color: '#666' }}>
                {post.body}
            </Text>
        </SafeAreaView>
    );
}

export { Details };
