import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';
import { getPosts } from '../services/wordpressApi';

const AllPosts: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        getPosts().then(response => setPosts(response.data));
    }, []);

    if (posts.length === 0) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>All Posts</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Loading...</p>
                </IonContent>
            </IonPage>
        );
    }

    // Separate the first post as the featured post
    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1); // Remaining posts after the featured post

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All Posts</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/* Featured Article */}
                <IonCard routerLink={`/post/${featuredPost.id}`} color="primary">
                    {/* Render the featured image */}
                    {featuredPost._embedded && featuredPost._embedded['wp:featuredmedia'] && featuredPost._embedded['wp:featuredmedia'][0]?.source_url && (
                        <IonImg src={featuredPost._embedded['wp:featuredmedia'][0].source_url} />
                    )}
                    <IonCardHeader>
                        <IonCardTitle>
                            <h1>{featuredPost.title.rendered}</h1>
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <div dangerouslySetInnerHTML={{ __html: featuredPost.excerpt.rendered }}></div>
                    </IonCardContent>
                </IonCard>

                {/* Regular Posts */}
                {remainingPosts.map((post) => (
                    <IonCard key={post.id} routerLink={`/post/${post.id}`}>
                        {/* Render the featured image */}
                        {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]?.source_url && (
                            <IonImg src={post._embedded['wp:featuredmedia'][0].source_url} />
                        )}
                        <IonCardHeader>
                            <IonCardTitle>{post.title.rendered}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default AllPosts;
