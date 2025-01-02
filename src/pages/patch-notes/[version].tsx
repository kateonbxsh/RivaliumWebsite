import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type VersionDetails = any;

const VersionDetailsPage = () => {
    const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(null);
    const router = useRouter();
    const { version } = router.query;

    useEffect(() => {
        if (version) {
            const fetchVersionDetails = async () => {
                try {
                    const response = await axios.get(`http://localhost:1840/api/v1/version/${version}`);
                    setVersionDetails(response.data);
                } catch (error) {
                    console.error('Error fetching version details:', error);
                }
            };

            fetchVersionDetails();
        }
    }, [version]);

    if (!versionDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-1/2 p-10">
            <h1 className="font-bold mb-6 title">PATCH NOTES - {versionDetails.version}</h1>
            <div className="max-h-screen w-full p-5 overflow-y-auto scrollbar-thin bg-backblue opacity-80 text-lightblue
                flex flex-col items-start">
                <h3 className="text-5xl font-semibold p-4">{versionDetails.version} - {versionDetails.changelog.title}</h3>
                <p className="text-xl px-9 pb-4 secondary-text text-lightblue">{versionDetails.changelog.generalText}</p>
                <p className="text-base px-9 pb-4 secondary-text text-lightblue">{versionDetails.changelog.details}</p>
                <p className="text-xs self-right secondary-text text-baseblue">Published at {new Date(versionDetails.publishedAt).toString()}</p>
                <p className="text-xs self-right secondary-text text-baseblue">Published by {versionDetails.publishedBy.username}</p>
            </div>
        </div>
    );
};

export default VersionDetailsPage;