import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { getPostDetails } from '../services/wordpressApi';

interface PostDetailsProps {
    match: {
        params: {
            postId: string;
        };
    };
}

const PostDetails: React.FC<PostDetailsProps> = ({ match }) => {
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        getPostDetails(Number(match.params.postId)).then(response => setPost(response.data));
    }, [match.params.postId]);

    if (!post) return <div>Loading...</div>;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{post.title.rendered}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            </IonContent>
        </IonPage>
    );
};

export default PostDetails;
