import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { getPosts } from '../services/wordpressApi';

interface CategoryPostsProps {
    match: {
        params: {
            categoryId: string;
        };
    };
}

const CategoryPosts: React.FC<CategoryPostsProps> = ({ match }) => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        getPosts(Number(match.params.categoryId)).then(response => setPosts(response.data));
    }, [match.params.categoryId]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Posts by Category</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {posts.map((post) => (
                        <IonItem key={post.id} routerLink={`/post/${post.id}`}>
                            <IonLabel>{post.title.rendered}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default CategoryPosts;
