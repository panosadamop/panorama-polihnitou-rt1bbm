import React, { useEffect, useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail, IonImg
} from '@ionic/react';
import { getPosts } from '../services/wordpressApi';

const AllPosts: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        getPosts().then(response => setPosts(response.data));
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All Posts</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {posts.map((post) => {
                        // Get the featured image URL from the embedded media data
                        const featuredImage = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]?.source_url;

                        return (
                            <IonItem key={post.id} routerLink={`/post/${post.id}`}>
                                {/* Render the featured image */}
                                {featuredImage && (
                                    <IonThumbnail slot="start">
                                        <IonImg src={featuredImage} />
                                    </IonThumbnail>
                                )}
                                <IonLabel>
                                    <h2>{post.title.rendered}</h2>
                                </IonLabel>
                            </IonItem>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default AllPosts;
