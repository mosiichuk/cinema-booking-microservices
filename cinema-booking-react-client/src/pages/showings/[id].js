import React from 'react';
import {useRouter} from "next/router";

const ShowingDetailsPage = () => {
    const router = useRouter();

    return (
        <div>
            Showing: {router.query.id}
        </div>
    );
};

export default ShowingDetailsPage;
