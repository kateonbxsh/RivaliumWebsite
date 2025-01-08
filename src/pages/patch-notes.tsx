import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { apiUrl } from '@/components/constant';
import Button from '@/components/Button';
import DefaultSplash from '@/assets/images/splash/patch-notes-splash.webp'
import Image from 'next/image';
import Head from 'next/head';

type Version = {
  version: string;
  changelog?: {
    title?: string;
    generalText?: string;
  };
  imageUrl?: string; // Add this if versions have associated images
};

const PatchNotes = () => {
  const [versions, setVersions] = useState<Version[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>('patch'); // Default filter to 'patch'
  const itemsPerPage = 15; // Display 15 items per page

  const router = useRouter();

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/version/all`, {
          params: {
            itemsPerPage,
            page,
            level: filter,
          },
        });
        setVersions(response.data.versions.filter((version: any) => version.published));
        setTotal(response.data.total); // Set the total items from the API
      } catch (error) {
        console.error('Error fetching versions:', error);
      }
    };

    fetchVersions();
  }, [page, filter]);

  const handleItemClick = (version: string) => {
    router.push(`/patch-notes/${version}`);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <>
    <Head>
        <title>Rivalium Patch Notes - The Realm of Rivals</title>
    </Head>
    <main className="w-full mt-20 md:mt-[150px] px-4 pb-[200px] min-h-screen">
      <div className="w-full flex flex-row justify-center">
        <h1 className="text-4xl md:text-[5rem] pt-10 pb-10 text-center title">PATCH NOTES</h1>
      </div>

      {/* Controls: Pagination and Filter */}
      <div className="flex w-full justify-between mb-4 items-center">
        <div className="flex justify-center items-center">
          <Button
            small
            type="main"
            content="Previous"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          />
          <span className="px-2 md:px-4 md:py-2 text-sm md:text-lg secondary-text text-lightblue">
            Page {page} of {totalPages}
          </span>
          <Button
            small
            type="main"
            content="Next"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          />
        </div>
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1); // Reset to page 1 when filter changes
          }}
          className="p-2 border border-lightblue rounded w-1/4 text-center text-xs md:text-lg 
            secondary-text bg-transparent text-lightblue"
        >
          <option value="season" className="bg-transparent">
            Season
          </option>
          <option value="minor">Minor</option>
          <option value="patch">Patch</option>
          <option value="build">Build</option>
        </select>
      </div>

      {/* Versions Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-scroll md:overflow-y-auto">
        {versions.map((version) => {
          let title = version.version;
          let secondaryTitle = version.changelog?.title || '';
          let imageUrl = version.imageUrl || DefaultSplash;

          return (
            <div
              key={version.version}
              className="bg-backblue opacity-80 p-4 shadow-md cursor-pointer hover:opacity-70 transition duration-300
              flex flex-col items-center justify-between text-lightblue"
              onClick={() => handleItemClick(version.version)}
            >
              <Image
                src={imageUrl}
                alt={title}
                className="w-full h-[100px] md:h-[250px] object-cover rounded-t-lg"
              />
              <div className="flex flex-col items-center justify-start mt-2 text-center">
                <p className="text-4xl md:text-5xl font-bold">{title}</p>
                <p className="text-md md:text-xl secondary-text mt-1">{secondaryTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
    </>
  );
};

export default PatchNotes;
