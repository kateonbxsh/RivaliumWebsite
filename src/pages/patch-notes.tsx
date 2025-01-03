import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/style/pages/download/download.module.scss';
import { apiUrl } from '@/components/constant';

type Version = any;

const PatchNotes = () => {
    const [versions, setVersions] = useState<Version[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchVersions = async () => {
            try {
                const response = await axios.get(`${apiUrl}/version/all`);
                setVersions(response.data.versions.filter((version: any) => version.published));
            } catch (error) {
                console.error('Error fetching versions:', error);
            }
        };

        fetchVersions();
    }, []);

    const handleItemClick = (version: string) => {
        router.push(`/patch-notes/${version}`);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <h1 className="title">PATCH NOTES</h1>
            <div className="max-h-screen w-full p-10 overflow-y-auto h-2/3 scrollbar-thin">
                {versions.map((version) => (
                    <div
                        key={version.version}
                        className="bg-backblue opacity-70 p-4 mb-4 shadow-md cursor-pointer hover:opacity-60 transition duration-300
                        flex flex-col items-start text-lightblue"
                        onClick={() => handleItemClick(version.version)}
                    >
                        <h3 className="text-5xl font-semibold p-4">{version.version} - {version.changelog?.title}</h3>
                        <p className="text-xl px-9 pb-4 secondary-text text-lightblue ">{version.changelog?.generalText}</p>
                        <p className="text-xs self-right secondary-text text-baseblue">Published at {new Date(version.publishedAt).toString()}</p>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default PatchNotes;