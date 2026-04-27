import Head from 'next/head';

const VersionDetailsPage = () => {

    return (
        <>
            <Head>
                <title>Gameplay - The Realm of Rivals</title>
            </Head>
            <main className="w-full min-h-screen">
                {/* Full-width image */}
                <div
                    className="relative w-full h-[30vh] md:h-[40vh] bg-cover bg-bottom bg-fixed"
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="title p-4 text-4xl md:text-[5rem] mt-20 text-white text-center">
                            GAMEPLAY
                        </h1>
                    </div>
                </div>

                <div className="bg-backblue bg-opacity-80 p-4 md:p-10 md:px-[20%] shadow-xl">
                    <div className="mb-10">
                        <div className='w-full flex flex-row justify-center'>
                            <h2 className="title text-4xl md:text-[4rem] text-lightblue mb-1 md:mb-4">
                                rivalium the gay game
                            </h2>
                        </div>


                        <hr className="border-lightblue/[0.2] mb-5 w-full center" />

                        <p className="text-lightblue secondary-text text-md md:text-xl">bomboclaaaat.</p>
                    </div>
                    <hr className="border-lightblue/[0.2] mb-5 w-full center" />
                </div>
            </main>
        </>
    );
};

export default VersionDetailsPage;
