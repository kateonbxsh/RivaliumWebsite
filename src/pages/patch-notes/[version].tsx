import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { apiUrl } from '@/components/constant';
import DefaultSplash from '@/assets/images/splash/patch-notes-splash.webp';
import { FaPlus, FaMinus, FaTools, FaEdit, FaChevronRight, FaArrowRight, FaAdjust, FaExchangeAlt } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";
import Head from 'next/head';

type VersionDetails = {
  version: string;
  issuedAt: number;
  issuedBy: { username: string };
  changelog?: {
    title?: string;
    generalText: string;
    level: string;
    imageUrl?: string;
    changes: Change[];
  };
  published: boolean;
  publishedAt: number;
  publishedBy: { username: string };
};

type Change = {
  title?: string;
  type: string;
  description: string;
  changes?: Change[];
  oldValue?: string | number;
  newValue?: string | number;
};
const ChangeTypeToScore: Record<string, number> = {
    "category": 6,
    "add": 5,
    "adjust": 4,
    "remove": 3,
    "fix": 2,
    "change": 1,
}

function sortVersion(changes: Change[]): Change[] {
    return changes
        .sort((c1, c2) => ((ChangeTypeToScore[c2.type] ?? 0) - (ChangeTypeToScore[c1.type] ?? 0)))
        .map(change => {
            change.changes = change.changes ? sortVersion(change.changes) : change.changes;
            return change;
        });
}

const VersionDetailsPage = () => {
  const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(null);
  const router = useRouter();
  const { version } = router.query;

  useEffect(() => {
    if (version) {
      const fetchVersionDetails = async () => {
        try {
          const response = await axios.get(`${apiUrl}/version/${version}`);
          const retrievedVersion = response.data;
          if (retrievedVersion.changelog?.changes) {
            retrievedVersion.changelog.changes = sortVersion(retrievedVersion.changelog.changes);
          }
          setVersionDetails(retrievedVersion);
        } catch (error) {
          router.push('/404');
        }
      };

      fetchVersionDetails();
    }
  }, [version]);

  if (!versionDetails) {
    return <main className='w-full min-h-screen flex flex-col justify-content items-center'>
        <div className="title text-center">Loading...</div>
        </main>;
  }

  const renderChanges = (changes: Change[]) => {
    return (
      <ul className="list-none">
        {changes.map((change, index) => (
          <li key={index} className="mb-3 text-lightblue flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              {change.type === 'add' && <FaPlus className="text-green-300" />}
              {change.type === 'remove' && <FaMinus className="text-red-400" />}
              {change.type === 'fix' && <FaTools className="text-lightblue" />}
              {change.type === 'change' && <FaEdit className="text-white" />}
              {change.type === 'adjust' && <FaExchangeAlt className="text-lightblue" />}
              {change.type === 'category' && <FaChevronRight className="text-white" />}
              <span className="text-lg md:text-3xl font-bold">
                {change.title || 'Unnamed Change'}
              </span>
            </div>
            <div className="secondary-text text-sm md:text-xl flex flex-row items-center">
              <p className="ml-6 pr-5">{change.description}</p>
              {change.type === 'adjust' && change.newValue && change.oldValue && (
                <>
                  <p className="text-red-300 pr-2">{change.oldValue}</p>
                  <FaArrowRight className="text-lightblue pr-2" />
                  <p className="text-green-300 pr-2">{change.newValue}</p>
                </>
              )}
            </div>
            {change.changes && (
              <div
                className={`pl-4 ml-1.5 md:pl-10 py-2 md:pt-5 w-full ${
                  change.type === 'category' ? 'border-l-2 border-lightblue/[0.2]' : ''
                }`}
              >
                {renderChanges(change.changes)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };
  

  return (
    <>
    <Head>
        <title>Patch {versionDetails.version} Notes - The Realm of Rivals</title>
    </Head>
    <main className="w-full min-h-screen">
      {/* Full-width image */}
      <div
        className="relative w-full h-[30vh] md:h-[40vh] bg-cover bg-bottom bg-fixed"
        style={{
          backgroundImage: `url(${versionDetails.changelog?.imageUrl || DefaultSplash.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="title p-4 text-4xl md:text-[5rem] mt-20 text-white text-center">
            PATCH {versionDetails.version} NOTES
          </h1>
        </div>
      </div>

      <div className="bg-backblue bg-opacity-80 p-4 md:p-10 md:px-[20%] shadow-xl">
        <div className="mb-10">
            <div className='w-full flex flex-row justify-center'>
                <h2 className="title text-4xl md:text-[4rem] font-bold text-lightblue mb-1 md:mb-4">
                {versionDetails.changelog?.title || ''}
            </h2>
            </div>
          <p className="text-sm md:text-xl mb-3 md:mb-5 secondary-text text-lightblue">{versionDetails.changelog?.generalText}</p>
          
          {versionDetails.published && (<div className="text-[0.5rem] mb-3 md:mb-6 md:text-xs secondary-text opacity-60 w-full flex flex-row justify-center">
              <p className='text-lightblue'>
                <span className="font-bold text-lightblue">Published at </span>{' '}
                {new Date(versionDetails.publishedAt).toLocaleDateString()}
                <span className="font-bold text-lightblue"> by </span>{' '}
                {versionDetails.publishedBy.username}
              </p>
            </div>)}

            <hr className="border-lightblue/[0.2] mb-5 w-full center" />

          {versionDetails.changelog?.changes ? (
            <div>{renderChanges(versionDetails.changelog.changes)}</div>
          ) : (
            <p className="text-lightblue secondary-text text-md md:text-xl">No changelog available for this version.</p>
          )}
        </div>
        <hr className="border-lightblue/[0.2] mb-5 w-full center" />
      </div>
    </main>
    </>
  );
};

export default VersionDetailsPage;
