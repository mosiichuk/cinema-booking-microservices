import React from 'react';
import {useRouter} from "next/router";

const MovieDetailsPage = () => {
    const router = useRouter();

    return (
        <div>
            Movie: {router.query.id}
        </div>
    );
};

export default MovieDetailsPage;
